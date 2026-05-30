const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const { clipboard } = require('electron');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
let archiver = null;
try {
  archiver = require('archiver');
} catch {
  archiver = null;
}

app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');

let win = null;
const ideStateFilePath = () => path.join(app.getPath('userData'), 'ide-rtk-state.json');
const watchedFiles = new Map();
let windowStateSaveTimer = null;

function getWindowBounds() {
  if (!win) return null;
  try {
    return {
      bounds: win.getBounds(),
      isMaximized: win.isMaximized(),
      isFullScreen: win.isFullScreen(),
    };
  } catch {
    return null;
  }
}

function persistWindowState() {
  if (!win) return;
  if (windowStateSaveTimer) clearTimeout(windowStateSaveTimer);
  windowStateSaveTimer = setTimeout(() => {
    windowStateSaveTimer = null;
    const existing = readIdeState();
    const windowState = getWindowBounds();
    if (!windowState) return;
    writeIdeState({
      ...existing,
      windowBounds: windowState.bounds,
      windowMaximized: windowState.isMaximized,
      windowFullScreen: windowState.isFullScreen,
      updatedAt: new Date().toISOString(),
    });
  }, 250);
}

function createWindow() {
  const savedState = readIdeState();
  const savedBounds = savedState?.windowBounds && typeof savedState.windowBounds === 'object' ? savedState.windowBounds : null;
  win = new BrowserWindow({
    width: savedBounds?.width || 1600,
    height: savedBounds?.height || 980,
    minWidth: 1200,
    minHeight: 760,
    title: 'RTK IDE',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#08111a',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  if (savedBounds && Number.isFinite(savedBounds.x) && Number.isFinite(savedBounds.y)) {
    try {
      win.setBounds(savedBounds);
    } catch {}
  }
  if (savedState?.windowMaximized) {
    try { win.maximize(); } catch {}
  } else if (savedState?.windowFullScreen) {
    try { win.setFullScreen(true); } catch {}
  }
  win.loadFile(path.join(__dirname, 'index.html'));
  win.on('resize', persistWindowState);
  win.on('move', persistWindowState);
  win.on('maximize', persistWindowState);
  win.on('unmaximize', persistWindowState);
  win.on('enter-full-screen', persistWindowState);
  win.on('leave-full-screen', persistWindowState);
  win.on('close', () => {
    persistWindowState();
  });
}

function safeStat(entryPath) {
  try {
    return fs.statSync(entryPath);
  } catch {
    return null;
  }
}

function walkTree(rootPath, depth = 0, maxDepth = 4) {
  const stat = safeStat(rootPath);
  if (!stat) return null;
  const node = {
    name: path.basename(rootPath) || rootPath,
    path: rootPath,
    type: stat.isDirectory() ? 'directory' : 'file',
    children: [],
  };
  if (node.type === 'directory' && depth < maxDepth) {
    try {
      const items = fs.readdirSync(rootPath, { withFileTypes: true })
        .filter((item) => !item.name.startsWith('.'))
        .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || a.name.localeCompare(b.name));
      node.children = items.map((item) => walkTree(path.join(rootPath, item.name), depth + 1, maxDepth)).filter(Boolean);
    } catch {}
  }
  return node;
}

function isTextLike(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ['.html', '.htm', '.css', '.js', '.mjs', '.cjs', '.json', '.md', '.txt', '.xml', '.svg', '.php', '.py', '.ts', '.tsx', '.jsx'].includes(ext);
}

function walkFiles(rootPath, maxDepth = 5, depth = 0, results = [], maxItems = 5000) {
  const stat = safeStat(rootPath);
  if (!stat) return results;
  if (results.length >= maxItems) return results;
  if (stat.isFile()) {
    results.push({ path: rootPath, name: path.basename(rootPath), isText: isTextLike(rootPath) });
    return results;
  }
  if (depth >= maxDepth) return results;
  try {
    const dir = fs.opendirSync(rootPath);
    for (let entry = dir.readSync(); entry; entry = dir.readSync()) {
      if (entry.name.startsWith('.')) continue;
      walkFiles(path.join(rootPath, entry.name), maxDepth, depth + 1, results, maxItems);
      if (results.length >= maxItems) break;
    }
    try { dir.closeSync(); } catch {}
  } catch {}
  return results;
}

function buildSshArgs(payload = {}, remoteCommand = '') {
  const host = String(payload?.host || '').trim();
  const user = String(payload?.user || '').trim();
  const hostName = String(payload?.hostName || '').trim();
  const port = String(payload?.port || '').trim();
  const identityFile = String(payload?.identityFile || '').trim();
  const target = hostName || host;
  const args = ['-o', 'BatchMode=yes', '-o', 'ConnectTimeout=6'];
  if (port) args.push('-p', port);
  if (identityFile) args.push('-i', identityFile);
  args.push(user ? `${user}@${target}` : target);
  if (remoteCommand) args.push(remoteCommand);
  return args;
}

function runSshCommand(payload = {}, remoteCommand = '') {
  return new Promise((resolve) => {
    const args = buildSshArgs(payload, remoteCommand);
    execFile('ssh', args, { shell: false, timeout: 10000, maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
      if (error?.code === 'ENOENT') {
        return resolve({
          ok: false,
          error: 'ssh_client_not_found',
          stderr: stderr || '',
          code: 127,
          hint: 'El cliente SSH no está instalado o no está en PATH.',
        });
      }
      if (error && !stdout && !stderr) {
        return resolve({ ok: false, error: error.message, stderr: stderr || '', code: error.code ?? 1 });
      }
      resolve({ ok: !error, stdout: stdout || '', stderr: stderr || '', code: error?.code ?? 0, error: error?.message || '' });
    });
  });
}

function listDirectory(rootPath, maxItems = 400) {
  const stat = safeStat(rootPath);
  if (!stat || !stat.isDirectory()) return [];
  try {
    const items = [];
    const dir = fs.opendirSync(rootPath);
    for (let entry = dir.readSync(); entry; entry = dir.readSync()) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(rootPath, entry.name);
      items.push({
        name: entry.name,
        path: fullPath,
        type: entry.isDirectory() ? 'directory' : 'file',
      });
      if (items.length >= maxItems) break;
    }
    try { dir.closeSync(); } catch {}
    return items.sort((a, b) => Number(b.type === 'directory') - Number(a.type === 'directory') || a.name.localeCompare(b.name));
  } catch {
    return [];
  }
}

function readIdeState() {
  try {
    const filePath = ideStateFilePath();
    if (!fs.existsSync(filePath)) return {};
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return {};
  }
}

function writeIdeState(data) {
  try {
    const filePath = ideStateFilePath();
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return { ok: true, path: filePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function isSubPath(candidatePath, parentPath) {
  const relative = path.relative(path.resolve(parentPath), path.resolve(candidatePath));
  return Boolean(relative) && !relative.startsWith('..') && !path.isAbsolute(relative);
}

function uniqueDestinationPath(dirPath, baseName) {
  const resolvedDir = path.resolve(dirPath);
  const cleanBaseName = String(baseName || 'item').trim() || 'item';
  let candidate = path.join(resolvedDir, cleanBaseName);
  if (!fs.existsSync(candidate)) return candidate;
  const ext = path.extname(cleanBaseName);
  const stem = ext ? cleanBaseName.slice(0, -ext.length) : cleanBaseName;
  let counter = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(resolvedDir, `${stem} (${counter})${ext}`);
    counter += 1;
  }
  return candidate;
}

async function copyDirectoryRecursive(sourcePath, destinationPath) {
  await fs.promises.mkdir(destinationPath, { recursive: true });
  const entries = await fs.promises.readdir(sourcePath, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(sourcePath, entry.name);
    const dest = path.join(destinationPath, entry.name);
    if (entry.isDirectory()) {
      await copyDirectoryRecursive(src, dest);
    } else if (entry.isSymbolicLink()) {
      const linkTarget = await fs.promises.readlink(src);
      await fs.promises.symlink(linkTarget, dest);
    } else {
      await fs.promises.copyFile(src, dest);
    }
  }
}

async function uploadLocalPathToRemote(payload, sourcePath, remoteDestination) {
  const stat = safeStat(sourcePath);
  if (!stat) return { ok: false, error: 'missing_source' };
  const remotePath = String(remoteDestination || '').trim();
  if (!remotePath) return { ok: false, error: 'missing_remote_destination' };
  if (stat.isDirectory()) {
    const mkdirResult = await runSshCommand(payload, `mkdir -p ${JSON.stringify(remotePath)}`);
    if (!mkdirResult.ok) return mkdirResult;
    const entries = await fs.promises.readdir(sourcePath, { withFileTypes: true });
    const uploaded = [];
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const childSource = path.join(sourcePath, entry.name);
      const childRemote = path.posix.join(remotePath, entry.name);
      const result = await uploadLocalPathToRemote(payload, childSource, childRemote);
      if (!result.ok) return result;
      uploaded.push(result);
    }
    return { ok: true, type: 'directory', remotePath, children: uploaded };
  }
  const parentRemote = path.posix.dirname(remotePath);
  const mkdirResult = await runSshCommand(payload, `mkdir -p ${JSON.stringify(parentRemote)}`);
  if (!mkdirResult.ok) return mkdirResult;
  const encoded = fs.readFileSync(sourcePath).toString('base64');
  const cmd = `printf %s ${JSON.stringify(encoded)} | base64 -d > ${JSON.stringify(remotePath)}`;
  const result = await runSshCommand(payload, cmd);
  if (!result.ok) return result;
  return { ok: true, type: 'file', remotePath };
}

function zipDirectoryRecursive(sourcePath, destinationPath) {
  return new Promise((resolve, reject) => {
    if (!archiver) {
      reject(new Error('zip_dependency_missing'));
      return;
    }
    const output = fs.createWriteStream(destinationPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    output.on('close', () => resolve({ bytes: archive.pointer() }));
    output.on('error', reject);
    archive.on('error', reject);
    archive.pipe(output);
    archive.directory(sourcePath, path.basename(sourcePath));
    archive.finalize().catch(reject);
  });
}

async function importPathsIntoDirectory(sourcePaths, targetDir) {
  const resolvedTarget = String(targetDir || '').trim() ? path.resolve(String(targetDir).trim()) : '';
  const targetStat = resolvedTarget ? safeStat(resolvedTarget) : null;
  if (!resolvedTarget || !targetStat?.isDirectory()) {
    return { ok: false, error: 'invalid_target_directory' };
  }
  const imported = [];
  const skipped = [];
  for (const rawSourcePath of Array.isArray(sourcePaths) ? sourcePaths : []) {
    const sourcePath = String(rawSourcePath || '').trim();
    if (!sourcePath) continue;
    const resolvedSource = path.resolve(sourcePath);
    const stat = safeStat(resolvedSource);
    if (!stat) {
      skipped.push({ path: resolvedSource, reason: 'missing_source' });
      continue;
    }
    if (resolvedSource === resolvedTarget || isSubPath(resolvedTarget, resolvedSource)) {
      skipped.push({ path: resolvedSource, reason: 'self_or_child_target' });
      continue;
    }
    const destination = uniqueDestinationPath(resolvedTarget, path.basename(resolvedSource));
    try {
      if (stat.isDirectory()) {
        if (typeof fs.cpSync === 'function') {
          if (typeof fs.promises.cp === 'function') {
            await fs.promises.cp(resolvedSource, destination, { recursive: true, force: false, errorOnExist: false });
          } else {
            await copyDirectoryRecursive(resolvedSource, destination);
          }
        } else {
          await copyDirectoryRecursive(resolvedSource, destination);
        }
      } else {
        await fs.promises.copyFile(resolvedSource, destination);
      }
      imported.push({ sourcePath: resolvedSource, destination, type: stat.isDirectory() ? 'directory' : 'file' });
    } catch (error) {
      skipped.push({ path: resolvedSource, reason: error.message });
    }
  }
  return { ok: true, targetDir: resolvedTarget, imported, skipped };
}

function unwatchFile(filePath) {
  const watcher = watchedFiles.get(filePath);
  if (watcher) {
    try { watcher.close(); } catch {}
    watchedFiles.delete(filePath);
  }
}

function watchFile(filePath) {
  const resolved = String(filePath || '');
  if (!resolved) return { ok: false, error: 'missing_path' };
  unwatchFile(resolved);
  try {
    const watcher = fs.watch(resolved, { persistent: false }, (_eventType) => {
      try {
        win?.webContents?.send('ide:file-changed', { filePath: resolved, eventType: 'changed', updatedAt: new Date().toISOString() });
      } catch {}
    });
    watchedFiles.set(resolved, watcher);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

ipcMain.handle('ide:pick-folder', async () => {
  const permission = await dialog.showMessageBox(win, {
    type: 'question',
    buttons: ['Permitir', 'Cancelar'],
    defaultId: 0,
    cancelId: 1,
    title: 'Permiso de carpeta',
    message: 'RTK IDE necesita permiso para acceder a una carpeta local.',
    detail: 'Solo se usará para leer, editar y guardar archivos dentro de la carpeta que selecciones.',
  });
  if (permission.response !== 0) return { ok: false, canceled: true, permissionDenied: true };
  const result = await dialog.showOpenDialog(win, { properties: ['openDirectory'] });
  if (result.canceled || !result.filePaths?.[0]) return { ok: false, canceled: true };
  const rootPath = result.filePaths[0];
  const existing = readIdeState();
  const saveResult = writeIdeState({
    ...existing,
    lastRootPath: rootPath,
    updatedAt: new Date().toISOString(),
  });
  console.log(`[state] pick-folder root=${rootPath} saved=${Boolean(saveResult?.ok)} path=${saveResult?.path || '-'}`);
  return { ok: true, rootPath, tree: { name: path.basename(rootPath) || rootPath, path: rootPath, type: 'directory' } };
});

ipcMain.handle('ide:pick-file', async (_event, payload = {}) => {
  try {
    const title = String(payload?.title || 'Seleccionar archivo');
    const filters = Array.isArray(payload?.filters) && payload.filters.length ? payload.filters : [{ name: 'Todos', extensions: ['*'] }];
    const result = await dialog.showOpenDialog(win, {
      title,
      properties: ['openFile'],
      filters,
    });
    if (result.canceled || !result.filePaths?.[0]) return { ok: false, canceled: true };
    return { ok: true, filePath: result.filePaths[0] };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:inspect-paths', async (_event, payload = {}) => {
  try {
    const paths = Array.isArray(payload?.paths) ? payload.paths.map((item) => String(item || '').trim()).filter(Boolean) : [];
    const items = paths.map((entryPath) => {
      const stat = safeStat(path.resolve(entryPath));
      return {
        path: path.resolve(entryPath),
        exists: Boolean(stat),
        isDirectory: Boolean(stat?.isDirectory()),
        isFile: Boolean(stat?.isFile()),
      };
    });
    return { ok: true, items };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:get-state', async () => {
  try {
    const state = readIdeState();
    console.log(`[state] get root=${state.lastRootPath || '-'} tabs=${Array.isArray(state.resumeTabs) ? state.resumeTabs.length : 0}`);
    return { ok: true, state };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:set-state', async (_event, payload) => {
  try {
    const existing = readIdeState();
    const state = {
      ...existing,
      ...payload,
      lastRootPath: String(payload?.lastRootPath || existing.lastRootPath || ''),
      updatedAt: new Date().toISOString(),
    };
    const result = writeIdeState(state);
    if (!result.ok) return result;
    console.log(`[state] set root=${state.lastRootPath || '-'} tabs=${Array.isArray(state.resumeTabs) ? state.resumeTabs.length : 0} active=${state.resumeActivePath || '-'}`);
    return { ok: true, state };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:import-paths', async (_event, payload = {}) => {
  try {
    const sourcePaths = Array.isArray(payload?.sourcePaths) ? payload.sourcePaths.map((item) => String(item || '').trim()).filter(Boolean) : [];
    const targetDir = String(payload?.targetDir || '').trim();
    if (!sourcePaths.length) return { ok: false, error: 'missing_sources' };
    const targetStat = targetDir ? safeStat(path.resolve(targetDir)) : null;
    if (!targetStat?.isDirectory()) {
      const firstDirectory = sourcePaths.find((candidate) => safeStat(path.resolve(candidate))?.isDirectory());
      if (firstDirectory) {
        const openRootPath = path.resolve(firstDirectory);
        console.log(`[drop] open-root path=${openRootPath} sources=${sourcePaths.length}`);
        return { ok: true, openRootPath, imported: [], skipped: [] };
      }
      return { ok: false, error: 'invalid_target_directory' };
    }
    const result = await importPathsIntoDirectory(sourcePaths, targetDir);
    console.log(`[drop] import target=${path.resolve(targetDir)} sources=${sourcePaths.length} imported=${result.imported?.length || 0} skipped=${result.skipped?.length || 0}`);
    return result;
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:open-file', async (_event, filePath) => {
  try {
    const resolved = String(filePath || '');
    const stat = safeStat(resolved);
    if (!stat || !stat.isFile()) return { ok: false, error: 'invalid_file' };
    const content = fs.readFileSync(resolved, 'utf8');
    watchFile(resolved);
    return { ok: true, filePath: resolved, content, language: path.extname(resolved).slice(1).toLowerCase() || 'text', isText: isTextLike(resolved) };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:save-file', async (_event, payload) => {
  try {
    const filePath = String(payload?.filePath || '');
    const content = String(payload?.content ?? '');
    if (!filePath) return { ok: false, error: 'missing_path' };
    fs.writeFileSync(filePath, content, 'utf8');
    return { ok: true, filePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-save-file', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '').trim();
    if (!remotePath) return { ok: false, error: 'missing_path' };
    const content = String(payload?.content ?? '');
    const encoded = Buffer.from(content, 'utf8').toString('base64');
    const cmd = `printf %s ${JSON.stringify(encoded)} | base64 -d > ${JSON.stringify(remotePath)}`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok) return result;
    return { ok: true, remotePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-create-file', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '').trim();
    if (!remotePath) return { ok: false, error: 'missing_path' };
    const content = String(payload?.content ?? '');
    const encoded = Buffer.from(content, 'utf8').toString('base64');
    const dirPath = path.posix.dirname(remotePath);
    const fileName = path.posix.basename(remotePath);
    const cmd = `mkdir -p ${JSON.stringify(dirPath)} && printf %s ${JSON.stringify(encoded)} | base64 -d > ${JSON.stringify(path.posix.join(dirPath, fileName))}`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok) return result;
    return { ok: true, remotePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-create-folder', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '').trim();
    if (!remotePath) return { ok: false, error: 'missing_path' };
    const cmd = `mkdir -p ${JSON.stringify(remotePath)}`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok) return result;
    return { ok: true, remotePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:create-file', async (_event, payload) => {
  try {
    const dirPath = String(payload?.dirPath || '');
    const fileName = String(payload?.fileName || '').trim();
    const content = String(payload?.content ?? '');
    if (!dirPath || !safeStat(dirPath)?.isDirectory()) return { ok: false, error: 'invalid_directory' };
    if (!fileName) return { ok: false, error: 'missing_name' };
    const filePath = path.join(dirPath, fileName);
    if (fs.existsSync(filePath)) return { ok: false, error: 'already_exists' };
    fs.writeFileSync(filePath, content, 'utf8');
    return { ok: true, filePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:create-folder', async (_event, payload) => {
  try {
    const dirPath = String(payload?.dirPath || '');
    const folderName = String(payload?.folderName || '').trim();
    if (!dirPath || !safeStat(dirPath)?.isDirectory()) return { ok: false, error: 'invalid_directory' };
    if (!folderName) return { ok: false, error: 'missing_name' };
    const folderPath = path.join(dirPath, folderName);
    if (fs.existsSync(folderPath)) return { ok: false, error: 'already_exists' };
    fs.mkdirSync(folderPath, { recursive: true });
    return { ok: true, folderPath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:rename-path', async (_event, payload) => {
  try {
    const sourcePath = String(payload?.sourcePath || '');
    const newName = String(payload?.newName || '').trim();
    if (!sourcePath || !safeStat(sourcePath)) return { ok: false, error: 'invalid_source' };
    if (!newName) return { ok: false, error: 'missing_name' };
    const targetPath = path.join(path.dirname(sourcePath), newName);
    if (fs.existsSync(targetPath)) return { ok: false, error: 'already_exists' };
    fs.renameSync(sourcePath, targetPath);
    if (watchedFiles.has(sourcePath)) {
      const watcher = watchedFiles.get(sourcePath);
      try { watcher.close(); } catch {}
      watchedFiles.delete(sourcePath);
      watchFile(targetPath);
    }
    return { ok: true, path: targetPath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:delete-path', async (_event, payload) => {
  try {
    const targetPath = String(payload?.targetPath || '');
    if (!targetPath || !safeStat(targetPath)) return { ok: false, error: 'invalid_target' };
    const stat = safeStat(targetPath);
    if (stat.isDirectory()) {
      fs.rmSync(targetPath, { recursive: true, force: false });
    } else {
      fs.unlinkSync(targetPath);
    }
    unwatchFile(targetPath);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:copy-text', async (_event, payload) => {
  try {
    const text = String(payload?.text ?? '');
    clipboard.writeText(text);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:read-clipboard', async () => {
  try {
    return { ok: true, text: clipboard.readText() };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:list-files', async (_event, rootPath) => {
  try {
    const resolved = String(rootPath || '');
    if (!resolved || !safeStat(resolved)?.isDirectory()) return { ok: false, error: 'invalid_root' };
    const files = walkFiles(resolved);
    return { ok: true, files, truncated: files.length >= 5000 };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:list-dir', async (_event, rootPath) => {
  try {
    const resolved = String(rootPath || '');
    if (!resolved || !safeStat(resolved)?.isDirectory()) return { ok: false, error: 'invalid_root' };
    const items = listDirectory(resolved);
    return { ok: true, items, truncated: items.length >= 400 };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:search', async (_event, payload) => {
  try {
    const rootPath = String(payload?.rootPath || '');
    const query = String(payload?.query || '').trim().toLowerCase();
    const limit = Math.max(1, Math.min(500, Number(payload?.limit || 100)));
    if (!rootPath || !query) return { ok: true, results: [] };
    const files = walkFiles(rootPath);
    const results = [];
    for (const file of files) {
      if (!file.isText) continue;
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        const lower = content.toLowerCase();
        const index = lower.indexOf(query);
        if (index >= 0) {
          const line = content.slice(0, index).split('\n').length;
          const preview = content.split('\n')[Math.max(0, line - 1)] || '';
          results.push({ path: file.path, name: file.name, line, preview: preview.trim() });
          if (results.length >= limit) break;
        }
      } catch {}
    }
    return { ok: true, results };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:run-command', async (_event, payload) => {
  try {
    const cwd = String(payload?.cwd || '');
    const command = String(payload?.command || '').trim();
    if (!cwd || !safeStat(cwd)?.isDirectory()) return { ok: false, error: 'invalid_cwd' };
    if (!command) return { ok: false, error: 'missing_command' };
    const [bin, ...args] = command.split(/\s+/);
    const deny = new Set(['sudo', 'su', 'passwd', 'chmod', 'chown', 'rm -rf /']);
    if (deny.has(bin)) return { ok: false, error: 'command_not_allowed' };
    return await new Promise((resolve) => {
      execFile(bin, args, { cwd, shell: false, timeout: 10000, maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error && !stdout && !stderr) return resolve({ ok: false, error: error.message });
        resolve({ ok: true, stdout: stdout || '', stderr: stderr || '', code: error?.code ?? 0 });
      });
    });
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:open-devtools', async (_event, payload = {}) => {
  try {
    if (!win) return { ok: false, error: 'no_window' };
    win.webContents.openDevTools({ mode: 'detach' });
    if (Number.isFinite(payload?.x) && Number.isFinite(payload?.y)) {
      win.webContents.inspectElement(Math.max(0, Math.floor(payload.x)), Math.max(0, Math.floor(payload.y)));
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:open-in-explorer', async (_event, targetPath) => {
  try {
    const resolved = String(targetPath || '');
    if (!resolved) return { ok: false, error: 'missing_path' };
    const stat = safeStat(resolved);
    if (!stat) return { ok: false, error: 'invalid_path' };
    shell.showItemInFolder(resolved);
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:download-path', async (_event, payload = {}) => {
  try {
    const sourcePath = String(payload?.sourcePath || '').trim();
    if (!sourcePath) return { ok: false, error: 'missing_path' };
    const stat = safeStat(path.resolve(sourcePath));
    if (!stat) return { ok: false, error: 'missing_source' };
    const sourceName = path.basename(sourcePath);
    const permission = await dialog.showMessageBox(win, {
      type: 'question',
      buttons: ['Permitir', 'Cancelar'],
      defaultId: 0,
      cancelId: 1,
      title: 'Descargar elemento',
      message: `POS RTK quiere descargar "${sourceName}".`,
      detail: 'Se pedirá una carpeta destino para guardar una copia local del archivo o carpeta.',
    });
    if (permission.response !== 0) return { ok: false, canceled: true, permissionDenied: true };

    if (stat.isFile()) {
      const result = await dialog.showSaveDialog(win, {
        title: `Guardar ${sourceName}`,
        defaultPath: sourceName,
      });
      if (result.canceled || !result.filePath) return { ok: false, canceled: true };
      await fs.promises.copyFile(sourcePath, result.filePath);
      return { ok: true, sourcePath, destinationPath: result.filePath, type: 'file' };
    }

    if (stat.isDirectory()) {
      const preferZip = Boolean(payload?.preferZip);
      if (preferZip && archiver) {
        const result = await dialog.showSaveDialog(win, {
          title: `Guardar ZIP de ${sourceName}`,
          defaultPath: `${sourceName}.zip`,
          filters: [{ name: 'ZIP', extensions: ['zip'] }],
        });
        if (result.canceled || !result.filePath) return { ok: false, canceled: true };
        await zipDirectoryRecursive(sourcePath, result.filePath);
        return { ok: true, sourcePath, destinationPath: result.filePath, type: 'zip' };
      }
      const buttons = archiver ? ['Descargar carpeta', 'Descargar ZIP', 'Cancelar'] : ['Descargar carpeta', 'Cancelar'];
      const permission = await dialog.showMessageBox(win, {
        type: 'question',
        buttons,
        defaultId: 0,
        cancelId: buttons.length - 1,
        title: 'Descargar carpeta',
        message: `POS RTK quiere descargar "${sourceName}".`,
        detail: archiver
          ? 'Puedes guardarla como carpeta o como ZIP.'
          : 'ZIP es opcional y no está disponible; se usará carpeta.',
      });
      if (permission.response === buttons.length - 1) return { ok: false, canceled: true, permissionDenied: true };
      if (permission.response === 1 && archiver) {
        const result = await dialog.showSaveDialog(win, {
          title: `Guardar ZIP de ${sourceName}`,
          defaultPath: `${sourceName}.zip`,
          filters: [{ name: 'ZIP', extensions: ['zip'] }],
        });
        if (result.canceled || !result.filePath) return { ok: false, canceled: true };
        await zipDirectoryRecursive(sourcePath, result.filePath);
        return { ok: true, sourcePath, destinationPath: result.filePath, type: 'zip' };
      }
      const result = await dialog.showOpenDialog(win, {
        title: `Elegir destino para ${sourceName}`,
        properties: ['openDirectory', 'createDirectory'],
      });
      if (result.canceled || !result.filePaths?.[0]) return { ok: false, canceled: true };
      const destinationPath = uniqueDestinationPath(result.filePaths[0], sourceName);
      if (typeof fs.promises.cp === 'function') {
        await fs.promises.cp(sourcePath, destinationPath, { recursive: true, force: false, errorOnExist: false });
      } else {
        await copyDirectoryRecursive(sourcePath, destinationPath);
      }
      return { ok: true, sourcePath, destinationPath, type: 'directory' };
    }

    return { ok: false, error: 'unsupported_source_type' };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:open-web-explorer', async (_event, targetPath) => {
  try {
    const resolved = String(targetPath || '');
    if (!resolved) return { ok: false, error: 'missing_path' };
    const stat = safeStat(resolved);
    if (!stat) return { ok: false, error: 'invalid_path' };
    const url = stat.isFile() ? `file://${resolved.replace(/\\/g, '/')}` : `file://${path.join(resolved, 'index.html').replace(/\\/g, '/')}`;
    await shell.openExternal(url);
    return { ok: true, url };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:open-external', async (_event, url) => {
  try {
    const resolved = String(url || '').trim();
    if (!resolved) return { ok: false, error: 'missing_url' };
    await shell.openExternal(resolved);
    return { ok: true, url: resolved };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:login-remote', async (_event, payload = {}) => {
  try {
    const endpoint = String(payload.endpoint || '').trim();
    const email = String(payload.email || '').trim();
    const password = String(payload.password || '').trim();
    if (!endpoint) return { ok: false, error: 'missing_endpoint' };
    if (!email || !password) return { ok: false, error: 'missing_credentials' };
    const body = new URLSearchParams({ email, password });
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'Accept': 'application/json, text/plain;q=0.9, */*;q=0.8' },
      body,
    });
    const text = await response.text();
    let data = null;
    try {
      data = JSON.parse(text);
    } catch {
      data = { ok: response.ok, message: text.trim() };
    }
    return {
      ok: response.ok && data?.ok !== false,
      status: response.status,
      data,
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:check-updates', async (_event, payload = {}) => {
  try {
    const endpoint = String(payload.endpoint || '').trim();
    const currentVersion = String(payload.currentVersion || '').trim();
    if (!endpoint) return { ok: false, error: 'missing_endpoint' };
    const url = `${endpoint}${endpoint.includes('?') ? '&' : '?'}currentVersion=${encodeURIComponent(currentVersion || '')}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json, text/plain;q=0.9, */*;q=0.8' },
    });
    const text = await response.text();
    let data = null;
    try {
      data = JSON.parse(text);
    } catch {
      data = { ok: response.ok, message: text.trim() };
    }
    return {
      ok: response.ok && data?.ok !== false,
      status: response.status,
      data,
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:read-text-file', async (_event, filePath) => {
  try {
    const resolved = String(filePath || '');
    const stat = safeStat(resolved);
    if (!stat || !stat.isFile()) return { ok: false, error: 'invalid_file' };
    const content = fs.readFileSync(resolved, 'utf8');
    return { ok: true, filePath: resolved, content };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-connect', async (_event, payload = {}) => {
  try {
    const host = String(payload?.host || '').trim();
    const hostName = String(payload?.hostName || '').trim();
    if (!host && !hostName) return { ok: false, error: 'missing_host' };
    return await runSshCommand(payload, 'echo connected');
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-list-dir', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '.').trim() || '.';
    const cmd = `LC_ALL=C find ${JSON.stringify(remotePath)} -maxdepth 1 -mindepth 1 -printf '%y|%f\\n'`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok && !result.stdout) return result;
    const items = String(result.stdout || '')
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const [kind, name] = line.split('|');
        return {
          name,
          path: path.posix.join(remotePath, name),
          type: kind === 'd' ? 'directory' : 'file',
        };
      })
      .sort((a, b) => Number(b.type === 'directory') - Number(a.type === 'directory') || a.name.localeCompare(b.name));
    return { ok: true, items };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-read-file', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '').trim();
    if (!remotePath) return { ok: false, error: 'missing_path' };
    const cmd = `cat ${JSON.stringify(remotePath)}`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok && !result.stdout) return result;
    return { ok: true, content: String(result.stdout || ''), filePath: remotePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-download-path', async (_event, payload = {}) => {
  try {
    const remotePath = String(payload?.remotePath || '').trim();
    if (!remotePath) return { ok: false, error: 'missing_path' };
    const sourceName = path.posix.basename(remotePath) || 'archivo';
    const permission = await dialog.showMessageBox(win, {
      type: 'question',
      buttons: ['Permitir', 'Cancelar'],
      defaultId: 0,
      cancelId: 1,
      title: 'Descargar archivo remoto',
      message: `POS RTK quiere descargar "${sourceName}" desde el servidor.`,
      detail: 'Se descargará el contenido remoto y se guardará en una ruta local.',
    });
    if (permission.response !== 0) return { ok: false, canceled: true, permissionDenied: true };
    const fileResult = await runSshCommand(payload, `cat ${JSON.stringify(remotePath)}`);
    if (!fileResult.ok && !fileResult.stdout) return fileResult;
    const result = await dialog.showSaveDialog(win, {
      title: `Guardar ${sourceName}`,
      defaultPath: sourceName,
    });
    if (result.canceled || !result.filePath) return { ok: false, canceled: true };
    await fs.promises.writeFile(result.filePath, String(fileResult.stdout || ''), 'utf8');
    return { ok: true, sourcePath: remotePath, destinationPath: result.filePath, type: 'file', remotePath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-rename-path', async (_event, payload = {}) => {
  try {
    const sourcePath = String(payload?.sourcePath || '').trim();
    const newName = String(payload?.newName || '').trim();
    if (!sourcePath) return { ok: false, error: 'invalid_source' };
    if (!newName) return { ok: false, error: 'missing_name' };
    const parentDir = path.posix.dirname(sourcePath);
    const targetPath = path.posix.join(parentDir, newName);
    const cmd = `mv ${JSON.stringify(sourcePath)} ${JSON.stringify(targetPath)}`;
    const result = await runSshCommand(payload, cmd);
    if (!result.ok) return result;
    return { ok: true, path: targetPath };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-upload-paths', async (_event, payload = {}) => {
  try {
    const remoteDir = String(payload?.remoteDir || '').trim();
    const sourcePaths = Array.isArray(payload?.sourcePaths) ? payload.sourcePaths.map((item) => String(item || '').trim()).filter(Boolean) : [];
    if (!remoteDir) return { ok: false, error: 'missing_remote_dir' };
    if (!sourcePaths.length) return { ok: false, error: 'missing_sources' };
    const uploaded = [];
    const skipped = [];
    for (const rawSource of sourcePaths) {
      const sourcePath = path.resolve(rawSource);
      const stat = safeStat(sourcePath);
      if (!stat) {
        skipped.push({ path: sourcePath, reason: 'missing_source' });
        continue;
      }
      const remoteDestination = path.posix.join(remoteDir, path.basename(sourcePath));
      const result = await uploadLocalPathToRemote(payload, sourcePath, remoteDestination);
      if (!result.ok) {
        skipped.push({ path: sourcePath, reason: result.error || 'upload_failed' });
        continue;
      }
      uploaded.push({ sourcePath, remotePath: result.remotePath, type: result.type });
    }
    return { ok: true, remoteDir, uploaded, skipped };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:ssh-exec', async (_event, payload = {}) => {
  try {
    const command = String(payload?.command || '').trim();
    if (!command) return { ok: false, error: 'missing_command' };
    return await runSshCommand(payload, command);
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:get-platform', async () => {
  return { ok: true, platform: process.platform, arch: process.arch, homeDir: app.getPath('home'), tempDir: app.getPath('temp') };
});

ipcMain.handle('ide:get-file-meta', async (_event, filePath) => {
  try {
    const target = String(filePath || '').trim();
    if (!target) return { ok: false, error: 'missing_path' };
    const stat = safeStat(target);
    if (!stat) return { ok: false, error: 'not_found' };
    return {
      ok: true,
      size: stat.size,
      modifiedAt: stat.mtime?.toISOString?.() || null,
      createdAt: stat.birthtime?.toISOString?.() || null,
      isDirectory: stat.isDirectory(),
      isFile: stat.isFile(),
      permissions: stat.mode?.toString(8)?.slice(-3) || null,
    };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.handle('ide:zip-paths', async (_event, payload = {}) => {
  try {
    if (!archiver) return { ok: false, error: 'archiver_not_available' };
    const sourcePaths = Array.isArray(payload?.sourcePaths) ? payload.sourcePaths.filter(Boolean) : [];
    const outputPath = String(payload?.outputPath || '').trim();
    if (!sourcePaths.length) return { ok: false, error: 'missing_sources' };
    if (!outputPath) return { ok: false, error: 'missing_output' };
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 6 } });
    archive.pipe(output);
    for (const src of sourcePaths) {
      const s = safeStat(src);
      if (!s) continue;
      if (s.isDirectory()) archive.directory(src, path.basename(src));
      else archive.file(src, { name: path.basename(src) });
    }
    await archive.finalize();
    return new Promise((resolve) => {
      output.on('close', () => resolve({ ok: true, outputPath, size: archive.pointer() }));
      output.on('error', (err) => resolve({ ok: false, error: err.message }));
    });
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('before-quit', () => {
  for (const watcher of watchedFiles.values()) {
    try { watcher.close(); } catch {}
  }
  watchedFiles.clear();
});
