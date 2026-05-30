const { contextBridge, ipcRenderer } = require('electron');
let zipAvailable = false;
try {
  require('archiver');
  zipAvailable = true;
} catch {
  zipAvailable = false;
}

contextBridge.exposeInMainWorld('ideRtk', {
  getState: () => ipcRenderer.invoke('ide:get-state'),
  setState: (payload) => ipcRenderer.invoke('ide:set-state', payload),
  pickFolder: () => ipcRenderer.invoke('ide:pick-folder'),
  pickFile: (payload) => ipcRenderer.invoke('ide:pick-file', payload),
  inspectPaths: (payload) => ipcRenderer.invoke('ide:inspect-paths', payload),
  openFile: (filePath) => ipcRenderer.invoke('ide:open-file', filePath),
  saveFile: (payload) => ipcRenderer.invoke('ide:save-file', payload),
  sshSaveFile: (payload) => ipcRenderer.invoke('ide:ssh-save-file', payload),
  sshCreateFile: (payload) => ipcRenderer.invoke('ide:ssh-create-file', payload),
  sshCreateFolder: (payload) => ipcRenderer.invoke('ide:ssh-create-folder', payload),
  sshUploadPaths: (payload) => ipcRenderer.invoke('ide:ssh-upload-paths', payload),
  copyText: (payload) => ipcRenderer.invoke('ide:copy-text', payload),
  readClipboard: () => ipcRenderer.invoke('ide:read-clipboard'),
  loginRemote: (payload) => ipcRenderer.invoke('ide:login-remote', payload),
  checkUpdates: (payload) => ipcRenderer.invoke('ide:check-updates', payload),
  createFile: (payload) => ipcRenderer.invoke('ide:create-file', payload),
  createFolder: (payload) => ipcRenderer.invoke('ide:create-folder', payload),
  importPaths: (payload) => ipcRenderer.invoke('ide:import-paths', payload),
  renamePath: (payload) => ipcRenderer.invoke('ide:rename-path', payload),
  sshRenamePath: (payload) => ipcRenderer.invoke('ide:ssh-rename-path', payload),
  deletePath: (payload) => ipcRenderer.invoke('ide:delete-path', payload),
  listDir: (rootPath) => ipcRenderer.invoke('ide:list-dir', rootPath),
  listFiles: (rootPath) => ipcRenderer.invoke('ide:list-files', rootPath),
  search: (payload) => ipcRenderer.invoke('ide:search', payload),
  runCommand: (payload) => ipcRenderer.invoke('ide:run-command', payload),
  openDevTools: (payload) => ipcRenderer.invoke('ide:open-devtools', payload),
  openInExplorer: (targetPath) => ipcRenderer.invoke('ide:open-in-explorer', targetPath),
  downloadPath: (payload) => ipcRenderer.invoke('ide:download-path', payload),
  openWebExplorer: (targetPath) => ipcRenderer.invoke('ide:open-web-explorer', targetPath),
  openExternal: (url) => ipcRenderer.invoke('ide:open-external', url),
  readTextFile: (filePath) => ipcRenderer.invoke('ide:read-text-file', filePath),
  zipAvailable,
  sshConnect: (payload) => ipcRenderer.invoke('ide:ssh-connect', payload),
  sshListDir: (payload) => ipcRenderer.invoke('ide:ssh-list-dir', payload),
  sshReadFile: (payload) => ipcRenderer.invoke('ide:ssh-read-file', payload),
  sshDownloadPath: (payload) => ipcRenderer.invoke('ide:ssh-download-path', payload),
  sshExec: (payload) => ipcRenderer.invoke('ide:ssh-exec', payload),
  getPlatform: () => ipcRenderer.invoke('ide:get-platform'),
  getFileMeta: (filePath) => ipcRenderer.invoke('ide:get-file-meta', filePath),
  zipPaths: (payload) => ipcRenderer.invoke('ide:zip-paths', payload),
  onFileChanged: (handler) => {
    const listener = (_event, payload) => handler?.(payload);
    ipcRenderer.on('ide:file-changed', listener);
    return () => ipcRenderer.removeListener('ide:file-changed', listener);
  },
});
