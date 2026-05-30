const treeView = document.getElementById('treeView');
const leftPanel = document.querySelector('.panel.left');
const editor = document.getElementById('editor');
const editorTitle = document.getElementById('editorTitle');
const editorMeta = document.getElementById('editorMeta');
const languageBadge = document.getElementById('languageBadge');
const tabBar = document.getElementById('tabBar');
const codeSearchBar = document.getElementById('codeSearchBar');
const helpDock = document.getElementById('helpDock');
const editorBreadcrumb = document.getElementById('editorBreadcrumb');
const lineNumbers = document.getElementById('lineNumbers');
const activeLineOverlay = document.getElementById('activeLineOverlay');
const plainEditor = document.getElementById('plainEditor');
const highlightLayer = document.getElementById('highlightLayer');
const minimapCanvas = document.getElementById('minimapCanvas');
const splitWrap = document.getElementById('splitWrap');
const splitEditor = document.getElementById('splitEditor');
const splitLineNumbers = document.getElementById('splitLineNumbers');
const splitActiveLineOverlay = document.getElementById('splitActiveLineOverlay');
const splitHighlightLayer = document.getElementById('splitHighlightLayer');
const editorWrap = document.getElementById('editorWrap');
const previewResizeHandle = document.getElementById('previewResizeHandle');
const previewFrame = document.getElementById('previewFrame');
const previewStatus = document.getElementById('previewStatus');
const previewUrlLabel = document.getElementById('previewUrlLabel');
const previewError = document.getElementById('previewError');
const openFolderBtn = document.getElementById('openFolderBtn');
const openImporterBtn = document.getElementById('openImporterBtn');
const connectSshBtn = document.getElementById('connectSshBtn');
const consoleBtn = document.getElementById('consoleBtn');
const newFileBtn = document.getElementById('newFileBtn');
const saveFileBtn = document.getElementById('saveFileBtn');
const toggleCenterBtn = document.getElementById('toggleCenterBtn');
const togglePreviewTopBtn = document.getElementById('togglePreviewTopBtn');
const hidePreviewBtn = document.getElementById('hidePreviewBtn');
const wrapCodeBtn = document.getElementById('wrapCodeBtn');
const fontSizeBtn = document.getElementById('fontSizeBtn');
const fontSizeDownBtn = document.getElementById('fontSizeDownBtn');
const fontSizeUpBtn = document.getElementById('fontSizeUpBtn');
const copyContentBtn = document.getElementById('copyContentBtn');
const pasteCodeBtn = document.getElementById('pasteCodeBtn');
const selectAllCodeBtn = document.getElementById('selectAllCodeBtn');
const formatCodeBtn = document.getElementById('formatCodeBtn');
const closeCurrentTabBtn = document.getElementById('closeCurrentTabBtn');
const togglePreviewCenterBtn = document.getElementById('togglePreviewCenterBtn');
const codeSearchInput = document.getElementById('codeSearchInput');
const codeSearchCount = document.getElementById('codeSearchCount');
let codeSearchRegex = false;
let codeSearchReplaceVisible = false;
const codeSearchPrevBtn = document.getElementById('codeSearchPrevBtn');
const codeSearchNextBtn = document.getElementById('codeSearchNextBtn');
const closeCodeSearchBtn = document.getElementById('closeCodeSearchBtn');
const toggleCodeSearchBtn = document.getElementById('toggleCodeSearchBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchStatus = document.getElementById('searchStatus');
const treeLocalTab = document.getElementById('treeLocalTab');
const treeServerTab = document.getElementById('treeServerTab');
const refreshTreeBtn = document.getElementById('refreshTreeBtn');
const treeStatus = document.getElementById('treeStatus');
const treeConsole = document.getElementById('treeConsole');
const copyConsoleBtn = document.getElementById('copyConsoleBtn');
const sshModal = document.getElementById('sshModal');
const closeSshModalBtn = document.getElementById('closeSshModalBtn');
const sshProfileTabs = document.getElementById('sshProfileTabs');
const newSshProfileBtn = document.getElementById('newSshProfileBtn');
const sshConfigPathInput = document.getElementById('sshConfigPathInput');
const browseSshConfigBtn = document.getElementById('browseSshConfigBtn');
const sshIdentityFileInput = document.getElementById('sshIdentityFileInput');
const sshIdentityLabel = document.getElementById('sshIdentityLabel');
const browseSshIdentityBtn = document.getElementById('browseSshIdentityBtn');
const sshHostSelect = document.getElementById('sshHostSelect');
const sshRemoteRootInput = document.getElementById('sshRemoteRootInput');
const sshPlatformSelect = document.getElementById('sshPlatformSelect');
const sshHint = document.getElementById('sshHint');
const sshPreview = document.getElementById('sshPreview');
const loadSshConfigBtn = document.getElementById('loadSshConfigBtn');
const saveSshConfigBtn = document.getElementById('saveSshConfigBtn');
const copySshBtn = document.getElementById('copySshBtn');
const reloadPreviewBtn = document.getElementById('reloadPreviewBtn');
const copyPathBtn = document.getElementById('copyPathBtn');
const openInExplorerBtn = document.getElementById('openInExplorerBtn');
const fitPreviewBtn = document.getElementById('fitPreviewBtn');
const expandPreviewBtn = document.getElementById('expandPreviewBtn');
const togglePreviewBtn = document.getElementById('togglePreviewBtn');
const expandCodeBtn = document.getElementById('expandCodeBtn');
const collapseCodeBtn = document.getElementById('collapseCodeBtn');
const webViewTabBtn = document.getElementById('webViewTabBtn');
const radarPanel = document.getElementById('radarPanel');
const radarClock = document.getElementById('radarClock');
const radarCity = document.getElementById('radarCity');
const radarStatus = document.getElementById('radarStatus');
const radarWeatherTemp = document.getElementById('radarWeatherTemp');
const radarWeatherDesc = document.getElementById('radarWeatherDesc');
const radarFxValue = document.getElementById('radarFxValue');
const radarBtcValue = document.getElementById('radarBtcValue');
const radarUsdcValue = document.getElementById('radarUsdcValue');
const settingsBtn = document.getElementById('settingsBtn');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const loginEmailInput = document.getElementById('loginEmailInput');
const loginPasswordInput = document.getElementById('loginPasswordInput');
const loginSubmitBtn = document.getElementById('loginSubmitBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginStatusTitle = document.getElementById('loginStatusTitle');
const loginStatusText = document.getElementById('loginStatusText');
const openWebLoginBtn = document.getElementById('openWebLoginBtn');
const updatesBtn = document.getElementById('updatesBtn');
const updatesModal = document.getElementById('updatesModal');
const closeUpdatesBtn = document.getElementById('closeUpdatesBtn');
const closeUpdatesFooterBtn = document.getElementById('closeUpdatesFooterBtn');
const updatesFeedInput = document.getElementById('updatesFeedInput');
const currentVersionInput = document.getElementById('currentVersionInput');
const updatesStatus = document.getElementById('updatesStatus');
const updatesDetail = document.getElementById('updatesDetail');
const checkUpdatesBtn = document.getElementById('checkUpdatesBtn');
const openUpdateUrlBtn = document.getElementById('openUpdateUrlBtn');
const applyUpdateBtn = document.getElementById('applyUpdateBtn');
const settingsModal = document.getElementById('settingsModal');
const pluginsBtn = document.getElementById('pluginsBtn');
const pluginsModal = document.getElementById('pluginsModal');
const closePluginsBtn = document.getElementById('closePluginsBtn');
const closePluginsFooterBtn = document.getElementById('closePluginsFooterBtn');
const refreshPluginsBtn = document.getElementById('refreshPluginsBtn');
const pluginsList = document.getElementById('pluginsList');
const pluginsLocalTab = document.getElementById('pluginsLocalTab');
const pluginsExternalTab = document.getElementById('pluginsExternalTab');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const themeSelect = document.getElementById('themeSelect');
const codeViewerSelect = document.getElementById('codeViewerSelect');
const prismThemeSelect = document.getElementById('prismThemeSelect');
const codeMirrorThemeSelect = document.getElementById('codeMirrorThemeSelect');
const lineNumbersSelect = document.getElementById('lineNumbersSelect');
const activeLineSelect = document.getElementById('activeLineSelect');
const activeLineColorSelect = document.getElementById('activeLineColorSelect');
const helpSelect = document.getElementById('helpSelect');
const densitySelect = document.getElementById('densitySelect');
const hintSelect = document.getElementById('hintSelect');
const contrastSelect = document.getElementById('contrastSelect');
const iconSizeSelect = document.getElementById('iconSizeSelect');
const uiTextSizeSelect = document.getElementById('uiTextSizeSelect');
const globalPaddingSelect = document.getElementById('globalPaddingSelect');
const iconFamilySelect = document.getElementById('iconFamilySelect');
const autosaveSelect = document.getElementById('autosaveSelect');
const minimapShell = document.getElementById('minimapShell');
const topHint = document.getElementById('topHint');
const toggleEditorHelpBtn = document.getElementById('toggleEditorHelpBtn');
const openWebExplorerBtn = document.getElementById('openWebExplorerBtn');
const rtkPlayBtn = document.getElementById('rtkPlayBtn');
const rtkPlayModal = document.getElementById('rtkPlayModal');
const closeRtkPlayBtn = document.getElementById('closeRtkPlayBtn');
const rtkPlayPlayBtn = document.getElementById('rtkPlayPlayBtn');
const rtkPlayNextBtn = document.getElementById('rtkPlayNextBtn');
const rtkPlayPrevBtn = document.getElementById('rtkPlayPrevBtn');
const rtkPlayBgBtn = document.getElementById('rtkPlayBgBtn');
const rtkPlayFrame = document.getElementById('rtkPlayFrame');
const rtkPlayTitle = document.getElementById('rtkPlayTitle');
const rtkPlayArtist = document.getElementById('rtkPlayArtist');
const rtkPlayCover = document.getElementById('rtkPlayCover');
const rtkPlayTracks = document.getElementById('rtkPlayTracks');
const rtkPlayStatus = document.getElementById('rtkPlayStatus');
const rtkPlaySeek = document.getElementById('rtkPlaySeek');
const rtkPlayRefreshBtn = document.getElementById('rtkPlayRefreshBtn');
const copyAnyTextBtn = document.getElementById('copyAnyTextBtn');
const editStatus = document.getElementById('editStatus');
const expandAllBtn = document.getElementById('expandAllBtn');
const collapseAllBtn = document.getElementById('collapseAllBtn');
const toggleRecentBtn = document.getElementById('toggleRecentBtn');
const toggleFavBtn = document.getElementById('toggleFavBtn');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const recentPanel = document.getElementById('recentPanel');
const favoritesPanel = document.getElementById('favoritesPanel');
const toggleTerminalBtn = document.getElementById('toggleTerminalBtn');
const terminalPanel = document.getElementById('terminalPanel');
const terminalForm = document.getElementById('terminalForm');
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const splitBtn = document.getElementById('splitBtn');
const sendToSplitBtn = document.getElementById('sendToSplitBtn');
const focusBlockBtn = document.getElementById('focusBlockBtn');
const toggleMinimapBtn = document.getElementById('toggleMinimapBtn');
const duplicateTabBtn = document.getElementById('duplicateTabBtn');
const closeOtherTabsBtn = document.getElementById('closeOtherTabsBtn');
const rightPanel = document.querySelector('.panel.right');
const rightPanelTitle = document.getElementById('rightPanelTitle');
const backToPreviewBtn = document.getElementById('backToPreviewBtn');
const fileChangeBanner = document.getElementById('fileChangeBanner');
const reloadExternalBtn = document.getElementById('reloadExternalBtn');
const dismissExternalBtn = document.getElementById('dismissExternalBtn');
const sshStatusLight = document.getElementById('sshStatusLight');
const appContextMenu = document.getElementById('appContextMenu');
const contextMenu = document.getElementById('contextMenu');
let saveSuccessTimer = null;
const nameModal = document.getElementById('nameModal');
const nameModalTitle = document.getElementById('nameModalTitle');
const nameModalLabel = document.getElementById('nameModalLabel');
const nameModalInput = document.getElementById('nameModalInput');
const nameModalConfirmBtn = document.getElementById('nameModalConfirmBtn');
const nameModalCancelBtn = document.getElementById('nameModalCancelBtn');
const closeNameModalBtn = document.getElementById('closeNameModalBtn');
const consoleDrawer = document.getElementById('consoleDrawer');
const consoleOutput = document.getElementById('consoleOutput');
const closeConsoleBtn = document.getElementById('closeConsoleBtn');
const consoleCopyBtn = document.getElementById('copyConsoleBtn');
const editorContextMenu = document.getElementById('editorContextMenu');
const toastHost = document.getElementById('toastHost');
const importerModal = document.getElementById('importerModal');
const closeImporterBtn = document.getElementById('closeImporterBtn');
const pickImporterFileBtn = document.getElementById('pickImporterFileBtn');
const copyImporterJsonBtn = document.getElementById('copyImporterJsonBtn');
const importerRunBtn = document.getElementById('importerRunBtn');
const importerFileName = document.getElementById('importerFileName');
const importerFileMeta = document.getElementById('importerFileMeta');
const importerChecklist = document.getElementById('importerChecklist');
const importerPreview = document.getElementById('importerPreview');
const importerConsole = document.getElementById('importerConsole');
const copyImporterConsoleBtn = document.getElementById('copyImporterConsoleBtn');

let currentRoot = null;
let currentFile = null;
let currentIsText = true;
let currentLanguage = 'text';
let treeState = null;
let remoteTreeState = null;
let treeMode = 'local';
const collapsed = new Set();
const loadedDirs = new Set();
const treeChildren = new Map();
const remoteCollapsed = new Set();
const remoteLoadedDirs = new Set();
const remoteTreeChildren = new Map();
const openFiles = [];
let activeFileIndex = -1;
const dirtyFiles = new Set();
let autosaveTimer = null;
let autosaveEnabled = true;
let lastOpenedAt = null;
let recentFiles = [];
let favoriteFiles = [];
let splitEnabled = false;
let splitFile = null;
let previewVisible = true;
let helpVisible = true;
let theme = 'sublime';
let codeViewer = 'prism';
let prismTheme = 'sublime';
const LIGHT_PRISM_THEMES = new Set(['githublight', 'lightplus', 'alabaster', 'nordlight', 'solarizedlight']);
let codeMirrorTheme = 'material';
let lineNumbersVisible = true;
let activeLineVisible = true;
let activeLineColor = 'cyan';
let density = 'comfortable';
let hintsVisible = true;
let sidebarCompact = false;
let editorFontSize = 'medium';
let codeWrapEnabled = true;
let highContrast = false;
let iconSize = 'medium';
let uiTextSize = 'medium';
let globalPadding = 'medium';
let iconFamily = 'solid';
let columnsCount = 3;
let loginState = { loggedIn: false, email: '' };
let pluginsTab = 'local';
let updatesState = {
  feedUrl: 'https://routicket.com/api/ide-rtk/update_feed.php',
  currentVersion: '0.2',
  latestVersion: '',
  downloadUrl: '',
  title: '',
  message: '',
  changelog: [],
  available: false,
  lastCheckedAt: '',
};
let pluginStates = {
  editorPack: true,
  importerPack: true,
  sshPack: true,
  themePack: true,
  rtkPlay: false,
};
const PLUGIN_LIST_ENDPOINT = 'https://routicket.com/api/plugin_list.php';

const PLUGIN_CATALOG = [
  {
    id: 'editorPack',
    name: 'Editor Pack',
    version: '1.0',
    desc: 'Minimapa, ayuda ligera y búsqueda rápida para editar más cómodo.',
    impact: 'Muestra u oculta ayudas y utilidades de edición.',
    icon: 'fa-code',
  },
  {
    id: 'importerPack',
    name: 'Importer Pack',
    version: '1.0',
    desc: 'Importador de archivos Excel, CSV y TSV con detección de schema.',
    impact: 'Agrega botón de importación en la barra superior.',
    icon: 'fa-file-excel',
  },
  {
    id: 'sshPack',
    name: 'SSH Ops',
    version: '1.0',
    desc: 'Administra conexión SSH y el panel de servidores del IDE.',
    impact: 'Muestra u oculta el acceso SSH principal.',
    icon: 'fa-network-wired',
  },
  {
    id: 'themePack',
    name: 'Theme Pack',
    version: '1.0',
    desc: 'Desbloquea la librería de temas y paletas del editor.',
    impact: 'Mantiene disponibles los temas claros y oscuros.',
    icon: 'fa-palette',
  },
  {
    id: 'rtkPlay',
    name: 'Routicket Play',
    version: '1.0',
    desc: 'Reproductor de música desde Routicket Music — escucha en segundo plano mientras editas.',
    impact: 'Agrega botón de reproducción musical en la barra superior.',
    icon: 'fa-music',
  },
  {
    id: 'gitPack',
    name: 'Git Lite',
    version: '0.5',
    desc: 'Operaciones Git básicas: status, add, commit, log desde el panel lateral.',
    impact: 'Agrega panel de control Git en la barra lateral.',
    icon: 'fa-code-branch',
  },
  {
    id: 'imageViewer',
    name: 'Image Preview',
    version: '0.5',
    desc: 'Vista previa de imágenes PNG, JPG, SVG, WebP en el panel de preview.',
    impact: 'Renderiza imágenes en lugar del editor de texto al abrir archivos de imagen.',
    icon: 'fa-image',
  },
  {
    id: 'colorPicker',
    name: 'Color Picker',
    version: '0.3',
    desc: 'Detecta colores CSS en el código y muestra un preview con selector rápido.',
    impact: 'Agrega un panel de colores y picker visual en el editor.',
    icon: 'fa-eye-dropper',
  },
];

const outlineCompatibleIcons = new Set([
  'fa-clock',
  'fa-file',
  'fa-star',
  'fa-folder-open',
  'fa-folder',
  'fa-image',
  'fa-copy',
  'fa-xmark',
  'fa-circle-xmark',
  'fa-pen-to-square',
  'fa-trash',
  'fa-plus',
  'fa-check',
  'fa-ban',
  'fa-play',
  'fa-paste',
  'fa-scissors',
  'fa-key',
  'fa-save',
  'fa-floppy-disk',
  'fa-terminal',
  'fa-gear',
  'fa-code',
  'fa-eye',
  'fa-folder-tree',
  'fa-folder-plus',
  'fa-file-circle-plus',
  'fa-file-lines',
  'fa-download',
  'fa-magnifying-glass',
  'fa-magnifying-glass-minus',
  'fa-rotate',
  'fa-compress',
  'fa-expand',
  'fa-table-columns',
  'fa-angles-right',
  'fa-network-wired',
  'fa-chevron-right',
  'fa-chevron-down',
  'fa-i-cursor',
  'fa-wand-magic-sparkles',
  'fa-align-left',
  'fa-align-justify',
  'fa-highlighter',
]);
let centerHidden = false;
let previewMode = 'normal';
let rightViewMode = 'web';
let externalChangePending = null;
let contextTarget = null;
let nameModalAction = null;
let nameModalPayload = null;
let stateLoaded = false;
let searchLoading = false;
let helpCardState = { start: false, parts: false };
let resumeTabs = [];
let resumeActivePath = null;
let sshSelectedHost = '';
const consoleLog = [];
let consoleRenderQueued = false;
let treeRenderTimer = null;
let remoteTreeRenderFlight = null;
let remoteTreeRenderQueued = false;
let previewTimeoutTimer = null;
let previewDebounceTimer = null;
let previewRefreshInterval = null;
let previewAutoEnabled = false;
let previewBlobUrl = null;
let previewLastSignature = '';
let highlightPaintInFlight = false;
const PREVIEW_EDIT_DELAY_MS = 10000;
let hljsReadyNotified = false;
let sshConfigData = { path: '', hosts: [] };
let sshRemoteRoot = '.';
let sshStatus = 'disconnected';
let sshProfiles = [];
let activeSshProfileId = '';
let leftDropDepth = 0;
let scrollSyncFrame = null;
let persistStateFlight = null;
let persistStateQueued = null;
let currentLineIndex = 1;
let bracketMatch = null;
let currentSymbol = null;
let codeSearchMatches = [];
let codeSearchIndex = -1;
let codeDiagnostics = [];
let minimapVisible = true;
let minimapFrame = null;
let codeSearchVisible = false;
let editorHighlightFrame = null;
let editorAuxTimer = null;
let editorSearchTimer = null;
let highlightPaintQueuedReason = '';
const LOCAL_STATE_KEY = 'rtk_ide_state_v1';
const IMPORTER_CACHE_KEY = 'rtk_importer_cache_v1';
let hljs = null;
let xlsx = null;
let monaco = null;
let prism = null;
let codeMirror = null;
let monacoLoaderReady = false;
let monacoColorizeToken = 0;
try {
  if (typeof require === 'function') {
    hljs = require('highlight.js/lib/common');
    xlsx = require('xlsx');
  }
} catch {
  hljs = null;
  xlsx = null;
}

const IMPORT_SCHEMA = [
  { key: 'nombre', label: 'Nombre', required: true, variants: ['nombre', 'name', 'cliente', 'razon social', 'razón social', 'full name', 'contacto'] },
  { key: 'email', label: 'Email', required: false, variants: ['email', 'correo', 'correo electronico', 'correo electrónico', 'mail'] },
  { key: 'telefono', label: 'Teléfono', required: false, variants: ['telefono', 'teléfono', 'phone', 'movil', 'móvil', 'celular', 'whatsapp'] },
  { key: 'precio', label: 'Precio', required: false, variants: ['precio', 'price', 'importe', 'monto', 'valor', 'costo'] },
  { key: 'fecha', label: 'Fecha', required: false, variants: ['fecha', 'date', 'fecha alta', 'creado', 'created at', 'created'] },
  { key: 'estado', label: 'Estado', required: false, variants: ['estado', 'status', 'situacion', 'situación', 'activo', 'active'] },
];

let importerState = {
  filePath: '',
  fileName: '',
  rows: [],
  headers: [],
  normalizedHeaders: [],
  schemaMatch: [],
  missing: [],
  extras: [],
  raw: [],
};
let importerConsoleLines = [];
let importerCache = readImporterCache();

function readLocalState() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STATE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function readPluginState() {
  try {
    return JSON.parse(localStorage.getItem('rtk_ide_plugins_v1') || '{}') || {};
  } catch {
    return {};
  }
}

function readLoginState() {
  try {
    return JSON.parse(localStorage.getItem('rtk_ide_login_v1') || '{}') || {};
  } catch {
    return {};
  }
}

function persistLoginState() {
  try {
    localStorage.setItem('rtk_ide_login_v1', JSON.stringify(loginState));
  } catch {
    // ignore storage errors
  }
}

function normalizeLoginState(saved = {}) {
  return {
    loggedIn: saved.loggedIn === true,
    email: String(saved.email || '').trim(),
  };
}

function persistPluginState() {
  try {
    localStorage.setItem('rtk_ide_plugins_v1', JSON.stringify(pluginStates));
  } catch {
    // ignore storage errors
  }
}

function normalizePluginState(saved = {}) {
  return {
    editorPack: saved.editorPack !== false,
    importerPack: saved.importerPack !== false,
    sshPack: saved.sshPack !== false,
    themePack: saved.themePack !== false,
    rtkPlay: saved.rtkPlay === true,
  };
}

function readUpdatesState() {
  try {
    return JSON.parse(localStorage.getItem('rtk_ide_updates_v1') || '{}') || {};
  } catch {
    return {};
  }
}

function persistUpdatesState() {
  try {
    localStorage.setItem('rtk_ide_updates_v1', JSON.stringify(updatesState));
  } catch {
    // ignore storage errors
  }
}

function normalizeUpdatesState(saved = {}) {
  return {
    feedUrl: String(saved.feedUrl || 'https://routicket.com/api/ide-rtk/update_feed.php').trim(),
    currentVersion: String(saved.currentVersion || '0.2').trim(),
    latestVersion: String(saved.latestVersion || '').trim(),
    downloadUrl: String(saved.downloadUrl || '').trim(),
    title: String(saved.title || '').trim(),
    message: String(saved.message || '').trim(),
    changelog: Array.isArray(saved.changelog) ? saved.changelog.filter(Boolean).map((item) => String(item)) : [],
    available: saved.available === true,
    lastCheckedAt: String(saved.lastCheckedAt || '').trim(),
  };
}

let rtkPlayData = null;

function applyPluginState() {
  const editorPackOn = pluginStates.editorPack !== false;
  const importerPackOn = pluginStates.importerPack !== false;
  const sshPackOn = pluginStates.sshPack !== false;
  const themePackOn = pluginStates.themePack !== false;
  const rtkPlayOn = pluginStates.rtkPlay !== false;
  connectSshBtn?.classList.toggle('hidden', !sshPackOn);
  openImporterBtn?.classList.toggle('hidden', !importerPackOn);
  rtkPlayBtn?.classList.toggle('hidden', !rtkPlayOn);
  sshStatusLight?.classList.toggle('hidden', !sshPackOn);
  themeSelect?.classList.toggle('plugin-locked', !themePackOn);
  prismThemeSelect?.classList.toggle('plugin-locked', !themePackOn);
  codeMirrorThemeSelect?.classList.toggle('plugin-locked', !themePackOn);
  toggleMinimapBtn?.classList.toggle('hidden', !editorPackOn);
  toggleEditorHelpBtn?.classList.toggle('hidden', !editorPackOn);
  toggleCodeSearchBtn?.classList.toggle('hidden', !editorPackOn);
  if (minimapShell) {
    minimapShell.classList.toggle('hidden', !editorPackOn || !minimapVisible);
  }
  if (helpDock) {
    helpDock.classList.toggle('hidden', !editorPackOn || !helpVisible);
  }
  if (codeSearchBar) {
    codeSearchBar.classList.toggle('hidden', !editorPackOn || !codeSearchVisible);
  }
  updateCenterChromeVisibility();
  if (helpVisible) setHelpText();
}

function setLoginModalVisible(open) {
  loginModal?.classList.toggle('hidden', !open);
  if (open) updateLoginUI();
}

function updateLoginUI() {
  const loggedIn = Boolean(loginState.loggedIn);
  if (loginStatusTitle) loginStatusTitle.textContent = loggedIn ? `Sesión activa: ${loginState.email || 'sin correo'}` : 'Sesión local del IDE';
  if (loginStatusText) loginStatusText.textContent = loggedIn
    ? 'El estado administrativo queda guardado localmente y puedes usar el botón de cerrar sesión cuando quieras.'
    : 'Inicia sesión para guardar el estado administrativo de plugins.';
  if (loginEmailInput) loginEmailInput.value = loginState.email || '';
  if (loginPasswordInput && !loggedIn) loginPasswordInput.value = '';
}

async function openExternalLogin() {
  const url = 'https://routicket.com/login/v2/?redirect=' + encodeURIComponent('https://routicket.com/plugins/dev2/ide-rtk/');
  const result = await window.ideRtk.openExternal?.(url);
  if (!result?.ok) {
    pushToast('error', 'Login', result?.error || 'No se pudo abrir el login web.');
    return;
  }
  pushToast('info', 'Login', 'Se abrió el login web de Routicket.');
}

async function submitLocalLogin() {
  const email = String(loginEmailInput?.value || '').trim();
  const password = String(loginPasswordInput?.value || '').trim();
  if (!email || !password) {
    pushToast('warn', 'Login', 'Escribe correo y contraseña.');
    return;
  }
  const endpoint = 'https://routicket.com/login/v2/login_email.php';
  const result = await window.ideRtk.loginRemote?.({ endpoint, email, password });
  if (!result?.ok) {
    pushToast('error', 'Login', result?.data?.message || result?.error || 'No se pudo validar el login.');
    return;
  }
  loginState = { loggedIn: true, email };
  persistLoginState();
  updateLoginUI();
  setLoginModalVisible(false);
  updatePluginStateBadge();
  pushToast('success', 'Sesión', `Sesión iniciada como ${email}.`);
}

function logoutLocalSession() {
  loginState = { loggedIn: false, email: '' };
  persistLoginState();
  updateLoginUI();
  updatePluginStateBadge();
  pushToast('info', 'Sesión', 'Sesión cerrada.');
}

function updatePluginStateBadge() {
  if (!loginBtn) return;
  loginBtn.innerHTML = loginState.loggedIn
    ? '<i class="fa-solid fa-circle-user"></i>'
    : '<i class="fa-solid fa-right-to-bracket"></i>';
  loginBtn.title = loginState.loggedIn ? `Sesión: ${loginState.email || 'activa'}` : 'Login';
  loginBtn.setAttribute('aria-label', loginBtn.title);
}

async function renderPluginsCatalog() {
  if (!pluginsList) return;
  let localCatalog = PLUGIN_CATALOG.map((plugin) => {
    const active = pluginStates[plugin.id] !== false;
    return `
      <article class="plugin-card ${active ? 'active' : ''}">
        <div class="plugin-card-head">
          <div class="plugin-card-title">
            <i class="fa-solid ${plugin.icon}"></i>
            <div>
              <strong>${esc(plugin.name)}</strong>
              <span>v${esc(plugin.version)}</span>
            </div>
          </div>
          <button type="button" class="plugin-toggle ${active ? 'on' : 'off'}" data-plugin-toggle="${esc(plugin.id)}">
            ${active ? 'Activo' : 'Instalar'}
          </button>
        </div>
        <p>${esc(plugin.desc)}</p>
        <small>${esc(plugin.impact)}</small>
      </article>
    `;
  }).join('');
  let externalCatalog = `
    <article class="plugin-card active">
      <div class="plugin-card-head">
        <div class="plugin-card-title">
          <i class="fa-solid fa-box-open"></i>
          <div>
            <strong>Carpeta externa</strong>
            <span>plugins/external</span>
          </div>
        </div>
        <button type="button" class="plugin-toggle on" data-plugin-folder="external">Abrir</button>
      </div>
      <p>Coloca aquí plugins empaquetados por carpetas para que el IDE los detecte por archivo manifiesto.</p>
      <small>Ruta: <code>./plugins/external/</code></small>
    </article>
    <article class="plugin-card active">
      <div class="plugin-card-head">
        <div class="plugin-card-title">
          <i class="fa-solid fa-box"></i>
          <div>
            <strong>Carpeta local</strong>
            <span>plugins/local</span>
          </div>
        </div>
        <button type="button" class="plugin-toggle on" data-plugin-folder="local">Abrir</button>
      </div>
      <p>Packs internos del IDE para funciones ya integradas y futuras extensiones del proyecto.</p>
      <small>Ruta: <code>./plugins/local/</code></small>
    </article>
  `;
  try {
    const response = await fetch(`${PLUGIN_LIST_ENDPOINT}?t=${Date.now()}`, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      const locals = Array.isArray(data?.local) ? data.local : [];
      const externals = Array.isArray(data?.external) ? data.external : [];
      externalCatalog = externals.length
        ? externals.map((plugin) => `
            <article class="plugin-card active">
              <div class="plugin-card-head">
                <div class="plugin-card-title">
                  <i class="fa-solid fa-puzzle-piece"></i>
                  <div>
                    <strong>${esc(plugin.name || plugin.id || 'Plugin externo')}</strong>
                    <span>${esc(plugin.version || '0.0.0')} · ${esc(plugin.type || 'external')}</span>
                  </div>
                </div>
                <button
                  type="button"
                  class="plugin-toggle on"
                  data-plugin-download="${esc(plugin.id || '')}"
                  data-plugin-download-url="${esc(plugin.downloadUrl || '')}"
                >
                  Descargar
                </button>
              </div>
              <p>${esc(plugin.description || 'Plugin externo disponible para descarga.')}</p>
              <small>Manifiesto: <code>${esc(plugin.entryPoint || 'plugin.json')}</code></small>
            </article>
          `).join('')
        : externalCatalog;
      if (pluginsTab === 'local' && locals.length) {
        localCatalog = locals.map((plugin) => {
          const active = pluginStates[plugin.id] !== false;
          return `
            <article class="plugin-card ${active ? 'active' : ''}">
              <div class="plugin-card-head">
                <div class="plugin-card-title">
                  <i class="fa-solid fa-puzzle-piece"></i>
                  <div>
                    <strong>${esc(plugin.name || plugin.id || 'Plugin local')}</strong>
                    <span>${esc(plugin.version || '0.0.0')} · ${esc(plugin.status || 'installed')}</span>
                  </div>
                </div>
                <button type="button" class="plugin-toggle ${active ? 'on' : 'off'}" data-plugin-toggle="${esc(plugin.id)}">
                  ${active ? 'Activo' : 'Instalar'}
                </button>
              </div>
              <p>${esc(plugin.description || 'Plugin local administrado desde el backend.')}</p>
            </article>
          `;
        }).join('');
      }
      pluginsList.dataset.pluginDownloadRoot = String(data?.downloadRoot || '').trim();
    }
  } catch {
    // keep local fallback
  }
  if (pluginsLocalTab) pluginsLocalTab.classList.toggle('active', pluginsTab === 'local');
  if (pluginsExternalTab) pluginsExternalTab.classList.toggle('active', pluginsTab === 'external');
  pluginsList.innerHTML = pluginsTab === 'external' ? externalCatalog : localCatalog;
  pluginsList.querySelectorAll('[data-plugin-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pluginId = btn.dataset.pluginToggle;
      pluginStates[pluginId] = !(pluginStates[pluginId] !== false);
      persistPluginState();
      applyPluginState();
      renderPluginsCatalog();
      pushToast('success', 'Plugins', `${pluginId} ${pluginStates[pluginId] ? 'activado' : 'desactivado'}.`);
    });
  });
  pluginsList.querySelectorAll('[data-plugin-folder]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const folder = btn.dataset.pluginFolder;
      const url = folder === 'external'
        ? `${window.location.origin || 'https://routicket.com'}/plugins/dev2/ide-rtk/plugins/external/`
        : `${window.location.origin || 'https://routicket.com'}/plugins/dev2/ide-rtk/plugins/local/`;
      await window.ideRtk.openExternal?.(url);
    });
  });
  pluginsList.querySelectorAll('[data-plugin-download]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const downloadUrl = String(btn.dataset.pluginDownloadUrl || '').trim();
      if (!downloadUrl) {
        pushToast('warn', 'Plugins', 'Ese plugin no tiene URL de descarga.');
        return;
      }
      const result = await window.ideRtk.openExternal?.(downloadUrl);
      if (!result?.ok) {
        pushToast('error', 'Plugins', result?.error || 'No se pudo abrir la descarga.');
      } else {
        pushToast('success', 'Plugins', 'Descarga abierta.');
      }
    });
  });
}

function renderUpdatesState() {
  if (updatesFeedInput) updatesFeedInput.value = updatesState.feedUrl || '';
  if (currentVersionInput) currentVersionInput.value = updatesState.currentVersion || '';
  if (updatesStatus) {
    updatesStatus.textContent = updatesState.lastCheckedAt
      ? (updatesState.available ? `Actualización disponible: ${updatesState.latestVersion || 'nueva versión'}` : `Sin novedades. Revisado ${updatesState.lastCheckedAt}.`)
      : 'Aún no se ha buscado una actualización.';
  }
  if (updatesDetail) {
    const lines = [];
    if (updatesState.title) lines.push(`Título: ${updatesState.title}`);
    if (updatesState.message) lines.push(`Mensaje: ${updatesState.message}`);
    if (updatesState.latestVersion) lines.push(`Última versión: ${updatesState.latestVersion}`);
    if (updatesState.downloadUrl) lines.push(`Descarga: ${updatesState.downloadUrl}`);
    if (updatesState.changelog.length) {
      lines.push('');
      lines.push('Cambios:');
      updatesState.changelog.slice(0, 10).forEach((item) => lines.push(`- ${item}`));
    }
    updatesDetail.textContent = lines.length ? lines.join('\n') : 'No hay datos de actualización cargados todavía.';
  }
  if (openUpdateUrlBtn) openUpdateUrlBtn.disabled = !updatesState.downloadUrl;
  if (applyUpdateBtn) applyUpdateBtn.disabled = !updatesState.available;
}

function setUpdatesModalVisible(open) {
  updatesModal?.classList.toggle('hidden', !open);
  if (open) renderUpdatesState();
}

function normalizeUpdatePayload(payload = {}) {
  const source = payload && typeof payload === 'object' ? payload : {};
  return {
    ok: true,
    currentVersion: String(source.currentVersion || source.current_version || updatesState.currentVersion || '0.2').trim(),
    latestVersion: String(source.latestVersion || source.latest_version || source.version || '').trim(),
    title: String(source.title || source.name || '').trim(),
    message: String(source.message || source.detail || source.description || '').trim(),
    downloadUrl: String(source.downloadUrl || source.download_url || source.url || '').trim(),
    changelog: Array.isArray(source.changelog) ? source.changelog.map((item) => String(item)) : [],
    available: Boolean(source.available ?? source.updateAvailable ?? source.hasUpdate ?? false),
    builtAt: String(source.builtAt || source.updatedAt || source.updated_at || '').trim(),
  };
}

async function checkForUpdates() {
  const feedUrl = String(updatesFeedInput?.value || updatesState.feedUrl || '').trim();
  if (!feedUrl) {
    pushToast('warn', 'Actualizaciones', 'Escribe la URL de la fuente PHP.');
    return;
  }
  updatesState.feedUrl = feedUrl;
  persistUpdatesState();
  renderUpdatesState();
  pushToast('info', 'Actualizaciones', 'Buscando actualizaciones...');
  try {
    const response = await window.ideRtk.checkUpdates?.({ endpoint: feedUrl, currentVersion: updatesState.currentVersion });
    if (!response?.ok) throw new Error(response?.data?.message || response?.error || 'No se pudo consultar la fuente.');
    const data = response.data || {};
    const normalized = normalizeUpdatePayload(data);
    updatesState = {
      ...updatesState,
      ...normalized,
      feedUrl,
      lastCheckedAt: new Date().toLocaleString(),
    };
    persistUpdatesState();
    renderUpdatesState();
    updateUpdatesBadge();
    if (updatesState.available) {
      pushToast('success', 'Actualizaciones', `Hay una nueva versión ${updatesState.latestVersion || ''}.`.trim());
    } else {
      pushToast('info', 'Actualizaciones', 'Estás al día.');
    }
  } catch (error) {
    updatesState = {
      ...updatesState,
      feedUrl,
      lastCheckedAt: new Date().toLocaleString(),
      message: String(error.message || error),
      available: false,
    };
    persistUpdatesState();
    renderUpdatesState();
    pushToast('error', 'Actualizaciones', `No se pudo consultar la fuente: ${error.message || error}`);
  }
}

async function openUpdateDownload() {
  if (!updatesState.downloadUrl) {
    pushToast('warn', 'Actualizaciones', 'No hay URL de descarga disponible.');
    return;
  }
  const result = await window.ideRtk.openExternal?.(updatesState.downloadUrl);
  if (!result?.ok) {
    pushToast('error', 'Actualizaciones', result?.error || 'No se pudo abrir la descarga.');
  }
}

function applyAvailableUpdate() {
  if (!updatesState.available) {
    pushToast('warn', 'Actualizaciones', 'No hay una actualización lista para aplicar.');
    return;
  }
  if (updatesState.downloadUrl) {
    openUpdateDownload();
  }
  pushToast('success', 'Actualizaciones', 'Se marcó la actualización para descarga.');
}

function updateUpdatesBadge() {
  if (!updatesBtn) return;
  updatesBtn.classList.toggle('attention', Boolean(updatesState.available));
  updatesBtn.title = updatesState.available
    ? `Hay actualización: ${updatesState.latestVersion || 'nueva versión'}`
    : 'Buscar actualizaciones';
  updatesBtn.setAttribute('aria-label', updatesBtn.title);
}

function writeLocalState(patch = {}) {
  try {
    const prev = readLocalState();
    const next = { ...prev, ...patch, updatedAt: new Date().toISOString() };
    localStorage.setItem(LOCAL_STATE_KEY, JSON.stringify(next));
    return next;
  } catch {
    return null;
  }
}

function readImporterCache() {
  try {
    return JSON.parse(localStorage.getItem(IMPORTER_CACHE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function writeImporterCache(patch = {}) {
  try {
    const next = {
      ...readImporterCache(),
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(IMPORTER_CACHE_KEY, JSON.stringify(next));
    importerCache = next;
    return next;
  } catch {
    return null;
  }
}

function renderImporterConsole() {
  if (!importerConsole) return;
  importerConsole.textContent = importerConsoleLines.join('\n') || 'Sin actividad todavía.';
}

function logImporter(message) {
  const line = `[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}] ${message}`;
  importerConsoleLines.push(line);
  if (importerConsoleLines.length > 200) importerConsoleLines.shift();
  renderImporterConsole();
  logConsole(`importer ${message}`);
}

function makeImporterCsv(headers, rows) {
  const safe = (value) => {
    const text = coerceCellValue(value);
    return /[",\n;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const headerLine = (Array.isArray(headers) ? headers : []).map(safe).join(',');
  const body = (Array.isArray(rows) ? rows : []).map((row) => (Array.isArray(row) ? row : []).map(safe).join(','));
  return [headerLine, ...body].join('\n');
}

function makeImporterJson(rows, schemaMatch) {
  return JSON.stringify((Array.isArray(rows) ? rows : []).map((row) => {
    const record = {};
    for (const field of schemaMatch || []) {
      if (field.index >= 0) record[field.key] = coerceCellValue(row[field.index] ?? '');
    }
    return record;
  }), null, 2);
}

function persistImporterArtifacts() {
  if (!importerState.filePath) return;
  const json = makeImporterJson(importerState.rows, importerState.schemaMatch);
  const csv = makeImporterCsv(importerState.headers, importerState.rows);
  writeImporterCache({
    filePath: importerState.filePath,
    fileName: importerState.fileName,
    headers: importerState.headers,
    rows: importerState.rows,
    schemaMatch: importerState.schemaMatch,
    missing: importerState.missing,
    extras: importerState.extras,
    json,
    csv,
    raw: importerState.raw,
    previewAt: new Date().toISOString(),
  });
  logImporter(`caché guardado json=${json.length} chars csv=${csv.length} chars`);
}

function setSshStatus(state, message) {
  sshStatus = state;
  if (sshStatusLight) {
    sshStatusLight.classList.remove('light-red', 'light-amber', 'light-green');
    sshStatusLight.classList.add(state === 'connected' ? 'light-green' : state === 'connecting' ? 'light-amber' : 'light-red');
    sshStatusLight.title = message || state;
  }
}

function renderConsole() {
  if (!consoleOutput) return;
  consoleOutput.textContent = consoleLog.join('\n') || 'Sin mensajes';
  if (consoleDrawer && !consoleDrawer.classList.contains('hidden')) {
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
}

function scheduleConsoleRender() {
  if (consoleRenderQueued) return;
  consoleRenderQueued = true;
  requestAnimationFrame(() => {
    consoleRenderQueued = false;
    if (treeConsole && treeConsole.offsetParent !== null) {
      treeConsole.textContent = consoleLog.join('\n');
      treeConsole.classList.toggle('empty', consoleLog.length === 0);
    }
    if (consoleDrawer && !consoleDrawer.classList.contains('hidden')) {
      renderConsole();
    }
  });
}

function toggleConsole(open) {
  if (!consoleDrawer) return;
  consoleDrawer.classList.toggle('hidden', !open);
  if (open) renderConsole();
}

function pushToast(type, title, body, timeout = 4000) {
  if (!toastHost) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type || 'info'}`;
  toast.innerHTML = `<strong>${esc(title)}</strong><div>${esc(body)}</div>`;
  toastHost.appendChild(toast);
  setTimeout(() => toast.remove(), timeout);
}

function normalizeHeader(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s_\-./]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSchemaMatch(header) {
  const normalized = normalizeHeader(header);
  if (!normalized) return null;
  return IMPORT_SCHEMA.find((field) => {
    if (normalizeHeader(field.key) === normalized) return true;
    return field.variants.some((variant) => normalizeHeader(variant) === normalized);
  }) || null;
}

function coerceCellValue(value) {
  if (value === null || value === undefined) return '';
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  return String(value);
}

function extractWorksheetRows(workbook) {
  const firstSheet = workbook?.SheetNames?.[0];
  if (!firstSheet) return { headers: [], rows: [] };
  const sheet = workbook.Sheets[firstSheet];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  const headers = Array.isArray(rows[0]) ? rows[0].map((value) => String(value || '').trim()) : [];
  const body = rows.slice(1).filter((row) => Array.isArray(row) && row.some((cell) => String(cell || '').trim() !== ''));
  return { headers, rows: body };
}

function parseSpreadsheetFile(filePath) {
  const resolved = String(filePath || '').trim();
  if (!resolved) throw new Error('missing_file');
  const ext = (resolved.split('.').pop() || '').toLowerCase();
  if (ext === 'csv' || ext === 'tsv' || ext === 'txt' || ext === 'xlsx' || ext === 'xls') {
    const workbook = xlsx.readFile(resolved, {
      cellDates: true,
      dense: true,
      raw: false,
    });
    const { headers, rows } = extractWorksheetRows(workbook);
    return { headers, rows };
  }
  throw new Error(`unsupported_format:${ext || 'unknown'}`);
}

function buildImportState(filePath, headers, rows) {
  const headerList = Array.isArray(headers) ? headers.map((value) => String(value || '').trim()) : [];
  const rowList = Array.isArray(rows) ? rows.slice(0, 25).map((row) => Array.isArray(row) ? row.map(coerceCellValue) : []) : [];
  const schemaMatch = IMPORT_SCHEMA.map((field) => {
    const index = headerList.findIndex((header) => normalizeHeader(header) && (
      normalizeHeader(header) === normalizeHeader(field.key) ||
      field.variants.some((variant) => normalizeHeader(variant) === normalizeHeader(header))
    ));
    return {
      ...field,
      header: index >= 0 ? headerList[index] : '',
      index,
      status: index >= 0 ? 'ok' : (field.required ? 'missing' : 'warn'),
    };
  });
  const mappedIndexes = new Set(schemaMatch.filter((item) => item.index >= 0).map((item) => item.index));
  const extras = headerList
    .map((header, index) => ({ header, index }))
    .filter((item) => item.header && !mappedIndexes.has(item.index));
  const missing = schemaMatch.filter((item) => item.index < 0 && item.required);
  return {
    filePath,
    fileName: shortName(filePath || ''),
    rows: rowList,
    headers: headerList,
    normalizedHeaders: headerList.map(normalizeHeader),
    schemaMatch,
    missing,
    extras,
    raw: rows || [],
  };
}

function renderImporterChecklist() {
  if (!importerChecklist) return;
  if (!importerState.headers.length) {
    importerChecklist.classList.add('empty');
    importerChecklist.textContent = 'No hay archivo cargado todavía.';
    return;
  }
  importerChecklist.classList.remove('empty');
  const chips = importerState.schemaMatch.map((field) => {
    const cls = field.status === 'ok' ? 'ok' : field.status === 'warn' ? 'warn' : 'err';
    const label = field.index >= 0
      ? `${field.label}: ${field.header}`
      : `${field.label}: falta`;
    return `<span class="importer-badge ${cls}">${esc(label)}</span>`;
  }).join('');
  const extraChip = importerState.extras.length
    ? `<span class="importer-badge warn">Extras: ${importerState.extras.length}</span>`
    : `<span class="importer-badge ok">Sin columnas extra</span>`;
  const missingChip = importerState.missing.length
    ? `<span class="importer-badge err">Faltan: ${importerState.missing.length}</span>`
    : `<span class="importer-badge ok">Todo lo requerido está mapeado</span>`;
  importerChecklist.innerHTML = `
    <div class="importer-badges">${chips}${extraChip}${missingChip}</div>
    <div class="importer-badges">
      <span class="importer-badge ok">Filas detectadas: ${importerState.raw.length}</span>
      <span class="importer-badge ok">Vista previa: ${importerState.rows.length}</span>
      <span class="importer-badge ok">Columnas: ${importerState.headers.length}</span>
    </div>
  `;
}

function renderImporterPreview() {
  if (!importerPreview) return;
  if (!importerState.headers.length) {
    importerPreview.classList.add('empty');
    importerPreview.textContent = 'Abre un archivo para ver el preview y la validación de columnas.';
    return;
  }
  importerPreview.classList.remove('empty');
  const headerCells = importerState.headers.map((header, index) => {
    const match = importerState.schemaMatch.find((field) => field.index === index);
    const label = match ? match.label : 'Extra';
    const cls = match ? 'ok' : 'extra';
    return `<th class="${cls}"><span class="importer-col-name">${esc(header || `Columna ${index + 1}`)}</span><span class="importer-col-meta">${esc(label)}</span></th>`;
  }).join('');
  const bodyRows = importerState.rows.slice(0, 8).map((row) => {
    const cells = importerState.headers.map((header, index) => {
      const value = row[index] ?? '';
      const match = importerState.schemaMatch.find((field) => field.index === index);
      const cls = match ? 'ok' : 'extra';
      return `<td class="${cls}">${esc(coerceCellValue(value) || '—')}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  importerPreview.innerHTML = `
    <table>
      <thead><tr>${headerCells}</tr></thead>
      <tbody>${bodyRows || '<tr><td colspan="100%">No hay filas para previsualizar.</td></tr>'}</tbody>
    </table>
  `;
}

function updateImporterMeta() {
  if (importerFileName) importerFileName.textContent = importerState.fileName || 'Ningún archivo cargado';
  if (importerFileMeta) {
    const missingLabel = importerState.missing.length ? `Faltan ${importerState.missing.length} campos` : 'Sin faltantes';
    const extraLabel = importerState.extras.length ? `${importerState.extras.length} columnas extra` : 'Sin extras';
    importerFileMeta.textContent = importerState.filePath ? `${missingLabel} · ${extraLabel}` : 'Selecciona un .xlsx, .csv o .tsv';
  }
}

function renderImporterState() {
  updateImporterMeta();
  renderImporterChecklist();
  renderImporterPreview();
  renderImporterConsole();
}

function openImporterModal() {
  importerModal?.classList.remove('hidden');
  importerModal?.setAttribute('aria-hidden', 'false');
}

function closeImporterModal() {
  importerModal?.classList.add('hidden');
  importerModal?.setAttribute('aria-hidden', 'true');
}

async function pickAndParseImportFile() {
  if (!xlsx) {
    pushToast('error', 'Importador', 'No se cargó el parser de Excel.');
    return;
  }
  const result = await window.ideRtk.pickFile({
    title: 'Seleccionar archivo para importar',
    filters: [
      { name: 'Excel', extensions: ['xlsx', 'xls'] },
      { name: 'Datos', extensions: ['csv', 'tsv', 'txt'] },
    ],
  });
  if (!result?.ok || !result.filePath) return;
  try {
    importerConsoleLines = [];
    logImporter(`abriendo ${result.filePath}`);
    const parsed = parseSpreadsheetFile(result.filePath);
    importerState = buildImportState(result.filePath, parsed.headers, parsed.rows);
    openImporterModal();
    renderImporterState();
    persistImporterArtifacts();
    logImporter(`archivo cargado headers=${importerState.headers.length} filas=${importerState.raw.length}`);
    pushToast('success', 'Importador listo', `Leí ${importerState.rows.length} filas para validar columnas.`);
  } catch (error) {
    const fallback = String(result.filePath || '');
    const unsupported = error.message.startsWith('unsupported_format');
    importerState = {
      filePath: fallback,
      fileName: shortName(fallback || ''),
      rows: [],
      headers: [],
      normalizedHeaders: [],
      schemaMatch: [],
      missing: [],
      extras: [],
      raw: [],
    };
    writeImporterCache({
      filePath: fallback,
      fileName: importerState.fileName,
      json: '[]',
      csv: '',
      error: error.message,
      previewAt: new Date().toISOString(),
    });
    openImporterModal();
    renderImporterState();
    logImporter(`error ${unsupported ? 'formato' : 'lectura'} ${error.message}`);
    pushToast('error', 'Importador', `No se pudo leer el archivo: ${error.message}`);
    logConsole(`importer error file=${result.filePath} error=${error.message}`);
  }
}

async function copyImporterJson() {
  const json = importerCache?.json || makeImporterJson(importerState.rows, importerState.schemaMatch);
  if (!json || json === '[]') {
    pushToast('warn', 'Importador', 'No hay datos para copiar.');
    return;
  }
  await window.ideRtk.copyText({ text: json });
  logImporter(`json copiado al portapapeles bytes=${json.length}`);
  pushToast('success', 'Importador', 'Se copió el JSON al portapapeles.');
}

async function runImporter() {
  if (!importerState.filePath) {
    pushToast('warn', 'Importador', 'Carga un archivo antes de importar.');
    return;
  }
  if (importerState.missing.length) {
    pushToast('warn', 'Importador', 'Faltan columnas requeridas. Corrige el archivo antes de continuar.');
    return;
  }
  await copyImporterJson();
}

async function copyImporterConsole() {
  const cache = importerCache || readImporterCache();
  const payload = {
    filePath: cache.filePath || importerState.filePath || '',
    fileName: cache.fileName || importerState.fileName || '',
    json: cache.json || makeImporterJson(importerState.rows, importerState.schemaMatch),
    csv: cache.csv || makeImporterCsv(importerState.headers, importerState.rows),
    error: cache.error || '',
    updatedAt: cache.updatedAt || new Date().toISOString(),
  };
  const text = JSON.stringify(payload, null, 2);
  await window.ideRtk.copyText({ text });
  logImporter(`consola copiada bytes=${text.length}`);
  pushToast('success', 'Importador', 'Se copió la consola con JSON/CSV interno.');
}

function logConsole(message) {
  const line = `[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}] ${message}`;
  consoleLog.push(line);
  if (consoleLog.length > 120) consoleLog.shift();
  scheduleConsoleRender();
}

function setTreeStatus(text) {
  if (treeStatus) treeStatus.textContent = text;
}

function setPreviewError(message) {
  if (!previewError) return;
  if (!message) {
    previewError.classList.add('hidden');
    previewError.textContent = '';
    return;
  }
  previewError.textContent = message;
  previewError.classList.remove('hidden');
}

function ensurePreviewConsoleVisible() {
  if (consoleDrawer?.classList.contains('hidden')) toggleConsole(true);
}

function reportPreviewIssue(message, detail = '') {
  const fullMessage = detail ? `${message} :: ${detail}` : message;
  logConsole(`Preview error: ${fullMessage}`);
  console.error(fullMessage);
  setPreviewError(message);
  ensurePreviewConsoleVisible();
}

function logPreviewStep(message) {
  logConsole(`Preview: ${message}`);
}

function previewTargets() {
  return [
    { id: '1', frame: previewFrame, mode: 'srcdoc', kind: 'directo' },
  ].filter((item) => item.frame);
}

function clearPreviewFrames() {
  for (const target of previewTargets()) {
    target.frame.onload = null;
    target.frame.onerror = null;
    target.frame.removeAttribute('src');
    target.frame.srcdoc = '';
  }
}

function setPreviewUrlLabel(text) {
  if (previewUrlLabel) previewUrlLabel.textContent = `URL: ${text || '-'}`;
}

function clearPreviewTimers() {
  if (previewDebounceTimer) {
    clearTimeout(previewDebounceTimer);
    previewDebounceTimer = null;
  }
  if (previewTimeoutTimer) {
    clearTimeout(previewTimeoutTimer);
    previewTimeoutTimer = null;
  }
  if (previewRefreshInterval) {
    clearInterval(previewRefreshInterval);
    previewRefreshInterval = null;
  }
}

function schedulePreviewRefresh(filePath = currentFile, content = editor?.value || '', reason = 'edit', delayMs = PREVIEW_EDIT_DELAY_MS) {
  if (!filePath) return;
  if (previewDebounceTimer) clearTimeout(previewDebounceTimer);
  previewDebounceTimer = setTimeout(() => {
    previewDebounceTimer = null;
    logConsole(`preview delayed refresh (${reason}) delay=${delayMs}ms path=${filePath || '-'}`);
    updatePreview(content, filePath);
  }, delayMs);
  logConsole(`preview refresh scheduled (${reason}) delay=${delayMs}ms path=${filePath || '-'}`);
}

function previewSignature(content, filePath) {
  return `${String(filePath || '')}::${String(content || '')}`;
}

function renderPreviewIfChanged(content, filePath, reason = 'unknown', options = {}) {
  const signature = previewSignature(content, filePath);
  const changed = signature !== previewLastSignature;
  if (!changed && !options.force) {
    logConsole(`preview skip (${reason}) sin cambios path=${filePath || '-'}`);
    return false;
  }
  previewLastSignature = signature;
  logConsole(`preview render (${reason}) changed=${changed} path=${filePath || '-'}`);
  renderPreviewNow(content, filePath, options);
  return true;
}

function looksLikeMarkdown(filePath = '', text = '') {
  const ext = path.extname(String(filePath || '')).toLowerCase();
  if (['.md', '.markdown', '.mdown', '.mkd', '.mkdn'].includes(ext)) return true;
  const source = String(text || '');
  return /^#{1,6}\s+\S/m.test(source) || /^\s*[-*+]\s+\S/m.test(source) || /\[[^\]]+\]\([^)]+\)/m.test(source) || /```[\s\S]*?```/m.test(source);
}

function renderMarkdownPreview(content, fileLabel) {
  const source = String(content || '');
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const htmlParts = [];
  let inList = false;
  let inCode = false;
  let codeLang = 'text';
  let codeBuffer = [];
  let paragraph = [];
  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = esc(paragraph.join(' '))
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    htmlParts.push(`<p>${text}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!inList) return;
    htmlParts.push('</ul>');
    inList = false;
  };
  const flushCode = () => {
    if (!inCode) return;
    htmlParts.push(`<pre><code data-lang="${esc(codeLang)}">${esc(codeBuffer.join('\n'))}</code></pre>`);
    codeBuffer = [];
    inCode = false;
    codeLang = 'text';
  };
  for (const rawLine of lines) {
    const line = String(rawLine || '');
    if (/^```/.test(line)) {
      if (inCode) {
        flushCode();
      } else {
        flushParagraph();
        flushList();
        inCode = true;
        codeLang = line.replace(/^```/, '').trim().toLowerCase() || 'text';
      }
      continue;
    }
    if (inCode) {
      codeBuffer.push(line);
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      htmlParts.push(`<h${level}>${esc(heading[2])}</h${level}>`);
      continue;
    }
    const listMatch = line.match(/^\s*[-*+]\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      if (!inList) {
        htmlParts.push('<ul>');
        inList = true;
      }
      htmlParts.push(`<li>${esc(listMatch[1])}</li>`);
      continue;
    }
    if (/^\s*>\s*(.*)$/.test(line)) {
      flushParagraph();
      flushList();
      htmlParts.push(`<blockquote>${esc(line.replace(/^\s*>\s*/, ''))}</blockquote>`);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushList();
  flushCode();
  let html = htmlParts.join('\n')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
    :root{color-scheme:light}
    html,body{margin:0;padding:0;background:#ffffff;color:#1e1e1e;font-family:system-ui,-apple-system,Segoe UI,Arial,sans-serif}
    body{padding:28px}
    .doc{max-width:920px;margin:0 auto;line-height:1.65}
    h1,h2,h3,h4,h5,h6{line-height:1.15;margin:1.2em 0 .45em}
    h1{font-size:2.2rem} h2{font-size:1.8rem} h3{font-size:1.45rem}
    p,ul,ol,pre,blockquote{margin:0 0 1rem}
    ul,ol{padding-left:1.5rem}
    blockquote{border-left:4px solid #cbd5e1;padding-left:14px;color:#475569}
    code{background:#eef2f7;padding:.15rem .35rem;border-radius:6px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
    pre{background:#f6f8fa;padding:16px;border-radius:10px;overflow:auto}
    pre code{background:transparent;padding:0;display:block;white-space:pre-wrap}
    a{color:#0f766e;text-decoration:none}
    a:hover{text-decoration:underline}
  </style></head><body><article class="doc">${html}</article></body></html>`;
  const target = previewTargets()[0];
  if (target?.frame) target.frame.srcdoc = doc;
  setPreviewUrlLabel(`srcdoc: markdown ${fileLabel}`);
  previewStatus.textContent = `Preview Markdown: ${fileLabel}`;
}

function renderPreviewNow(content, filePath, options = {}) {
  if (!options.skipTimerClear) clearPreviewTimers();
  if (previewBlobUrl) {
    try { URL.revokeObjectURL(previewBlobUrl); } catch {}
    previewBlobUrl = null;
  }
  setPreviewError('');
  const fileLabel = shortName(filePath || 'archivo');
  const ext = (filePath.split('.').pop() || '').toLowerCase();
  const text = String(content || '');
  const detectedLanguage = normalizeLanguage(filePath, getLanguage(filePath), text, false);
  const isHtmlPreviewFile = /(\.html?|\.xhtml|\.htm)$/i.test(String(filePath || '')) || detectedLanguage === 'html';
  const isMarkdownPreviewFile = /\.md$/i.test(String(filePath || '')) || detectedLanguage === 'md';
  logPreviewStep(`actualizando ${fileLabel} (${ext || 'sin extension'})`);
  if (isHtmlPreviewFile) {
    rightViewMode = 'web';
    updateRightViewModeButtons();
    splitEnabled = false;
    rightPanel?.classList.remove('split-mode');
    splitWrap?.classList.add('hidden');
    backToPreviewBtn?.classList.add('hidden');
    if (rightPanelTitle) rightPanelTitle.textContent = 'Preview';
    if (columnsCount === 2) {
      columnsCount = 3;
      previewVisible = true;
    }
    previewStatus.textContent = `Cargando ${fileLabel}...`;
    previewError?.classList.add('hidden');
    const size = text.length;
    logPreviewStep(`detectado HTML, tamaño=${size}`);
    if (size > 250000) {
      clearPreviewFrames();
      previewStatus.textContent = `Error de carga: ${fileLabel}`;
      reportPreviewIssue(
        `El preview no se cargó para ${fileLabel}. Archivo demasiado grande para cargar cómodamente.`,
        `size=${size}`
      );
      previewTimeoutTimer = setTimeout(() => {
        clearPreviewFrames();
        setPreviewError('');
        previewStatus.textContent = 'Preview desmontado por exceso de contenido';
      }, 5000);
      return;
    }
    const isFullDocument = /<!doctype|<html[\s>]/i.test(text);
    const html = isFullDocument
      ? text
      : `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;min-height:100%;background:#fff}</style></head><body>${text}</body></html>`;
    const target = previewTargets()[0];
    const previewUrl = isFullDocument
      ? `srcdoc: ${fileLabel}`
      : `srcdoc: wrapped ${fileLabel}`;
    logPreviewStep(`renderizando iframe 1 para ${fileLabel}`);
    setPreviewUrlLabel(previewUrl);
    if (target?.frame) {
      target.frame.style.display = 'block';
      target.frame.onload = () => {
        logPreviewStep(`iframe 1 listo (${target.kind})`);
        previewStatus.textContent = `Preview listo: ${fileLabel}`;
        setPreviewError('');
      };
      target.frame.onerror = () => {
        reportPreviewIssue(`Iframe 1 falló para ${fileLabel}.`, 'srcdoc');
        previewStatus.textContent = `Preview con error: ${fileLabel}`;
      };
      target.frame.removeAttribute('src');
      target.frame.srcdoc = html;
      requestAnimationFrame(() => {
        if (!previewError?.classList.contains('hidden')) setPreviewError('');
        previewStatus.textContent = `Preview listo: ${fileLabel}`;
      });
    }
  } else if (isMarkdownPreviewFile) {
    rightViewMode = 'web';
    updateRightViewModeButtons();
    splitEnabled = false;
    rightPanel?.classList.remove('split-mode');
    splitWrap?.classList.add('hidden');
    backToPreviewBtn?.classList.add('hidden');
    if (rightPanelTitle) rightPanelTitle.textContent = 'Preview';
    renderMarkdownPreview(text, fileLabel);
  } else {
    rightViewMode = 'web';
    updateRightViewModeButtons();
    if (splitEnabled) {
      splitEnabled = false;
      rightPanel?.classList.remove('split-mode');
      splitWrap?.classList.add('hidden');
      backToPreviewBtn?.classList.add('hidden');
      if (rightPanelTitle) rightPanelTitle.textContent = 'Preview';
    }
    clearPreviewFrames();
    logPreviewStep(`renderizando vista de texto para ${fileLabel}`);
    setPreviewUrlLabel(`srcdoc: text ${fileLabel}`);
    const textHtml = `<!doctype html><html><body style="margin:0;padding:16px;white-space:pre-wrap;font-family:monospace;background:#fff;color:#111">${esc(text)}</body></html>`;
    const target = previewTargets()[0];
    if (target?.frame) target.frame.srcdoc = textHtml;
    previewStatus.textContent = `Vista web para ${shortName(filePath)}`;
  }
  document.querySelector('.preview-body')?.classList.remove('hidden');
  applyPreviewVisibility();
}

function updateRightViewModeButtons() {
  if (webViewTabBtn) {
    webViewTabBtn.classList.toggle('active', rightViewMode === 'web');
    webViewTabBtn.setAttribute('aria-pressed', String(rightViewMode === 'web'));
  }
}

function scheduleTreeRender() {
  if (treeRenderTimer) clearTimeout(treeRenderTimer);
  treeRenderTimer = setTimeout(async () => {
    treeRenderTimer = null;
    await renderTree();
    refreshActiveTreeSelection();
  }, 50);
}

async function persistState() {
  if (persistStateFlight) {
    persistStateQueued = true;
    return persistStateFlight;
  }
  const activeProfile = getActiveSshProfile();
  if (activeProfile) {
    activeProfile.configPath = String(sshConfigPathInput?.value || activeProfile.configPath || '').trim();
    activeProfile.selectedHost = String(sshHostSelect?.value || sshSelectedHost || activeProfile.selectedHost || '').trim();
    activeProfile.identityFile = String(sshIdentityFileInput?.value || activeProfile.identityFile || '').trim();
    activeProfile.platform = String(sshPlatformSelect?.value || activeProfile.platform || 'auto').trim() || 'auto';
    activeProfile.remoteRoot = getRemoteRootValue();
    activeSshProfileId = activeProfile.id;
  }
  const payload = {
    lastRootPath: currentRoot || '',
    recentFiles,
    favoriteFiles,
    resumeTabs: openFiles.map((file) => ({
      path: file.path,
      name: file.name,
      content: file.content,
      isText: file.isText,
      language: file.language,
      dirty: Boolean(file.dirty),
      openedAt: file.openedAt?.toISOString?.() || new Date().toISOString(),
    })),
    resumeActivePath: currentFile || '',
    sshProfiles,
    activeSshProfileId,
    sshConfigPath: sshConfigData.path || '',
    sshSelectedHost: sshHostSelect?.value || sshSelectedHost || '',
    sshIdentityFile: sshIdentityFileInput?.value || '',
    sshRemoteRoot,
    previewVisible,
    helpVisible,
    theme,
    codeViewer,
    prismTheme,
    codeMirrorTheme,
    lineNumbersVisible,
    activeLineVisible,
    activeLineColor,
    density,
    hintsVisible,
    sidebarCompact,
    editorFontSize,
    highContrast,
    iconSize,
    uiTextSize,
    globalPadding,
    iconFamily,
    autosaveEnabled,
    codeWrapEnabled,
    columnsCount,
    centerHidden,
    previewMode,
    rightViewMode,
    previewWidth: document.querySelector('.workspace')?.style.getPropertyValue('--preview-width') || '',
  };
  writeLocalState({
    lastRootPath: payload.lastRootPath,
    resumeTabs: payload.resumeTabs,
    resumeActivePath: payload.resumeActivePath,
  });
  const run = async () => {
    const response = await window.ideRtk.setState(payload);
    logConsole(`persistState root=${payload.lastRootPath || '-'} tabs=${payload.resumeTabs.length} active=${payload.resumeActivePath || '-'} ok=${Boolean(response?.ok)}`);
    return response;
  };
  persistStateFlight = run().finally(() => {
    persistStateFlight = null;
    if (!persistStateQueued) return;
    persistStateQueued = false;
    void persistState();
  });
  return persistStateFlight;
}

async function saveActiveFile() {
  if (!currentFile) return { ok: false, error: 'missing_path' };
  const active = openFiles[activeFileIndex];
  if (active?.isRemote) {
    const result = await window.ideRtk.sshSaveFile?.({
      ...(getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {}),
      remotePath: currentFile,
      content: editor.value,
    });
    if (!result?.ok) return result || { ok: false, error: 'remote_save_failed' };
    clearDirty(currentFile);
    if (active) {
      active.content = editor.value;
      active.dirty = false;
    }
    void persistState();
    refreshPreviewNow();
    return result;
  }
  const result = await window.ideRtk.saveFile({ filePath: currentFile, content: editor.value });
  if (result.ok) {
    clearDirty(currentFile);
    if (active) {
      active.content = editor.value;
      active.dirty = false;
    }
    void persistState();
    refreshPreviewNow();
  }
  return result;
}

async function pasteIntoEditor() {
  if (!editor) return;
  try {
    const text = await navigator.clipboard.readText();
    const start = editor.selectionStart ?? editor.value.length;
    const end = editor.selectionEnd ?? editor.value.length;
    editor.value = `${editor.value.slice(0, start)}${text}${editor.value.slice(end)}`;
    const caret = start + text.length;
    editor.setSelectionRange(caret, caret);
    editor.dispatchEvent(new Event('input', { bubbles: true }));
  } catch {
    pushToast('warn', 'Pegar', 'No fue posible pegar desde el portapapeles.');
  }
}

async function loadState() {
  try {
    const response = await window.ideRtk.getState();
    const saved = response?.state || {};
    const localSaved = readLocalState();
    logConsole(`state hydrate savedRoot=${saved.lastRootPath || '-'} localRoot=${localSaved.lastRootPath || '-'} savedTabs=${Array.isArray(saved.resumeTabs) ? saved.resumeTabs.length : 0} localTabs=${Array.isArray(localSaved.resumeTabs) ? localSaved.resumeTabs.length : 0}`);
    recentFiles = Array.isArray(saved.recentFiles) ? saved.recentFiles : [];
    favoriteFiles = Array.isArray(saved.favoriteFiles) ? saved.favoriteFiles : [];
    previewVisible = saved.previewVisible !== false;
    helpVisible = saved.helpVisible !== false;
    theme = saved.theme || 'sublime';
    codeViewer = ['auto', 'monaco', 'prism', 'codemirror'].includes(saved.codeViewer) ? saved.codeViewer : 'prism';
    const savedPrismTheme = String(saved.prismTheme || '').toLowerCase();
    const defaultPrismTheme = ['light', 'solarized'].includes(theme) ? 'lightplus' : 'sublime';
    prismTheme = ['sublime', 'githublight', 'lightplus', 'alabaster', 'nordlight', 'twilight', 'okaidia', 'tomorrow', 'funky', 'solarizedlight'].includes(savedPrismTheme)
      ? savedPrismTheme
      : defaultPrismTheme;
    codeMirrorTheme = ['eclipse', 'material', 'github'].includes(saved.codeMirrorTheme) ? saved.codeMirrorTheme : 'material';
    lineNumbersVisible = true;
    activeLineVisible = true;
    activeLineColor = ['cyan', 'blue', 'lime', 'amber', 'pink', 'white'].includes(saved.activeLineColor) ? saved.activeLineColor : 'cyan';
    density = saved.density || 'comfortable';
    hintsVisible = saved.hintsVisible !== false;
    sidebarCompact = saved.sidebarCompact === true;
    editorFontSize = ['small', 'medium', 'large'].includes(saved.editorFontSize) ? saved.editorFontSize : 'medium';
    highContrast = saved.highContrast !== false;
    iconSize = ['small', 'medium', 'large'].includes(saved.iconSize) ? saved.iconSize : 'medium';
    uiTextSize = ['small', 'medium', 'large'].includes(saved.uiTextSize) ? saved.uiTextSize : 'medium';
    globalPadding = ['small', 'medium', 'large'].includes(saved.globalPadding) ? saved.globalPadding : 'medium';
    iconFamily = ['solid', 'outline'].includes(saved.iconFamily) ? saved.iconFamily : 'solid';
    autosaveEnabled = saved.autosaveEnabled !== false;
    codeWrapEnabled = false;
    columnsCount = [2, 3].includes(Number(saved.columnsCount)) ? Number(saved.columnsCount) : 3;
    centerHidden = saved.centerHidden === true;
    previewMode = ['normal', 'fit', 'expanded'].includes(saved.previewMode) ? saved.previewMode : 'normal';
    rightViewMode = 'web';
    if (saved.previewWidth) {
      document.querySelector('.workspace')?.style.setProperty('--preview-width', String(saved.previewWidth));
    }
    currentRoot = saved.lastRootPath || localSaved.lastRootPath || null;
    if (!currentRoot) {
      const resumePathList = [
        ...(Array.isArray(saved.resumeTabs) ? saved.resumeTabs : []),
        ...(Array.isArray(localSaved.resumeTabs) ? localSaved.resumeTabs : []),
      ].map((tab) => tab?.path).filter(Boolean);
      const inferredRoot = inferRootFromPaths(resumePathList, saved.resumeActivePath || localSaved.resumeActivePath || '');
      if (inferredRoot) {
        currentRoot = inferredRoot;
        logConsole(`state infer root=${currentRoot}`);
      }
    }
    if (currentRoot && !treeState) {
      treeState = { name: currentRoot.split(/[\\/]/).pop(), path: currentRoot, type: 'directory' };
    }
    if (currentRoot) treeMode = 'local';
    if (currentRoot) {
      writeLocalState({ lastRootPath: currentRoot });
    }
    loginState = normalizeLoginState(readLoginState());
    pluginStates = normalizePluginState(readPluginState());
    updatesState = normalizeUpdatesState(readUpdatesState());
    resumeTabs = Array.isArray(saved.resumeTabs) && saved.resumeTabs.length
      ? saved.resumeTabs
      : (Array.isArray(localSaved.resumeTabs) ? localSaved.resumeTabs : []);
    resumeActivePath = saved.resumeActivePath || localSaved.resumeActivePath || null;
    logConsole(`state load root=${currentRoot || '-'} resumeTabs=${resumeTabs.length} resumeActive=${resumeActivePath || '-'} localRoot=${localSaved.lastRootPath || '-'}`);
    if (currentRoot && saved.lastRootPath !== currentRoot) {
      void persistState();
    }
    sshProfiles = normalizeSshProfiles(saved.sshProfiles || (saved.sshConfigPath || saved.sshSelectedHost || saved.sshRemoteRoot || saved.sshIdentityFile ? [{
      id: 'legacy',
      name: 'Principal',
      configPath: saved.sshConfigPath || '',
      selectedHost: saved.sshSelectedHost || '',
      identityFile: saved.sshIdentityFile || '',
      remoteRoot: saved.sshRemoteRoot || '/var/www/html',
    }] : []));
    activeSshProfileId = String(saved.activeSshProfileId || sshProfiles[0]?.id || '').trim();
    const activeProfile = sshProfiles.find((profile) => profile.id === activeSshProfileId) || sshProfiles[0] || createDefaultSshProfile();
    if (!sshProfiles.length) sshProfiles = [activeProfile];
    sshConfigData.path = activeProfile.configPath || saved.sshConfigPath || '';
    sshSelectedHost = activeProfile.selectedHost || saved.sshSelectedHost || '';
    if (sshIdentityFileInput) sshIdentityFileInput.value = activeProfile.identityFile || saved.sshIdentityFile || '';
    sshRemoteRoot = activeProfile.remoteRoot || saved.sshRemoteRoot || '/var/www/html';
    if (sshRemoteRootInput) sshRemoteRootInput.value = sshRemoteRoot;
    setSshStatus('disconnected', 'No conectado');
    stateLoaded = true;
  } catch {}
}

function updateSyntaxLanguage(filePath, language) {
  currentLanguage = normalizeLanguage(filePath, language, editor?.value || '');
  if (languageBadge) languageBadge.textContent = languageLabel(currentLanguage);
  document.body.dataset.editorLanguage = currentLanguage || 'text';
  logConsole(`language detect path=${filePath || '-'} source=${language || '-'} normalized=${currentLanguage || 'text'}`);
  syncHighlight();
  updateDiagnosticsForCurrentFile();
  queueHighlightRepaint('language-change');
}

function updateLayoutMode() {
  // layout controls removed in simplified editor mode
}

function toggleCodeSearchRegex() {
  codeSearchRegex = !codeSearchRegex;
  const btn = document.getElementById('codeSearchRegexBtn');
  if (btn) {
    btn.classList.toggle('active', codeSearchRegex);
    btn.title = codeSearchRegex ? 'Regex activado' : 'Regex desactivado';
  }
  updateCodeSearchState();
}

function updateCodeSearchState() {
  if (!codeSearchInput) return;
  const query = String(codeSearchInput.value || '');
  if (!query || !currentFile) {
    codeSearchMatches = [];
    codeSearchIndex = -1;
    if (codeSearchCount) codeSearchCount.textContent = '0';
    syncHighlight();
    return;
  }
  const source = String(editor.value || '');
  const matches = [];
  if (codeSearchRegex) {
    try {
      const re = new RegExp(query, 'gi');
      let m;
      while ((m = re.exec(source)) !== null) {
        matches.push(m.index);
        if (m.index === re.lastIndex) re.lastIndex++;
      }
    } catch {
      if (codeSearchCount) codeSearchCount.textContent = '!';
      syncHighlight();
      return;
    }
  } else {
    const lower = source.toLowerCase();
    const needle = query.toLowerCase();
    let start = 0;
    while (start < lower.length) {
      const idx = lower.indexOf(needle, start);
      if (idx < 0) break;
      matches.push(idx);
      start = idx + Math.max(needle.length, 1);
    }
  }
  codeSearchMatches = matches;
  codeSearchIndex = matches.length ? 0 : -1;
  if (codeSearchCount) codeSearchCount.textContent = String(matches.length);
  syncHighlight();
}

function updateCenterChromeVisibility() {
  const hasManyTabs = openFiles.length > 1;
  tabBar?.classList.toggle('hidden', !hasManyTabs);
  codeSearchBar?.classList.toggle('hidden', !hasManyTabs || !codeSearchVisible);
  if (toggleCodeSearchBtn) {
    const visible = hasManyTabs && codeSearchVisible;
    toggleCodeSearchBtn.title = visible ? 'Ocultar buscador de código' : 'Mostrar buscador de código';
    toggleCodeSearchBtn.setAttribute('aria-label', toggleCodeSearchBtn.title);
    toggleCodeSearchBtn.innerHTML = visible
      ? '<i class="fa-solid fa-magnifying-glass-minus"></i>'
      : '<i class="fa-solid fa-magnifying-glass"></i>';
  }
}

function updateWrapButtonLabel() {
  if (!wrapCodeBtn) return;
  wrapCodeBtn.title = codeWrapEnabled ? 'Ajuste de texto activado' : 'Ajuste de texto desactivado';
  wrapCodeBtn.setAttribute('aria-label', wrapCodeBtn.title);
}

function parseLineFromError(message = '') {
  const text = String(message || '');
  const lineMatch = text.match(/line\s+(\d+)/i) || text.match(/:(\d+):(\d+)/);
  return lineMatch ? Number(lineMatch[1]) || 0 : 0;
}

function detectBasicDiagnostics(source = '', language = currentLanguage) {
  const text = String(source || '');
  const diagnostics = [];
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  if (language === 'js' || language === 'json') {
    try {
      // Basic syntax pass only: catches the most common JavaScript mistakes.
      // It intentionally ignores runtime issues and unsupported module semantics.
      // eslint-disable-next-line no-new, no-new-func
      new Function(text);
    } catch (error) {
      const line = parseLineFromError(error?.stack || error?.message || '');
      diagnostics.push({
        type: 'error',
        line: line || 1,
        message: error?.message || 'Error de sintaxis',
      });
    }
  } else if (language === 'html') {
    const stack = [];
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9:-]*)(\s[^>]*)?>/g;
    const skipTags = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'source', 'track', 'area', 'base', 'col', 'embed', 'param', 'wbr']);
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const line = lines[lineIndex];
      let match;
      while ((match = tagRegex.exec(line))) {
        const raw = match[0];
        const tag = String(match[1] || '').toLowerCase();
        const isClosing = raw.startsWith('</');
        const isSelfClosing = /\/>$/.test(raw) || skipTags.has(tag);
        if (isClosing) {
          const expected = stack.pop();
          if (expected !== tag) {
            diagnostics.push({
              type: 'error',
              line: lineIndex + 1,
              message: `Etiqueta de cierre inesperada </${tag}>`,
            });
            break;
          }
        } else if (!isSelfClosing) {
          stack.push(tag);
        }
      }
    }
    if (stack.length) {
      diagnostics.push({
        type: 'warn',
        line: Math.max(1, lines.length),
        message: `Faltan cerrar: ${stack.slice(-3).map((tag) => `</${tag}>`).join(', ')}`,
      });
    }
  }
  return diagnostics;
}

function updateDiagnosticsForCurrentFile() {
  codeDiagnostics = currentFile ? detectBasicDiagnostics(editor?.value || '', currentLanguage) : [];
  const errorCount = codeDiagnostics.filter((item) => item.type === 'error').length;
  const warnCount = codeDiagnostics.filter((item) => item.type === 'warn').length;
  if (editStatus) {
    const base = editStatus.dataset.baseText || editStatus.textContent || '';
    editStatus.textContent = codeDiagnostics.length
      ? `${base ? `${base} · ` : ''}${errorCount} error(es), ${warnCount} aviso(s)`
      : base;
  }
  renderLineNumbers();
}

function resetCodeSearch() {
  codeSearchMatches = [];
  codeSearchIndex = -1;
  if (codeSearchCount) codeSearchCount.textContent = '0';
}

function focusCodeSearchMatch(delta = 0) {
  if (!currentFile || !codeSearchInput) return;
  updateCodeSearchState();
  if (!codeSearchMatches.length) {
    pushToast('warn', 'Buscar', 'No se encontró coincidencia en el código activo.');
    return;
  }
  codeSearchIndex = (codeSearchIndex + delta + codeSearchMatches.length) % codeSearchMatches.length;
  const idx = codeSearchMatches[codeSearchIndex];
  const query = String(codeSearchInput.value || '');
  editor.focus();
  editor.setSelectionRange(idx, idx + query.length);
  requestAnimationFrame(() => {
    const line = editor.value.slice(0, idx).split('\n').length;
    const approxTop = Math.max(0, (line - 2) * 22);
    editor.scrollTop = approxTop;
    syncHighlight();
  });
  pushToast('info', 'Buscar', `Coincidencia ${codeSearchIndex + 1} de ${codeSearchMatches.length}.`);
}

function setHelpText() {
  if (!helpDock) return;
  if (!helpVisible) {
    helpDock.classList.add('hidden');
    return;
  }
  helpDock.classList.remove('hidden');
  helpDock.innerHTML = `
    ${helpCardState.start ? '' : `
      <div class="help-float">
        <div class="help-float-head">
          <strong>Empieza aquí</strong>
          <button type="button" data-close-help="start" aria-label="Cerrar ayuda inicial"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div>1. Abre una carpeta.</div>
        <div>2. Haz clic en un archivo.</div>
        <div>3. Edita en el centro y mira el resultado a la derecha.</div>
      </div>
    `}
    ${helpCardState.parts ? '' : `
      <div class="help-float">
        <div class="help-float-head">
          <strong>¿Para qué sirve cada parte?</strong>
          <button type="button" data-close-help="parts" aria-label="Cerrar ayuda de paneles"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div><i class="fa-solid fa-folder-open"></i> árbol: carpeta y archivos.</div>
        <div><i class="fa-solid fa-pen-to-square"></i> editor: escribe código.</div>
        <div><i class="fa-solid fa-eye"></i> preview: ve el resultado.</div>
      </div>
    `}
  `;
  helpDock.querySelectorAll('[data-close-help]').forEach((btn) => {
    btn.addEventListener('click', () => {
      helpCardState = { ...helpCardState, [btn.dataset.closeHelp]: true };
      setHelpText();
    });
  });
}

function applyIconFamily() {
  const icons = document.querySelectorAll('i[class*="fa-"]');
  icons.forEach((icon) => {
    const classes = Array.from(icon.classList);
    const isRegular = classes.includes('fa-regular');
    const isSolid = classes.includes('fa-solid');
    const target = classes.find((cls) => cls.startsWith('fa-') && cls !== 'fa-solid' && cls !== 'fa-regular');
    if (!target) return;
    const canOutline = outlineCompatibleIcons.has(target);
    if (iconFamily === 'outline' && canOutline) {
      if (isSolid) icon.classList.replace('fa-solid', 'fa-regular');
    } else if (isRegular) {
      icon.classList.replace('fa-regular', 'fa-solid');
    }
  });
}

function applyTheme() {
  document.body.dataset.theme = theme;
  document.body.dataset.density = density;
  document.body.dataset.editorLanguage = currentLanguage || 'text';
  document.body.classList.toggle('compact-mode', density === 'compact');
  if (themeSelect) themeSelect.value = theme;
  if (codeViewerSelect) codeViewerSelect.value = codeViewer;
  if (prismThemeSelect) prismThemeSelect.value = prismTheme;
  if (codeMirrorThemeSelect) codeMirrorThemeSelect.value = codeMirrorTheme;
  if (lineNumbersSelect) lineNumbersSelect.value = lineNumbersVisible ? 'on' : 'off';
  if (activeLineSelect) activeLineSelect.value = activeLineVisible ? 'on' : 'off';
  if (activeLineColorSelect) activeLineColorSelect.value = activeLineColor;
  if (helpSelect) helpSelect.value = helpVisible ? 'on' : 'off';
  if (densitySelect) densitySelect.value = density;
  if (hintSelect) hintSelect.value = hintsVisible ? 'on' : 'off';
  if (contrastSelect) contrastSelect.value = highContrast ? 'on' : 'off';
  if (iconSizeSelect) iconSizeSelect.value = iconSize;
  if (uiTextSizeSelect) uiTextSizeSelect.value = uiTextSize;
  if (globalPaddingSelect) globalPaddingSelect.value = globalPadding;
  if (iconFamilySelect) iconFamilySelect.value = iconFamily;
  if (autosaveSelect) autosaveSelect.value = autosaveEnabled ? 'on' : 'off';
  if (topHint) topHint.textContent = hintsVisible ? 'Abre una carpeta para empezar' : '';
  if (document.body) {
    document.body.classList.toggle('theme-vscode', theme === 'vscode');
    document.body.classList.toggle('theme-sublime', theme === 'sublime');
    document.body.classList.toggle('theme-retro', theme === 'retro');
    document.body.dataset.codeMirrorTheme = codeMirrorTheme;
    document.body.dataset.activeLineColor = activeLineColor;
  }
  applyPrismTheme();
  renderUpdatesState();
  updateUpdatesBadge();
  document.querySelector('.panel.left')?.classList.toggle('compact-side', sidebarCompact);
  if (toggleSidebarBtn) toggleSidebarBtn.innerHTML = sidebarCompact ? '<i class="fa-solid fa-expand"></i>' : '<i class="fa-solid fa-compress"></i>';
  document.body.classList.remove('font-small', 'font-medium', 'font-large');
  document.body.classList.add(`font-${editorFontSize}`);
  document.body.classList.toggle('high-contrast', highContrast);
  document.body.classList.toggle('code-wrap-enabled', codeWrapEnabled);
  document.body.dataset.iconSize = iconSize;
  document.body.dataset.uiTextSize = uiTextSize;
  document.body.dataset.appPadding = globalPadding;
  document.body.dataset.iconFamily = iconFamily;
  applyIconFamily();
  applyPluginState();
  updatePluginStateBadge();
  document.body.classList.toggle('show-line-numbers', lineNumbersVisible);
  document.body.classList.toggle('show-active-line', activeLineVisible);
  editorWrap?.classList.toggle('no-line-numbers', !lineNumbersVisible);
  splitWrap?.classList.toggle('no-line-numbers', !lineNumbersVisible);
  lineNumbers?.style.setProperty('display', lineNumbersVisible ? 'block' : 'none');
  splitLineNumbers?.style.setProperty('display', lineNumbersVisible ? 'block' : 'none');
  activeLineOverlay?.style.setProperty('display', activeLineVisible ? 'block' : 'none');
  splitActiveLineOverlay?.style.setProperty('display', activeLineVisible ? 'block' : 'none');
  if (lineNumbersVisible && editor) renderLineNumbers();
  const workspace = document.querySelector('.workspace');
  if (workspace) {
    workspace.classList.remove('columns-2', 'columns-3');
    workspace.classList.add(columnsCount === 2 ? 'columns-2' : 'columns-3');
    workspace.classList.toggle('preview-hidden', columnsCount === 2);
    workspace.classList.toggle('center-hidden', centerHidden);
    workspace.classList.toggle('preview-fit', previewMode === 'fit');
    workspace.classList.toggle('preview-expanded', previewMode === 'expanded');
    const storedPreviewWidth = workspace.style.getPropertyValue('--preview-width') || '0.95fr';
    workspace.style.setProperty('--preview-width', storedPreviewWidth.trim());
  }
  if (toggleCenterBtn) {
    toggleCenterBtn.innerHTML = centerHidden ? '<i class="fa-solid fa-code"></i>' : '<i class="fa-solid fa-code"></i>';
    toggleCenterBtn.title = centerHidden ? 'Mostrar código' : 'Ocultar código';
    toggleCenterBtn.setAttribute('aria-label', toggleCenterBtn.title);
  }
  if (togglePreviewBtn) {
    togglePreviewBtn.textContent = columnsCount === 2 ? '3' : '2';
    togglePreviewBtn.title = columnsCount === 2 ? 'Cambiar a 3 columnas' : 'Cambiar a 2 columnas';
    togglePreviewBtn.setAttribute('aria-label', togglePreviewBtn.title);
  }
  const previewLabel = columnsCount === 2 ? 'Mostrar vista previa' : 'Ocultar vista previa';
  if (togglePreviewTopBtn) {
    togglePreviewTopBtn.title = previewLabel;
    togglePreviewTopBtn.setAttribute('aria-label', previewLabel);
    togglePreviewTopBtn.innerHTML = columnsCount === 2
      ? '<i class="fa-solid fa-eye"></i>'
      : '<i class="fa-solid fa-eye-slash"></i>';
  }
  if (togglePreviewCenterBtn) {
    togglePreviewCenterBtn.title = previewLabel;
    togglePreviewCenterBtn.setAttribute('aria-label', previewLabel);
    togglePreviewCenterBtn.innerHTML = columnsCount === 2
      ? '<i class="fa-solid fa-eye"></i>'
      : '<i class="fa-solid fa-eye-slash"></i>';
  }
  updateLayoutMode();
  updateCodeWrapButton();
}

function updateCodeWrapButton() {
  if (!wrapCodeBtn) return;
  wrapCodeBtn.classList.toggle('active', codeWrapEnabled);
  wrapCodeBtn.innerHTML = codeWrapEnabled
    ? '<i class="fa-solid fa-align-left"></i>'
    : '<i class="fa-solid fa-align-justify"></i>';
  updateWrapButtonLabel();
}

function togglePreviewColumns() {
  setColumnsCount(columnsCount === 2 ? 3 : 2);
  if (columnsCount === 2) centerHidden = false;
  applyTheme();
  applyPreviewVisibility();
}

function syncEditorScrollState() {
  const wrapActive = codeWrapEnabled;
  const scrollLeft = wrapActive ? 0 : editor.scrollLeft;
  lineNumbers.scrollTop = editor.scrollTop;
  highlightLayer.scrollTop = editor.scrollTop;
  lineNumbers.scrollLeft = wrapActive ? 0 : scrollLeft;
  highlightLayer.scrollLeft = wrapActive ? 0 : scrollLeft;
}

function getCaretCoordinates(textarea, position) {
  if (!textarea) return { top: 0, left: 0, height: 0 };
  try {
    const style = window.getComputedStyle(textarea);
    const mirror = document.createElement('div');
    const span = document.createElement('span');
    const value = String(textarea.value || '');
    const text = value.slice(0, Math.max(0, position));
    const tail = value.slice(Math.max(0, position));
    const whiteSpace = style.whiteSpace === 'pre-wrap' ? 'pre-wrap' : 'pre';
    mirror.style.position = 'absolute';
    mirror.style.visibility = 'hidden';
    mirror.style.pointerEvents = 'none';
    mirror.style.whiteSpace = whiteSpace;
    mirror.style.overflow = 'hidden';
    mirror.style.left = '-99999px';
    mirror.style.top = '0';
    mirror.style.boxSizing = 'border-box';
    mirror.style.width = `${textarea.clientWidth}px`;
    mirror.style.height = 'auto';
    mirror.style.fontFamily = style.fontFamily;
    mirror.style.fontSize = style.fontSize;
    mirror.style.fontWeight = style.fontWeight;
    mirror.style.lineHeight = style.lineHeight;
    mirror.style.letterSpacing = style.letterSpacing;
    mirror.style.wordSpacing = style.wordSpacing;
    mirror.style.textTransform = style.textTransform;
    mirror.style.padding = style.padding;
    mirror.style.border = '0';
    mirror.style.tabSize = style.tabSize;
    mirror.style.MozTabSize = style.MozTabSize;
    mirror.style.boxShadow = 'none';
    mirror.style.whiteSpace = whiteSpace;
    mirror.textContent = text;
    span.textContent = tail.length ? tail[0] : '\u200b';
    mirror.appendChild(span);
    document.body.appendChild(mirror);
    const rect = span.getBoundingClientRect();
    const mirrorRect = mirror.getBoundingClientRect();
    const result = {
      top: rect.top - mirrorRect.top,
      left: rect.left - mirrorRect.left,
      height: rect.height || parseFloat(style.lineHeight) || 22,
    };
    mirror.remove();
    return result;
  } catch {
    return { top: 0, left: 0, height: 22 };
  }
}

function updateActiveLineIndicator(sourceEditor = editor, sourceLineNumbers = lineNumbers, sourceHighlightLayer = highlightLayer, sourceOverlay = activeLineOverlay, sourceSplitLineNumbers = splitLineNumbers, sourceSplitHighlightLayer = splitHighlightLayer, sourceSplitOverlay = splitActiveLineOverlay) {
  if (!sourceEditor || !sourceEditor.nodeType) return;
  const value = String(sourceEditor.value || '');
  const caret = typeof sourceEditor.selectionStart === 'number' ? sourceEditor.selectionStart : 0;
  currentLineIndex = value.slice(0, caret).split('\n').length || 1;
  const columnIndex = caret - value.lastIndexOf('\n', Math.max(0, caret - 1)) - 1 || 1;
  const editorStyle = getComputedStyle(sourceEditor);
  // Wrap mode must keep the caret, highlight layer, and textarea on the same box.
  // If this drift comes back, check padding/line-height first before changing the overlay math.
  const caretPos = getCaretCoordinates(sourceEditor, caret);
  const lineHeight = parseFloat(editorStyle.lineHeight) || caretPos.height || 22;
  const paddingTop = parseFloat(editorStyle.paddingTop) || 0;
  const top = Math.max(0, caretPos.top);
  const height = Math.max(2, Math.round(caretPos.height || lineHeight));
  if (sourceLineNumbers) {
    sourceLineNumbers.classList.remove('hidden');
    sourceLineNumbers.style.backgroundImage = '';
    sourceLineNumbers.style.backgroundRepeat = '';
    sourceLineNumbers.style.backgroundPosition = '';
    sourceLineNumbers.style.backgroundSize = '';
  }
  if (sourceSplitLineNumbers) {
    sourceSplitLineNumbers.classList.remove('hidden');
    sourceSplitLineNumbers.style.backgroundImage = '';
    sourceSplitLineNumbers.style.backgroundRepeat = '';
    sourceSplitLineNumbers.style.backgroundPosition = '';
    sourceSplitLineNumbers.style.backgroundSize = '';
  }
  sourceEditor.style.setProperty('--active-line-index', String(currentLineIndex));
  sourceEditor.style.setProperty('--active-line-top', `${top}px`);
  sourceEditor.style.setProperty('--active-line-height', `${height}px`);
  if (sourceOverlay) {
    sourceOverlay.classList.remove('hidden');
    sourceOverlay.style.setProperty('--active-line-top', `${top}px`);
    sourceOverlay.style.setProperty('--active-line-height', `${height}px`);
  }
  if (sourceSplitOverlay) {
    sourceSplitOverlay.classList.remove('hidden');
    sourceSplitOverlay.style.setProperty('--active-line-top', `${top}px`);
    sourceSplitOverlay.style.setProperty('--active-line-height', `${height}px`);
  }
  sourceEditor.dataset.activeLine = String(currentLineIndex);
  if (sourceHighlightLayer) sourceHighlightLayer.dataset.activeLine = String(currentLineIndex);
  sourceEditor.dataset.cursorLine = String(currentLineIndex);
  sourceEditor.dataset.cursorColumn = String(columnIndex);
  currentSymbol = currentFile ? detectCurrentSymbol(value, currentLineIndex, currentLanguage) : null;
  updateEditorMeta();
  updateBreadcrumbActionState();
}

function scheduleScrollSync() {
  if (scrollSyncFrame) return;
  scrollSyncFrame = requestAnimationFrame(() => {
    scrollSyncFrame = null;
    syncEditorScrollState();
    updateActiveLineIndicator();
    updateBracketMatch();
  });
}

function refreshEditorAfterResize(reason = 'resize') {
  // When the column width changes, the wrapped text can reflow.
  // Force a fresh paint so the caret, active line and line numbers stay aligned.
  syncEditorScrollState();
  renderLineNumbers();
  syncHighlight();
  updateActiveLineIndicator();
  updateBracketMatch();
  if (currentFile) {
    logConsole(`editor refresh after ${reason}: path=${currentFile}`);
  }
}

function applyTreeMode() {
  treeLocalTab?.classList.toggle('active', treeMode === 'local');
  treeServerTab?.classList.toggle('active', treeMode === 'remote');
  treeView?.classList.toggle('hidden', treeMode !== 'local');
  document.getElementById('serverTreeView')?.classList.toggle('hidden', treeMode !== 'remote');
  if (treeMode === 'remote') {
    setTreeStatus(sshStatus === 'connected' ? 'Servidor conectado' : 'Servidor');
  } else {
    setTreeStatus(currentRoot ? 'Listo' : 'Sin carpeta');
  }
}

function resetCodeSearch() {
  codeSearchMatches = [];
  codeSearchIndex = -1;
}

async function renderActiveTree() {
  await renderTree(treeMode);
}

function getTreeRootPath(mode = treeMode) {
  if (mode === 'remote') return remoteTreeState?.path || '.';
  return treeState?.path || currentRoot || '';
}

function getTreeRelativeDirs(rootPath, targetPath) {
  if (!rootPath || !targetPath) return [];
  const root = String(rootPath);
  const target = String(targetPath);
  const rel = root === target ? '' : pathLikeRelative(root, target);
  if (!rel || rel.startsWith('..')) return [];
  const parts = rel.split(/[\\/]/).filter(Boolean);
  const dirs = [];
  let acc = root;
  for (let i = 0; i < parts.length - 1; i += 1) {
    acc = joinPathLike(acc, parts[i]);
    dirs.push(acc);
  }
  return dirs;
}

function joinPathLike(base, segment) {
  const sep = pathSepFor(base);
  if (!base) return segment;
  if (base.endsWith('/') || base.endsWith('\\')) return `${base}${segment}`;
  return `${base}${sep}${segment}`;
}

function pathSepFor(rootPath) {
  return String(rootPath || '').includes('\\') ? '\\' : '/';
}

function pathLikeRelative(rootPath, targetPath) {
  const root = String(rootPath || '');
  const target = String(targetPath || '');
  if (!root || !target) return '';
  const rootParts = root.split(/[\\/]/).filter(Boolean);
  const targetParts = target.split(/[\\/]/).filter(Boolean);
  let i = 0;
  while (i < rootParts.length && i < targetParts.length && rootParts[i] === targetParts[i]) i += 1;
  return [...targetParts.slice(i)].join('/');
}

async function expandTreeToPath(mode, targetPath) {
  const store = getTreeStore(mode);
  const rootPath = getTreeRootPath(mode);
  const dirs = getTreeRelativeDirs(rootPath, targetPath);
  if (rootPath) store.collapsed.delete(rootPath);
  let current = rootPath;
  for (const dir of dirs) {
    store.collapsed.delete(dir);
    await loadDirChildren(dir, mode);
    current = dir;
  }
  if (current) {
    await loadDirChildren(current, mode);
  }
}

function formatMoney(value, digits = 2) {
  const number = Number(value);
  if (!Number.isFinite(number)) return '--';
  return new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(number);
}

function setRadarStatus(text) {
  if (radarStatus) radarStatus.textContent = text;
}

function updateRadarClock() {
  if (!radarClock) return;
  radarClock.textContent = new Intl.DateTimeFormat('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date());
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function applyRadarPayload(payload = {}) {
  const locationText = payload.city ? `${payload.city}${payload.region ? `, ${payload.region}` : ''}${payload.country ? ` · ${payload.country}` : ''}` : 'Ciudad no detectada';
  if (radarCity) radarCity.textContent = locationText;
  if (radarWeatherTemp) radarWeatherTemp.textContent = payload.temperature != null ? `${Math.round(payload.temperature)}°C` : '--°';
  if (radarWeatherDesc) radarWeatherDesc.textContent = payload.weatherText || 'Clima no disponible';
  if (radarFxValue) radarFxValue.textContent = payload.usdMxn != null ? formatMoney(payload.usdMxn, 2) : '--';
  if (radarBtcValue) radarBtcValue.textContent = payload.btcUsd != null ? `$${formatMoney(payload.btcUsd, 0)}` : '--';
  if (radarUsdcValue) radarUsdcValue.textContent = payload.usdcUsd != null ? `$${formatMoney(payload.usdcUsd, 4)}` : '--';
}

async function loadRadarData() {
  if (!radarPanel) return;
  setRadarStatus('Actualizando');
  updateRadarClock();
  try {
    const [geo, fx, crypto] = await Promise.all([
      fetchJson('https://ipapi.co/json/'),
      fetchJson('https://open.er-api.com/v6/latest/USD'),
      fetchJson('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,usd-coin&vs_currencies=usd'),
    ]);
    const latitude = Number(geo.latitude);
    const longitude = Number(geo.longitude);
    let weatherText = 'Clima no disponible';
    let temperature = null;
    if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
      const weather = await fetchJson(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`);
      temperature = weather?.current?.temperature_2m ?? null;
      const code = Number(weather?.current?.weather_code);
      weatherText = ({
        0: 'Cielo despejado',
        1: 'Mayormente despejado',
        2: 'Parcialmente nublado',
        3: 'Nublado',
        45: 'Neblina',
        48: 'Neblina',
        51: 'Llovizna leve',
        61: 'Lluvia ligera',
        71: 'Nieve ligera',
        80: 'Chubascos',
        95: 'Tormenta',
      }[code]) || 'Clima actualizado';
    }
    applyRadarPayload({
      city: geo.city,
      region: geo.region,
      country: geo.country_name || geo.country,
      temperature,
      weatherText,
      usdMxn: fx?.rates?.MXN,
      btcUsd: crypto?.bitcoin?.usd,
      usdcUsd: crypto?.['usd-coin']?.usd,
    });
    setRadarStatus('En vivo');
  } catch {
    if (radarCity) radarCity.textContent = 'Radar sin conexión';
    setRadarStatus('Offline');
  }
}

function esc(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function shortName(filePath = '') {
  return String(filePath || '').split(/[\\/]/).pop() || 'Editor';
}

function inferRootFromPaths(paths = [], activePath = '') {
  const cleaned = [...new Set(paths.map((p) => String(p || '').trim()).filter(Boolean))];
  const sample = String(activePath || cleaned[0] || '').trim();
  if (!sample) return null;
  const sampleParts = sample.split(/[\\/]/).filter(Boolean);
  if (!sampleParts.length) return null;
  const activeDir = sampleParts.slice(0, -1);
  if (!cleaned.length) {
    return activeDir.length ? `${sample.startsWith('/') ? '/' : ''}${activeDir.join('/')}` : null;
  }
  const pathSegments = cleaned.map((item) => String(item).split(/[\\/]/).filter(Boolean));
  let prefix = [...pathSegments[0]];
  for (const segments of pathSegments.slice(1)) {
    let i = 0;
    while (i < prefix.length && i < segments.length && prefix[i] === segments[i]) i += 1;
    prefix = prefix.slice(0, i);
  }
  if (prefix.length >= 2) {
    return `${sample.startsWith('/') ? '/' : ''}${prefix.join('/')}`;
  }
  return activeDir.length ? `${sample.startsWith('/') ? '/' : ''}${activeDir.join('/')}` : null;
}

function ensureEditorPreviewOpen() {
  columnsCount = 3;
  previewVisible = true;
  centerHidden = false;
  previewMode = 'normal';
  rightViewMode = 'web';
  updateRightViewModeButtons();
  applyTheme();
  applyPreviewVisibility();
}

function detectLanguageFromContent(content = '', filePath = '', trace = false) {
  const extLanguage = getLanguage(filePath);
  if (extLanguage !== 'text') return extLanguage;
  const sample = String(content || '').slice(0, 4000);
  if (trace) logConsole(`language inspect path=${filePath || '-'} ext=${extLanguage} sample=${sample.length}`);
  if (/\<\?php/i.test(sample) || /\b(namespace|use|function|echo|print_r|var_dump)\b/i.test(sample) || /\$_(GET|POST|SERVER|SESSION|COOKIE)|->|\$\w+/i.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=php reason=php-signals`);
    return 'php';
  }
  const htmlSignals = [
    /<\!doctype\s+html/i,
    /<html[\s>]/i,
    /<head[\s>]/i,
    /<body[\s>]/i,
    /<script[\s>]/i,
    /<style[\s>]/i,
    /<\/?[a-zA-Z][\w:-]*(?:\s+[\w:-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*>/i,
    /&lt;\/?[a-zA-Z][\w:-]*/i,
  ];
  if (htmlSignals.filter((re) => re.test(sample)).length >= 1) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=html reason=html-signals`);
    return 'html';
  }
  if (/^\s*\{[\s\S]*\}\s*$/m.test(sample) && /"[^"]+"\s*:/.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=json reason=json-signals`);
    return 'json';
  }
  if (/@media|@keyframes|@supports|:[^;\n{}]+;|#[\w-]+\s*\{|\.[\w-]+\s*\{|--[\w-]+\s*:/.test(sample) && /[a-z-]+\s*:\s*[^;]+;/.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=css reason=css-signals`);
    return 'css';
  }
  if (/\b(function|const|let|var|class|import|export|return|async|await|console\.|document\.|window\.|fetch\(|setTimeout|setInterval)\b/.test(sample) || /=>/.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=js reason=js-signals`);
    return 'js';
  }
  if (/^\s*<\?xml|<\/[a-zA-Z][\w:-]*>|<\w+[\s>]/.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=xml reason=xml-signals`);
    return 'xml';
  }
  if (/^#\s+\S+/m.test(sample) || /\*\*[^*]+\*\*/.test(sample) || /`[^`]+`/.test(sample)) {
    if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=md reason=md-signals`);
    return 'md';
  }
  if (trace) logConsole(`language inspect result path=${filePath || '-'} detected=text reason=no-signals`);
  return 'text';
}

function normalizeLanguage(filePath, language, content = '', trace = true) {
  const lang = String(language || '').toLowerCase();
  if (lang && lang !== 'text') {
    const normalized = ({ javascript: 'js', jsx: 'js', ts: 'js', tsx: 'js', htm: 'html', xhtml: 'html' }[lang]) || lang;
    if (trace) logConsole(`language normalize path=${filePath || '-'} input=${lang || '-'} ext=${getLanguage(filePath)} content=${String(content || '').length} detected=- final=${normalized}`);
    return normalized;
  }
  const extLanguage = getLanguage(filePath);
  if (extLanguage !== 'text') {
    if (trace) logConsole(`language normalize path=${filePath || '-'} input=${lang || '-'} ext=${extLanguage} content=${String(content || '').length} detected=- final=${extLanguage}`);
    return extLanguage;
  }
  const detectedFromContent = detectLanguageFromContent(content, filePath, trace);
  if (detectedFromContent !== 'text') {
    if (trace) logConsole(`language normalize path=${filePath || '-'} input=${lang || '-'} ext=${extLanguage} content=${String(content || '').length} detected=${detectedFromContent} final=${detectedFromContent}`);
    return detectedFromContent;
  }
  if (trace) logConsole(`language normalize path=${filePath || '-'} input=${lang || '-'} ext=${extLanguage} content=${String(content || '').length} detected=text final=${extLanguage}`);
  return extLanguage;
}

function getRemoteRootValue() {
  return String(sshRemoteRootInput?.value || sshRemoteRoot || '/var/www/html').trim() || '/var/www/html';
}

function languageLabel(language = 'text') {
  return ({ html: 'HTML', css: 'CSS', js: 'JS', php: 'PHP', json: 'JSON', md: 'MD', xml: 'XML', text: 'Texto' }[language]) || String(language || 'Texto').toUpperCase();
}

function escapeHtml(text) {
  return esc(text).replace(/\n/g, '\n');
}

function getLanguage(filePath = '') {
  const clean = String(filePath || '').split('#')[0].split('?')[0];
  const ext = clean.includes('.') ? clean.split('.').pop().toLowerCase() : '';
  return ({
    html: 'html',
    htm: 'html',
    xhtml: 'html',
    css: 'css',
    js: 'js',
    mjs: 'js',
    cjs: 'js',
    jsx: 'js',
    ts: 'js',
    tsx: 'js',
    json: 'json',
    md: 'md',
    markdown: 'md',
    xml: 'xml',
    svg: 'xml',
    php: 'php',
    phtml: 'php',
    twig: 'html',
    vue: 'html',
    svelte: 'html',
    yml: 'yaml',
    yaml: 'yaml',
    py: 'py',
    sh: 'bash',
    bash: 'bash',
    sql: 'sql',
    txt: 'text',
  }[ext]) || 'text';
}

function monacoLanguageId(language = 'text') {
  return ({
    html: 'html',
    css: 'css',
    js: 'javascript',
    php: 'php',
    json: 'json',
    md: 'markdown',
    xml: 'xml',
    yaml: 'yaml',
    py: 'python',
    bash: 'shell',
    sql: 'sql',
    text: 'plaintext',
  }[String(language || 'text').toLowerCase()]) || 'plaintext';
}

function codeMirrorModeName(language = 'text') {
  return ({
    html: 'htmlmixed',
    css: 'css',
    js: 'javascript',
    php: 'php',
    json: 'javascript',
    md: 'markdown',
    xml: 'xml',
    yaml: 'yaml',
    py: 'python',
    bash: 'shell',
    sql: 'sql',
  }[String(language || 'text').toLowerCase()]) || 'null';
}

async function ensureMonacoLoaded() {
  if (monaco) return monaco;
  if (monacoLoaderReady) return null;
  monacoLoaderReady = true;
  const base = window.__RTK_MONACO_BASE__ || './vendor/monaco';
  await new Promise((resolve, reject) => {
    try {
      const start = () => {
        if (!window.require?.config) {
          reject(new Error('monaco_loader_missing'));
          return;
        }
        window.require.config({
          paths: { vs: `${base}/vs` },
        });
        window.require(['vs/editor/editor.main'], () => {
          monaco = window.monaco || null;
          resolve();
        });
      };
      if (window.require?.config) {
        start();
        return;
      }
      const script = document.createElement('script');
      script.src = `${base}/vs/loader.js`;
      script.onload = () => start();
      script.onerror = () => reject(new Error('monaco_loader_script_failed'));
      document.head.appendChild(script);
    } catch (error) {
      reject(error);
    }
  }).catch((error) => {
    logConsole(`monaco load error ${error?.message || 'unknown'}`);
    monaco = null;
  });
  return monaco;
}

async function ensureCodeMirrorLoaded() {
  if (codeMirror || window.CodeMirror) {
    codeMirror = window.CodeMirror || codeMirror;
    return codeMirror;
  }
  return null;
}

async function ensurePrismLoaded() {
  if (prism || window.Prism) {
    prism = window.Prism || prism;
    return prism;
  }
  return null;
}

function codeMirrorThemeClass() {
  if (codeMirrorTheme === 'material') return 'cm-s-material';
  if (codeMirrorTheme === 'github') return 'cm-s-github';
  return 'cm-s-eclipse';
}

function prismLanguageName(language = 'text') {
  return ({
    html: 'markup',
    xml: 'markup',
    js: 'javascript',
    css: 'css',
    php: 'php',
    json: 'json',
    md: 'markdown',
    yaml: 'yaml',
    py: 'python',
    bash: 'bash',
    sql: 'sql',
}[String(language || 'text').toLowerCase()]) || 'none';
}

function prismThemeHref(theme = 'sublime') {
  const map = {
    sublime: './vendor/prism-solarizedlight.min.css',
    githublight: './vendor/prism-githublight.min.css',
    lightplus: './vendor/prism-lightplus.min.css',
    alabaster: './vendor/prism-alabaster.min.css',
    nordlight: './vendor/prism-nordlight.min.css',
    twilight: './vendor/prism-twilight.min.css',
    okaidia: './vendor/prism-okaidia.min.css',
    tomorrow: './vendor/prism-tomorrow.min.css',
    funky: './vendor/prism-funky.min.css',
    solarizedlight: './vendor/prism-solarizedlight.min.css',
  };
  return map[theme] || map.sublime;
}

function applyPrismTheme() {
  const link = document.getElementById('prismThemeLink');
  if (link) link.href = prismThemeHref(prismTheme);
}

function setLeftDropState(active, label = '') {
  leftPanel?.classList.toggle('drag-over', active);
  if (active) {
    setTreeStatus(label || 'Suelta carpetas o archivos aquí');
  } else {
    applyTreeMode();
  }
}

function getDropTargetDirectory(eventTarget) {
  const node = eventTarget?.closest?.('.node[data-type="directory"]');
  if (node?.dataset?.path) return node.dataset.path;
  return '';
}

function getDroppedLocalPaths(event) {
  const files = Array.from(event?.dataTransfer?.files || []);
  return files.map((file) => String(file?.path || '').trim()).filter(Boolean);
}

function getRemoteDropTargetDirectory(eventTarget) {
  const node = eventTarget?.closest?.('.node[data-type="directory"]');
  if (node?.dataset?.path) return node.dataset.path;
  return remoteTreeState?.path || getRemoteRootValue() || '';
}

async function openDroppedRoot(rootPath) {
  const resolvedRoot = String(rootPath || '').trim();
  if (!resolvedRoot) return;
  currentRoot = resolvedRoot;
  treeState = { name: resolvedRoot.split(/[\\/]/).pop(), path: resolvedRoot, type: 'directory' };
  treeMode = 'local';
  collapsed.clear();
  loadedDirs.clear();
  treeChildren.clear();
  if (treeState?.path) collapsed.delete(treeState.path);
  applyTreeMode();
  scheduleTreeRender();
  renderRecentPanels();
  writeLocalState({ lastRootPath: currentRoot || '' });
  await persistState();
  logConsole(`drop root loaded path=${currentRoot}`);
}

async function handleLeftDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  leftDropDepth = 0;
  setLeftDropState(false);
  if (treeMode !== 'local') {
    pushToast('warn', 'Arrastrar y soltar', 'Usa la vista Local para importar carpetas o archivos.');
    return;
  }
  const sourcePaths = getDroppedLocalPaths(event);
  if (!sourcePaths.length) {
    logConsole('drop ignored: no local paths received');
    return;
  }
  const inspected = await window.ideRtk.inspectPaths?.({ paths: sourcePaths }) || { ok: false, items: [] };
  const firstItem = Array.isArray(inspected.items) ? inspected.items[0] : null;
  const targetNodeDir = getDropTargetDirectory(event.target);
  const targetDir = targetNodeDir || ((firstItem?.isFile || !firstItem?.isDirectory) ? (currentRoot || treeState?.path || '') : '');
  logConsole(`drop start target=${targetDir || '-'} sources=${sourcePaths.length} first=${firstItem?.isDirectory ? 'dir' : firstItem?.isFile ? 'file' : 'unknown'}`);
  const result = await window.ideRtk.importPaths({
    targetDir,
    sourcePaths,
  });
  logConsole(`drop result ok=${Boolean(result?.ok)} openRoot=${result?.openRootPath || '-'} imported=${result?.imported?.length || 0} skipped=${result?.skipped?.length || 0}`);
  if (!result?.ok) {
    pushToast('error', 'Arrastrar y soltar', result?.error || 'No se pudo procesar la selección.');
    return;
  }
  if (result.openRootPath) {
    await openDroppedRoot(result.openRootPath);
    return;
  }
  if (result.imported?.length) {
    scheduleTreeRender();
    if (currentFile) {
      queueHighlightRepaint('drop-import');
    }
  }
}

async function handleRemoteDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  if (treeMode !== 'remote') return;
  const sourcePaths = getDroppedLocalPaths(event);
  if (!sourcePaths.length) {
    logConsole('remote drop ignored: no local paths received');
    return;
  }
  const targetDir = getRemoteDropTargetDirectory(event.target);
  if (!targetDir) {
    pushToast('warn', 'Servidor', 'No hay carpeta remota destino.');
    return;
  }
  const inspected = await window.ideRtk.inspectPaths?.({ paths: sourcePaths }) || { ok: false, items: [] };
  const firstItem = Array.isArray(inspected.items) ? inspected.items[0] : null;
  logConsole(`remote drop start target=${targetDir || '-'} sources=${sourcePaths.length} first=${firstItem?.isDirectory ? 'dir' : firstItem?.isFile ? 'file' : 'unknown'}`);
  const result = await window.ideRtk.sshUploadPaths?.({
    ...(getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {}),
    remoteDir: targetDir,
    sourcePaths,
  });
  logConsole(`remote drop result ok=${Boolean(result?.ok)} uploaded=${result?.uploaded?.length || 0} skipped=${result?.skipped?.length || 0}`);
  if (!result?.ok) {
    pushToast('error', 'Servidor', result?.error || 'No se pudo subir la selección.');
    return;
  }
  if (result.uploaded?.length) {
    await renderTree('remote');
    await refreshCurrentTree();
    pushToast('success', 'Servidor', `Subido ${result.uploaded.length} elemento(s) a ${shortName(targetDir)}.`);
  }
  if (result.skipped?.length) {
    logConsole(`remote drop skipped=${result.skipped.map((item) => `${item.path}:${item.reason}`).join(', ')}`);
  }
}

function highlightCode(source, language = 'text') {
  const rawSource = String(source || '');
  const mappedLanguage = ({ js: 'javascript', html: 'xml', xml: 'xml', css: 'css', php: 'php', json: 'json', md: 'markdown' }[language]) || language;
  if (hljs && mappedLanguage && typeof hljs.getLanguage === 'function' && hljs.getLanguage(mappedLanguage)) {
    try {
      const result = hljs.highlight(rawSource, { language: mappedLanguage, ignoreIllegals: true });
      logConsole(`highlight engine=hljs lang=${language || 'text'} len=${rawSource.length}`);
      return result.value;
    } catch (error) {
      logConsole(`highlight engine=hljs fallback lang=${language || 'text'} error=${error?.message || 'unknown'}`);
    }
  }
  logConsole(`highlight engine=manual lang=${language || 'text'} len=${rawSource.length}`);
  const text = escapeHtml(rawSource);
  const patterns = {
    js: [
      [/\/\*[\s\S]*?\*\//g, 'tok-comment'],
      [/\/\/.*$/gm, 'tok-comment'],
      [/(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;)/g, 'tok-string'],
      [/\b(const|let|var|function|return|if|else|for|while|class|new|async|await|try|catch|throw|import|from|export|default|switch|case|break|continue|typeof|instanceof|this)\b/g, 'tok-keyword'],
      [/\b(console|document|window|Array|Object|String|Number|Boolean|Date|Promise|Math|JSON|setTimeout|setInterval|clearTimeout|clearInterval)\b/g, 'tok-builtin'],
      [/\b\d+(\.\d+)?\b/g, 'tok-number'],
    ],
    css: [
      [/\/\*[\s\S]*?\*\//g, 'tok-comment'],
      [/(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;)/g, 'tok-string'],
      [/#[0-9a-fA-F]{3,8}\b/g, 'tok-number'],
      [/\b(display|flex|grid|block|inline|inline-block|absolute|relative|fixed|sticky|color|background|padding|margin|border|width|height|position|top|left|right|bottom|overflow|font-size|font-weight|justify-content|align-items|gap|border-radius)\b/g, 'tok-keyword'],
      [/\b(auto|none|solid|dashed|relative|absolute|fixed|sticky|center|cover|contain|hidden|visible|bold|normal|pointer)\b/g, 'tok-builtin'],
      [/\b\d+(\.\d+)?(px|rem|em|vh|vw|%)\b/g, 'tok-number'],
    ],
    html: [
      [/&lt;!--[\s\S]*?--&gt;/g, 'tok-comment'],
      [/(?:&lt;\/?)[a-zA-Z0-9:-]+/g, 'tok-tag'],
      [/\s[a-zA-Z0-9:-]+(?==)/g, 'tok-attr'],
      [/(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;)/g, 'tok-string'],
      [/&lt;!DOCTYPE[^&]*&gt;/gi, 'tok-keyword'],
      [/(&lt;|&gt;|\/|=)/g, 'tok-punc'],
    ],
    json: [
      [/&quot;([^&]|\n)*?&quot;(?=\s*:)/g, 'tok-keyword'],
      [/&quot;([^&]|\n)*?&quot;/g, 'tok-string'],
      [/\b(true|false|null)\b/g, 'tok-keyword'],
      [/\b\d+(\.\d+)?\b/g, 'tok-number'],
    ],
    php: [
      [/&lt;\?php|\?&gt;/g, 'tok-keyword'],
      [/\/\/.*$/gm, 'tok-comment'],
      [/\/\*[\s\S]*?\*\//g, 'tok-comment'],
      [/(&quot;[\s\S]*?&quot;|&#39;[\s\S]*?&#39;)/g, 'tok-string'],
      [/\$(\w+)/g, 'tok-attr'],
      [/\b(echo|function|return|if|else|elseif|foreach|for|while|class|public|private|protected|static|new|array|use|namespace|try|catch|throw|switch|case|break|continue|extends|implements)\b/g, 'tok-keyword'],
      [/\b(true|false|null)\b/g, 'tok-builtin'],
      [/\b\d+(\.\d+)?\b/g, 'tok-number'],
      [/([{}()\[\];,:.?]+)/g, '<span class="tok-punc">$1</span>'],
    ],
    md: [
      [/^#{1,6}\s.*$/gm, 'tok-keyword'],
      [/\*\*([^*]+)\*\*/g, 'tok-string'],
      [/`([^`]+)`/g, 'tok-code'],
    ],
  };
  const rules = patterns[language] || [];
  let output = text;
  for (const [regex, cls] of rules) {
    output = output.replace(regex, (match) => `<span class="${cls}">${match}</span>`);
  }
  return output;
}

function indentBlockLines(source, depth = 1) {
  const pad = '  '.repeat(Math.max(0, depth));
  return String(source || '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => (line ? `${pad}${line}` : line))
    .join('\n');
}

function formatBraceLanguage(source) {
  const text = String(source || '').replace(/\r\n?/g, '\n');
  let out = '';
  let indent = 0;
  let atLineStart = true;
  let mode = 'code';
  let escape = false;
  let quote = '';
  const writeIndent = () => {
    if (!atLineStart) return;
    out += '  '.repeat(Math.max(0, indent));
    atLineStart = false;
  };
  const newline = () => {
    if (!out.endsWith('\n')) out += '\n';
    atLineStart = true;
  };
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (mode === 'line-comment') {
      writeIndent();
      out += ch;
      if (ch === '\n') {
        mode = 'code';
        atLineStart = true;
      }
      continue;
    }
    if (mode === 'block-comment') {
      writeIndent();
      out += ch;
      if (ch === '*' && next === '/') {
        out += next;
        i += 1;
        mode = 'code';
      }
      if (ch === '\n') atLineStart = true;
      continue;
    }
    if (mode === 'string') {
      writeIndent();
      out += ch;
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === '\\') {
        escape = true;
        continue;
      }
      if (ch === quote) {
        mode = 'code';
      }
      if (ch === '\n') atLineStart = true;
      continue;
    }
    if (ch === '/' && next === '/') {
      writeIndent();
      out += '//';
      i += 1;
      mode = 'line-comment';
      continue;
    }
    if (ch === '/' && next === '*') {
      writeIndent();
      out += '/*';
      i += 1;
      mode = 'block-comment';
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      writeIndent();
      out += ch;
      mode = 'string';
      quote = ch;
      escape = false;
      continue;
    }
    if (ch === '{') {
      writeIndent();
      out += '{';
      newline();
      indent += 1;
      continue;
    }
    if (ch === '}') {
      indent = Math.max(0, indent - 1);
      newline();
      writeIndent();
      out += '}';
      newline();
      continue;
    }
    if (ch === ';') {
      writeIndent();
      out += ';';
      newline();
      continue;
    }
    if (ch === '\n') {
      newline();
      continue;
    }
    if (atLineStart && /\s/.test(ch)) continue;
    writeIndent();
    out += ch;
  }
  return `${out.replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

function formatHtmlLike(source) {
  const text = String(source || '').replace(/\r\n?/g, '\n').replace(/>\s+</g, '>\n<');
  const lines = text.split('\n');
  const out = [];
  let indent = 0;
  const selfClosing = /^(?:<(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b[^>]*>|\s*<[^>]+\/>\s*)$/i;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      out.push('');
      continue;
    }
    const lower = line.toLowerCase();
    const startsWithClose = /^<\/[a-z]/i.test(line) || /^<\/[\w:-]+/i.test(line) || /^<\/\s*script/i.test(line) || /^<\/\s*style/i.test(line);
    if (startsWithClose) indent = Math.max(0, indent - 1);
    out.push(`${'  '.repeat(indent)}${line}`);
    const isOpenTag = /^<(?!(?:\/|!|\?))/i.test(line) && !selfClosing.test(line);
    const isBlockStarter = /^<(script|style|div|section|article|main|aside|header|footer|nav|ul|ol|li|table|thead|tbody|tfoot|tr|td|th|form|fieldset|label|select|option|textarea|button|pre|code|span|p|html|head|body|template)\b/i.test(line);
    const isVoidOrMeta = /^(?:<(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b[^>]*>|\s*<!doctype\b|\s*<!--)/i.test(line);
    if ((isOpenTag && isBlockStarter) || /^<script\b/i.test(line) || /^<style\b/i.test(line)) {
      indent += 1;
    } else if (!startsWithClose && !isVoidOrMeta && /^<\?php\b/i.test(line)) {
      indent += 1;
    }
  }
  return `${out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

function formatPhpCode(source) {
  const text = String(source || '').replace(/\r\n?/g, '\n');
  const parts = text.split(/(<\?(?:php)?[\s\S]*?\?>)/ig);
  const formatted = parts.map((part) => {
    if (!/^<\?(?:php)?[\s\S]*\?>$/i.test(part.trim())) {
      return formatHtmlLike(part);
    }
    const openMatch = part.match(/^<\?(php)?/i);
    const closeMatch = part.match(/\?>\s*$/);
    const opener = openMatch?.[0] || '<?php';
    const inner = part
      .replace(/^<\?(?:php)?/i, '')
      .replace(/\?>\s*$/i, '')
      .trim();
    if (!inner) return `${opener}\n?>\n`;
    const body = formatBraceLanguage(inner).trimEnd();
    return `${opener}\n${indentBlockLines(body, 1)}\n?>\n`;
  }).join('');
  return `${formatted.replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

function formatCodeByLanguage(source, language = 'text') {
  const normalized = String(language || 'text').toLowerCase();
  if (normalized === 'html' || normalized === 'xml') return formatHtmlLike(source);
  if (normalized === 'css' || normalized === 'js') return formatBraceLanguage(source);
  if (normalized === 'php') return formatPhpCode(source);
  return String(source || '')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd() + (String(source || '').endsWith('\n') ? '\n' : '');
}

function formatCurrentCode() {
  if (!editor || !currentFile) return;
  const source = String(editor.value || '');
  const detected = normalizeLanguage(currentFile, currentLanguage, source, false) || currentLanguage || 'text';
  const formatted = formatCodeByLanguage(source, detected);
  if (currentFile) updateSyntaxLanguage(currentFile, detected);
  if (!formatted || formatted === source) {
    pushToast('info', 'Formato', 'No se encontraron cambios para aplicar.');
    logConsole(`format code skipped lang=${detected} len=${source.length}`);
    syncHighlight();
    queueHighlightRepaint('format-nochange');
    return;
  }
  const active = openFiles[activeFileIndex];
  editor.value = formatted;
  if (active) {
    active.content = formatted;
    active.dirty = true;
  }
  markDirty(currentFile);
  if (splitFile?.path === currentFile) {
    splitEditor.value = formatted;
    syncSplitHighlight();
  }
  if (plainEditor) plainEditor.textContent = '';
  const caret = Math.min(formatted.length, source.length);
  editor.setSelectionRange(caret, caret);
  logConsole(`format code lang=${detected} before=${source.length} after=${formatted.length}`);
  editor.dispatchEvent(new Event('input', { bubbles: true }));
  queueHighlightRepaint('format');
}

function syncHighlight() {
  const content = editor.value || '';
  let language = currentLanguage || 'text';
  if (language === 'text' && content.trim()) {
    const detected = detectLanguageFromContent(content, currentFile || '', false);
    if (detected && detected !== 'text') {
      language = detected;
      currentLanguage = detected;
      if (languageBadge) languageBadge.textContent = languageLabel(detected);
    }
  }
  document.body.dataset.editorLanguage = language;
  if (highlightLayer) {
    const token = ++monacoColorizeToken;
    const renderCodeMirror = () => {
      const cm = window.CodeMirror || codeMirror;
      if (!cm || !cm.runMode) return false;
      const mode = codeMirrorModeName(language);
      if (mode === 'null') return false;
      const wrap = document.createElement('div');
      wrap.className = `code-block ${codeMirrorThemeClass()} ${language}`;
      cm.runMode(content, mode, wrap);
      const html = wrap.innerHTML || escapeHtml(content);
      highlightLayer.innerHTML = `<code class="code-block ${codeMirrorThemeClass()} ${language}">${html}</code>`;
      logConsole(`highlight render engine=codemirror lang=${language} len=${content.length}`);
      return true;
    };
    const renderPrism = () => {
      const api = window.Prism || prism;
      const lang = prismLanguageName(language);
      if (!api?.languages) return false;
      const grammar = api.languages?.[lang] || api.languages?.markup;
      if (!grammar || !api.highlight) return false;
      const html = api.highlight(content, grammar, lang);
      highlightLayer.innerHTML = `<code class="code-block prism language-${lang}">${html}</code>`;
      logConsole(`highlight render engine=prism lang=${language} len=${content.length}`);
      return true;
    };
    const renderFallback = () => {
      const html = highlightCode(content, language);
      highlightLayer.innerHTML = `<code class="code-block hljs ${language}">${html}</code>`;
      const tokenCount = (html.match(/class=\"tok-/g) || []).length;
      const highlightTraceKey = `${currentFile || '-'}|${language}|${content.length}|${tokenCount}`;
      if (highlightTraceKey !== syncHighlight.lastTraceKey) {
        syncHighlight.lastTraceKey = highlightTraceKey;
        logConsole(`highlight render lang=${language} tokens=${tokenCount} chars=${html.length}`);
      }
    };
    const useMonaco = codeViewer === 'monaco';
    const usePrism = codeViewer === 'prism';
    const useCodeMirror = codeViewer === 'codemirror';
    const useAuto = codeViewer === 'auto';
    if (useMonaco) {
      void ensureMonacoLoaded().then(async (api) => {
        if (!api || token !== monacoColorizeToken) return;
        try {
          const colored = await api.editor.colorize(content, monacoLanguageId(language), {});
          if (token !== monacoColorizeToken) return;
          highlightLayer.innerHTML = `<code class="code-block hljs ${language}">${colored}</code>`;
          logConsole(`highlight render engine=monaco lang=${language} len=${content.length}`);
        } catch (error) {
          logConsole(`highlight engine=monaco fallback lang=${language} error=${error?.message || 'unknown'}`);
          if (token === monacoColorizeToken) renderFallback();
        }
      }).catch(() => {
        if (token === monacoColorizeToken) renderFallback();
      });
    } else if (usePrism && renderPrism()) {
      return;
    } else if (useCodeMirror && renderCodeMirror()) {
      return;
    } else if (useAuto && renderPrism()) {
      return;
    } else if (useAuto && renderCodeMirror()) {
      return;
    } else if (useAuto && window.__RTK_MONACO_BASE__) {
      void ensureMonacoLoaded().then(async (api) => {
        if (!api || token !== monacoColorizeToken) return;
        try {
          const colored = await api.editor.colorize(content, monacoLanguageId(language), {});
          if (token !== monacoColorizeToken) return;
          highlightLayer.innerHTML = `<code class="code-block hljs ${language}">${colored}</code>`;
          logConsole(`highlight render engine=monaco lang=${language} len=${content.length}`);
        } catch {
          if (token === monacoColorizeToken) renderFallback();
        }
      }).catch(() => {
        if (token === monacoColorizeToken) renderFallback();
      });
    } else {
      renderFallback();
    }
  }
  renderLineNumbers();
}
syncHighlight.lastTraceKey = '';

function queueHighlightRepaint(reason = 'unknown') {
  requestAnimationFrame(() => {
    syncHighlight();
    scheduleScrollSync();
    logConsole(`highlight repaint (${reason}) rAF`);
  });
  setTimeout(() => {
    syncHighlight();
    scheduleScrollSync();
    logConsole(`highlight repaint (${reason}) t+120ms`);
  }, 120);
}

let paintRafId = null;

function forceHighlightPaint(reason = 'unknown') {
  if (paintRafId) cancelAnimationFrame(paintRafId);
  paintRafId = requestAnimationFrame(() => {
    paintRafId = null;
    if (highlightPaintInFlight) {
      highlightPaintQueuedReason = reason;
      logConsole(`highlight paint queued (${reason}) batch-active`);
      return;
    }
    highlightPaintInFlight = true;
    if (highlightLayer) highlightLayer.innerHTML = '';
    syncHighlight();
    setTimeout(() => {
      syncHighlight();
      scheduleScrollSync();
      logConsole(`highlight repaint (${reason}) t+320ms`);
      highlightPaintInFlight = false;
      if (highlightPaintQueuedReason) {
        const nextReason = highlightPaintQueuedReason;
        highlightPaintQueuedReason = '';
        forceHighlightPaint(`${nextReason}-queued`);
      }
    }, 320);
  });
}

function syncSplitHighlight() {
  if (!splitHighlightLayer || !splitLineNumbers) return;
  const file = splitFile;
  if (!file) {
    splitHighlightLayer.innerHTML = '';
    splitLineNumbers.textContent = '';
    return;
  }
  const language = file.language || 'text';
  const content = splitEditor.value || '';
  const useMonaco = codeViewer === 'monaco';
  const usePrism = codeViewer === 'prism';
  const useCodeMirror = codeViewer === 'codemirror';
  const useAuto = codeViewer === 'auto';
  if (useMonaco) {
    void ensureMonacoLoaded().then(async (api) => {
      if (!api) return;
      try {
        const colored = await api.editor.colorize(content, monacoLanguageId(language), {});
        splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${colored}</code>`;
      } catch {
        splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
      }
    });
  } else if (usePrism) {
    const api = window.Prism || prism;
    const lang = prismLanguageName(language);
    const grammar = api?.languages?.[lang] || api?.languages?.markup;
    if (grammar && api?.highlight) {
      const html = api.highlight(content, grammar, lang);
      splitHighlightLayer.innerHTML = `<code class="code-block prism language-${lang}">${html}</code>`;
    } else {
      splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
    }
  } else if (useCodeMirror) {
    const cm = window.CodeMirror || codeMirror;
    const mode = codeMirrorModeName(language);
    if (cm?.runMode && mode !== 'null') {
      const wrap = document.createElement('div');
      wrap.className = `code-block ${codeMirrorThemeClass()} ${language}`;
      cm.runMode(content, mode, wrap);
      splitHighlightLayer.innerHTML = `<code class="code-block ${codeMirrorThemeClass()} ${language}">${wrap.innerHTML || escapeHtml(content)}</code>`;
    } else {
      splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
    }
  } else if (useAuto) {
    const api = window.Prism || prism;
    const lang = prismLanguageName(language);
    const grammar = api?.languages?.[lang] || api?.languages?.markup;
    if (grammar && api?.highlight) {
      const html = api.highlight(content, grammar, lang);
      splitHighlightLayer.innerHTML = `<code class="code-block prism language-${lang}">${html}</code>`;
    } else {
      const cm = window.CodeMirror || codeMirror;
      const mode = codeMirrorModeName(language);
      if (cm?.runMode && mode !== 'null') {
        const wrap = document.createElement('div');
        wrap.className = `code-block ${codeMirrorThemeClass()} ${language}`;
        cm.runMode(content, mode, wrap);
        splitHighlightLayer.innerHTML = `<code class="code-block ${codeMirrorThemeClass()} ${language}">${wrap.innerHTML || escapeHtml(content)}</code>`;
      } else if (window.__RTK_MONACO_BASE__) {
        void ensureMonacoLoaded().then(async (apiMonaco) => {
          if (!apiMonaco) return;
          try {
            const colored = await apiMonaco.editor.colorize(content, monacoLanguageId(language), {});
            splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${colored}</code>`;
          } catch {
            splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
          }
        });
      } else {
        splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
      }
    }
  } else {
    splitHighlightLayer.innerHTML = `<code class="code-block hljs ${language}">${highlightCode(content, language)}</code>`;
  }
  splitLineNumbers.textContent = Array.from({ length: Math.max(1, (splitEditor.value.match(/\n/g) || []).length + 1) }, (_, i) => String(i + 1)).join('\n');
}

function renderLineNumbers() {
  if (!lineNumbers) return;
  const count = Math.max(1, (editor.value.match(/\n/g) || []).length + 1);
  const diagnosticsHash = codeDiagnostics.map((item) => `${item.type}:${item.line}:${item.message}`).join('|');
  const contentHash = `${currentFile || '-'}|${editor.value.length}|${count}|${diagnosticsHash}`;
  if (renderLineNumbers.lastHash === contentHash) {
    syncEditorScrollState();
    updateActiveLineIndicator();
    updateBracketMatch();
    return;
  }
  renderLineNumbers.lastHash = contentHash;
  logConsole(`renderLineNumbers currentFile=${currentFile || '-'} lines=${count}`);
  const diagnosticsByLine = new Map();
  for (const diagnostic of codeDiagnostics) {
    if (!diagnostic?.line) continue;
    const current = diagnosticsByLine.get(diagnostic.line) || [];
    current.push(diagnostic);
    diagnosticsByLine.set(diagnostic.line, current);
  }
  lineNumbers.innerHTML = Array.from({ length: count }, (_, i) => {
    const line = i + 1;
    const items = diagnosticsByLine.get(line) || [];
    const severity = items.some((item) => item.type === 'error') ? 'error' : (items.some((item) => item.type === 'warn') ? 'warn' : '');
    const title = items.map((item) => item.message).join(' · ');
    return `<span class="line-number ${severity}" data-line-number="${line}"${title ? ` title="${esc(title)}"` : ''}>${line}</span>`;
  }).join('');
  syncEditorScrollState();
  updateActiveLineIndicator();
  updateBracketMatch();
}
renderLineNumbers.lastHash = '';

function getTreeStore(mode) {
  if (mode === 'remote') {
    return {
      collapsed: remoteCollapsed,
      loadedDirs: remoteLoadedDirs,
      treeChildrenMap: remoteTreeChildren,
      root: remoteTreeState,
      view: document.getElementById('serverTreeView'),
      status: 'Servidor',
    };
  }
  return {
    collapsed,
    loadedDirs,
    treeChildrenMap: treeChildren,
    root: treeState,
    view: treeView,
    status: 'Local',
  };
}

function fileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  const map = {
    js: 'fa-brands fa-js', jsx: 'fa-brands fa-react', ts: 'fa-solid fa-code', tsx: 'fa-brands fa-react',
    php: 'fa-brands fa-php', py: 'fa-brands fa-python', rb: 'fa-solid fa-gem',
    html: 'fa-brands fa-html5', htm: 'fa-brands fa-html5', css: 'fa-brands fa-css3-alt', scss: 'fa-brands fa-sass', less: 'fa-brands fa-less',
    json: 'fa-solid fa-code', xml: 'fa-solid fa-code', yml: 'fa-solid fa-gear', yaml: 'fa-solid fa-gear',
    md: 'fa-solid fa-file-lines', markdown: 'fa-solid fa-file-lines',
    sql: 'fa-solid fa-database', db: 'fa-solid fa-database',
    sh: 'fa-solid fa-terminal', bash: 'fa-solid fa-terminal', zsh: 'fa-solid fa-terminal',
    gitignore: 'fa-solid fa-code-fork', git: 'fa-solid fa-code-fork',
    png: 'fa-solid fa-image', jpg: 'fa-solid fa-image', jpeg: 'fa-solid fa-image', gif: 'fa-solid fa-image', svg: 'fa-solid fa-image', webp: 'fa-solid fa-image', ico: 'fa-solid fa-image',
    mp4: 'fa-solid fa-video', webm: 'fa-solid fa-video', mov: 'fa-solid fa-video', avi: 'fa-solid fa-video',
    mp3: 'fa-solid fa-music', wav: 'fa-solid fa-music', ogg: 'fa-solid fa-music', flac: 'fa-solid fa-music',
    pdf: 'fa-solid fa-file-pdf', doc: 'fa-solid fa-file-word', docx: 'fa-solid fa-file-word', xls: 'fa-solid fa-file-excel', xlsx: 'fa-solid fa-file-excel',
    zip: 'fa-solid fa-file-zipper', tar: 'fa-solid fa-file-zipper', gz: 'fa-solid fa-file-zipper', rar: 'fa-solid fa-file-zipper', '7z': 'fa-solid fa-file-zipper',
    txt: 'fa-solid fa-file-lines', log: 'fa-solid fa-file-lines', env: 'fa-solid fa-gear',
    conf: 'fa-solid fa-gear', ini: 'fa-solid fa-gear', cfg: 'fa-solid fa-gear',
    vue: 'fa-brands fa-vuejs', svelte: 'fa-solid fa-code', astro: 'fa-solid fa-star',
  };
  return map[ext] || (name === 'Dockerfile' ? 'fa-brands fa-docker' : 'fa-regular fa-file');
}

function renderNode(node, level = 0, mode = 'local') {
  if (!node) return '';
  const store = getTreeStore(mode);
  const isDir = node.type === 'directory';
  const isCollapsed = store.collapsed.has(node.path);
  const isActive = currentFile === node.path;
  const children = isDir && !isCollapsed ? (store.treeChildrenMap.get(node.path) || []).map((child) => renderNode(child, level + 1, mode)).join('') : '';
  return `
    <div class="node ${isDir ? 'dir' : 'file'} ${isActive ? 'active' : ''}" data-path="${esc(node.path)}" data-type="${node.type}" style="padding-left:${level * 14}px" title="${esc(node.path)}">
      <button class="node-toggle" type="button" aria-hidden="true">${isDir ? `<i class="fa-solid ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-down'}"></i>` : `<i class="${fileIcon(node.name)}"></i>`}</button>
      <button class="node-btn" type="button" ${isDir ? `data-dir-toggle="${esc(node.path)}"` : `data-open="${esc(node.path)}" data-kind="file"`}>${esc(node.name)}</button>
      ${!isDir ? `<button class="fav-toggle" data-fav-toggle="${esc(node.path)}"><i class="${favoriteFiles.some((item) => item.path === node.path) ? 'fa-solid fa-star' : 'fa-regular fa-star'}"></i></button>` : ''}
    </div>
    ${isDir ? `<div class="children">${children}</div>` : ''}
  `;
}

function scrollTreeToActive(mode = treeMode) {
  const store = getTreeStore(mode);
  const view = store.view;
  if (!view || !currentFile) return;
  const activeNode = view.querySelector(`.node[data-path="${CSS.escape(currentFile)}"]`);
  if (activeNode?.scrollIntoView) {
    activeNode.scrollIntoView({ block: 'center', inline: 'nearest', behavior: mode === 'remote' ? 'auto' : 'smooth' });
  }
}

async function loadDirChildren(dirPath, mode = 'local') {
  const store = getTreeStore(mode);
  if (!dirPath || store.loadedDirs.has(dirPath)) return;
  logConsole(`Leyendo carpeta: ${dirPath}`);
  const response = mode === 'remote'
    ? await window.ideRtk.sshListDir?.({ ...sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0], remotePath: dirPath })
    : await window.ideRtk.listDir(dirPath);
  if (!response.ok) {
    logConsole(`Error leyendo carpeta: ${response.error || 'desconocido'}`);
    return;
  }
  logConsole(`Cargados ${response.items?.length || 0} elementos${response.truncated ? ' (truncado)' : ''}`);
  store.treeChildrenMap.set(dirPath, response.items || []);
  store.loadedDirs.add(dirPath);
  (response.items || []).forEach((item) => {
    if (item?.type === 'directory' && item.path && item.path !== store.root?.path) {
      store.collapsed.add(item.path);
    }
  });
}

async function renderTree(mode = treeMode) {
  if (mode === 'remote') {
    if (remoteTreeRenderFlight) {
      remoteTreeRenderQueued = true;
      return remoteTreeRenderFlight;
    }
    remoteTreeRenderFlight = (async () => {
      try {
        const result = await renderTreeImpl(mode);
        return result;
      } finally {
        remoteTreeRenderFlight = null;
        if (remoteTreeRenderQueued) {
          remoteTreeRenderQueued = false;
          void renderTree(mode);
        }
      }
    })();
    return remoteTreeRenderFlight;
  }
  return renderTreeImpl(mode);
}

async function renderTreeImpl(mode = treeMode) {
  const store = getTreeStore(mode);
  const view = store.view;
  if (!view) return;
  if (!store.root) {
    setTreeStatus(mode === 'remote' ? 'Sin servidor' : 'Sin carpeta');
    view.innerHTML = `<div class="empty">No hay ${mode === 'remote' ? 'servidor' : 'carpeta'} abierta</div>`;
    return;
  }
  setTreeStatus(mode === 'remote' ? 'Servidor cargando' : 'Cargando archivos');
  await loadDirChildren(store.root.path, mode);
  if (store.root?.path) store.collapsed.delete(store.root.path);
  view.innerHTML = renderNode(store.root, 0, mode);
  view.querySelectorAll('.node').forEach((nodeEl) => {
    nodeEl.classList.toggle('active', nodeEl.dataset.path === currentFile);
  });
  setTreeStatus('Listo');
  scrollTreeToActive(mode);
  view.querySelectorAll('[data-dir-toggle]').forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const dirPath = btn.dataset.dirToggle;
      if (!dirPath) return;
      const activeStore = getTreeStore(mode);
      if (activeStore.collapsed.has(dirPath)) {
        activeStore.collapsed.delete(dirPath);
        await loadDirChildren(dirPath, mode);
      } else {
        activeStore.collapsed.add(dirPath);
      }
      renderTree(mode);
    });
  });
  view.querySelectorAll('[data-open]').forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (mode === 'remote') {
        await openRemoteFile(btn.dataset.open);
      } else {
        await openFile(btn.dataset.open);
      }
    });
  });
  view.querySelectorAll('.node').forEach((nodeEl) => {
    nodeEl.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const targetPath = nodeEl.dataset.path;
      const targetType = nodeEl.dataset.type;
      contextTarget = { path: targetPath, type: targetType };
      showContextMenu(event.clientX, event.clientY, targetType);
    });
  });
}

function parseSshConfig(text) {
  const lines = String(text || '').split(/\r?\n/);
  const hosts = [];
  let current = null;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const hostMatch = line.match(/^Host\s+(.+)$/i);
    if (hostMatch) {
      const name = hostMatch[1].trim();
      if (name && name !== '*') {
        current = { host: name, hostName: '', user: '', identityFile: '', port: '', raw: [] };
        hosts.push(current);
      } else {
        current = null;
      }
      continue;
    }
    if (!current) continue;
    current.raw.push(rawLine);
    const kv = line.match(/^([A-Za-z][A-Za-z0-9]*)\s+(.+)$/);
    if (!kv) continue;
    const key = kv[1].toLowerCase();
    const value = kv[2].trim();
    if (key === 'hostname') current.hostName = value;
    if (key === 'user') current.user = value;
    if (key === 'identityfile') current.identityFile = value;
    if (key === 'port') current.port = value;
  }
  return hosts;
}

function createDefaultSshProfile() {
  const defaultConfigPath = (window?.process?.platform === 'win32')
    ? '%USERPROFILE%/.ssh/config.txt'
    : '~/.ssh/config.txt';
  return {
    id: `ssh-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: 'Principal',
    configPath: defaultConfigPath,
    selectedHost: '',
    identityFile: '',
    platform: 'auto',
    remoteRoot: '/var/www/html',
  };
}

function normalizeSshProfiles(rawProfiles) {
  const list = Array.isArray(rawProfiles) ? rawProfiles : [];
  const profiles = list
    .map((profile, index) => ({
      id: String(profile?.id || `ssh-${index + 1}`),
      name: String(profile?.name || `Config ${index + 1}`),
      configPath: String(profile?.configPath || profile?.path || ''),
      selectedHost: String(profile?.selectedHost || profile?.sshSelectedHost || ''),
      identityFile: String(profile?.identityFile || profile?.sshIdentityFile || ''),
      platform: String(profile?.platform || 'auto'),
      remoteRoot: String(profile?.remoteRoot || profile?.sshRemoteRoot || '/var/www/html') || '/var/www/html',
    }))
    .filter((profile) => profile.id);
  return profiles.length ? profiles : [createDefaultSshProfile()];
}

function getActiveSshProfile() {
  const selectedId = String(activeSshProfileId || '').trim();
  return sshProfiles.find((profile) => profile.id === selectedId) || sshProfiles[0] || null;
}

function syncSshProfileFields(profile = getActiveSshProfile()) {
  if (!profile) return;
  activeSshProfileId = profile.id;
  sshSelectedHost = profile.selectedHost || '';
  const isWindows = String(profile.platform || sshPlatformSelect?.value || 'auto') === 'windows';
  if (sshIdentityFileInput) sshIdentityFileInput.value = profile.identityFile || '';
  sshRemoteRoot = profile.remoteRoot || '/var/www/html';
  if (sshConfigPathInput) sshConfigPathInput.value = profile.configPath || '';
  if (sshRemoteRootInput) sshRemoteRootInput.value = sshRemoteRoot;
  if (sshHostSelect) sshHostSelect.value = sshSelectedHost;
  if (sshPlatformSelect) sshPlatformSelect.value = profile.platform || 'auto';
  if (sshIdentityLabel) sshIdentityLabel.textContent = isWindows ? 'Archivo de configuración TXT' : 'Llave privada';
  if (sshIdentityFileInput) sshIdentityFileInput.placeholder = isWindows
    ? '%USERPROFILE%/.ssh/config.txt'
    : 'C:/Users/TU_USUARIO/.ssh/id_ed25519';
  if (browseSshIdentityBtn) {
    browseSshIdentityBtn.title = isWindows ? 'Buscar archivo' : 'Buscar llave';
    browseSshIdentityBtn.setAttribute('aria-label', isWindows ? 'Buscar archivo' : 'Buscar llave');
  }
  updateSshHint(profile);
}

function updateSshHint(profile = getActiveSshProfile()) {
  if (!sshHint) return;
  const platform = String(profile?.platform || sshPlatformSelect?.value || 'auto');
  const identityFile = String(profile?.identityFile || sshIdentityFileInput?.value || '').trim();
  const lines = [];
  if (platform === 'windows') {
    lines.push('Windows: usa OpenSSH Server, tu HostName/IP, usuario y una llave privada.');
    lines.push('Si tu llave es .ppk, conviértela a OpenSSH o usa .pem/.key compatible.');
  } else if (platform === 'linux') {
    lines.push('Linux: HostName, User, Port e IdentityFile suelen ser suficientes.');
  } else {
    lines.push('Auto: carga config o elige una llave y selecciona el host correcto.');
  }
  if (identityFile) {
    lines.push(`Llave detectada: ${shortName(identityFile)}`);
    if (/\.ppk$/i.test(identityFile)) {
      lines.push('Aviso: .ppk no siempre funciona directo con OpenSSH; .pem o formato OpenSSH es más seguro.');
    }
  }
  sshHint.textContent = lines.join(' ');
}

function renderSshProfiles() {
  if (!sshProfiles.length) sshProfiles = [createDefaultSshProfile()];
  if (sshProfileTabs) {
    sshProfileTabs.innerHTML = sshProfiles.map((profile) => `
      <button type="button" class="ssh-tab ${profile.id === activeSshProfileId ? 'active' : ''}" data-ssh-profile="${esc(profile.id)}" role="tab" aria-selected="${profile.id === activeSshProfileId ? 'true' : 'false'}">
        <span>${esc(profile.name)}</span>
      </button>
    `).join('');
    sshProfileTabs.querySelectorAll('[data-ssh-profile]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const profile = sshProfiles.find((item) => item.id === btn.dataset.sshProfile) || sshProfiles[0];
        if (!profile) return;
        syncSshProfileFields(profile);
        if (profile.configPath) {
          await loadSshConfig(profile.configPath);
        }
        renderSshProfiles();
        void persistState();
      });
    });
  }
  const active = getActiveSshProfile() || sshProfiles[0];
  if (active) syncSshProfileFields(active);
}

function updateActiveSshProfile(patch = {}) {
  const profile = getActiveSshProfile();
  if (!profile) return null;
  Object.assign(profile, patch);
  activeSshProfileId = profile.id;
  return profile;
}

function expandTilde(input) {
  const value = String(input || '').trim();
  if (!value.startsWith('~')) return value;
  const home = (window?.process?.env?.HOME) || (window?.process?.env?.USERPROFILE) || '';
  return home ? value.replace(/^~(?=$|[\\/])/, home) : value;
}

function getActiveSshHost(preferredHost = '') {
  return sshConfigData.hosts.find((host) => host.host === preferredHost)
    || sshConfigData.hosts.find((host) => host.host === sshSelectedHost)
    || sshConfigData.hosts[0]
    || null;
}

function setSelectedSshHost(host = '') {
  sshSelectedHost = String(host || '').trim();
  if (sshHostSelect && sshSelectedHost) sshHostSelect.value = sshSelectedHost;
  void persistState();
}

function renderSshHosts(preferredHost = '') {
  if (!sshHostSelect) return;
  const nextHost = getActiveSshHost(preferredHost);
  sshHostSelect.innerHTML = sshConfigData.hosts.map((host) => `<option value="${esc(host.host)}">${esc(host.host)}${host.hostName ? ` · ${esc(host.hostName)}` : ''}</option>`).join('') || '<option value="">Sin hosts</option>';
  sshHostSelect.value = nextHost?.host || '';
  sshSelectedHost = sshHostSelect.value || sshSelectedHost || '';
  if (sshPreview) {
    const active = nextHost;
    sshPreview.textContent = active
      ? `Host: ${active.host}\nHostName: ${active.hostName || '-'}\nUser: ${active.user || '-'}\nIdentityFile: ${active.identityFile || '-'}\nPort: ${active.port || '-'}`
      : 'Carga un archivo SSH config para ver hosts.';
  }
}

function buildEditorContextMenu() {
  if (!editorContextMenu) return;
  editorContextMenu.innerHTML = `
    <button data-action="select-all"><i class="fa-solid fa-i-cursor"></i><span>Seleccionar todo</span></button>
    <button data-action="copy"><i class="fa-solid fa-copy"></i><span>Copiar</span></button>
    <button data-action="cut"><i class="fa-solid fa-scissors"></i><span>Cortar</span></button>
    <button data-action="paste"><i class="fa-solid fa-paste"></i><span>Pegar</span></button>
    <button data-action="download-current"><i class="fa-solid fa-download"></i><span>Descargar archivo</span></button>
  `;
}

function setSshModalVisible(open) {
  sshModal?.classList.toggle('hidden', !open);
}

function setPluginsModalVisible(open) {
  pluginsModal?.classList.toggle('hidden', !open);
  if (open) renderPluginsCatalog();
}

/* ── Routicket Play ── */
let rtkPlayCurrentTrack = null;
let rtkPlayTrackList = [];
let rtkPlayPlaying = false;
let rtkPlayHidden = false;

const RTK_PLAY_URL = 'https://routicket.com/plugins/play/musica/track/alexa.php?action=hub&device=echo_show';
const RTK_PLAY_IFRAME_SRC = 'https://routicket.com/musica';

function setRtkPlayModalVisible(open) {
  rtkPlayModal?.classList.toggle('hidden', !open);
  if (!open) {
    rtkPlayHidden = true;
    if (rtkPlayStatus) rtkPlayStatus.textContent = 'En segundo plano';
    return;
  }
  rtkPlayHidden = false;
  if (rtkPlayStatus) rtkPlayStatus.textContent = rtkPlayPlaying ? 'Reproduciendo' : 'Inactivo';
  rtkPlayFrame.src ||= RTK_PLAY_IFRAME_SRC;
}

async function fetchRtkPlayData() {
  if (rtkPlayStatus) rtkPlayStatus.textContent = 'Cargando...';
  try {
    const res = await fetch(RTK_PLAY_URL);
    rtkPlayData = await res.json();
  } catch {
    rtkPlayData = null;
    if (rtkPlayStatus) rtkPlayStatus.textContent = 'Error de conexión';
    return;
  }
  if (!rtkPlayData || rtkPlayData.status !== 'ok') {
    if (rtkPlayStatus) rtkPlayStatus.textContent = rtkPlayData?.summary || 'Sin datos';
    return;
  }
  rtkPlayTrackList = rtkPlayData.featured || [];
  if (rtkPlayTitle) rtkPlayTitle.textContent = rtkPlayData.voice || rtkPlayData.summary || 'Routicket Play';
  if (rtkPlayArtist) rtkPlayArtist.textContent = rtkPlayData.summary || '';
  renderRtkPlayTrackList();
  if (rtkPlayStatus) rtkPlayStatus.textContent = rtkPlayPlaying ? 'Reproduciendo' : 'Listo';
  if (!rtkPlayFrame.src) rtkPlayFrame.src = rtkPlayData.link || RTK_PLAY_IFRAME_SRC;
}

function renderRtkPlayTrackList() {
  if (!rtkPlayTracks) return;
  rtkPlayTracks.innerHTML = '';
  rtkPlayTrackList.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'rtkplay-track-item';
    item.innerHTML = `
      <img src="${track.cover || track.image || ''}" alt="" onerror="this.style.display='none'" />
      <div class="rtkplay-track-info">
        <strong>${track.title || track.name || 'Track ' + (i + 1)}</strong>
        <span>${track.artist || ''}</span>
      </div>
      <span class="rtkplay-track-plays">${track.plays ? track.plays + ' plays' : ''}</span>
    `;
    item.addEventListener('click', () => playRtkPlayTrack(i));
    rtkPlayTracks.appendChild(item);
  });
}

function playRtkPlayTrack(index) {
  const track = rtkPlayTrackList[index];
  if (!track) return;
  rtkPlayCurrentTrack = track;
  if (rtkPlayTitle) rtkPlayTitle.textContent = track.title || track.name || 'Track';
  if (rtkPlayArtist) rtkPlayArtist.textContent = track.artist || '';
  if (rtkPlayCover) rtkPlayCover.src = track.cover || track.image || '';
  if (!rtkPlayHidden && !rtkPlayModal?.classList.contains('hidden')) {
    setRtkPlayModalVisible(true);
  }
  if (rtkPlayFrame) rtkPlayFrame.src = track.link || track.url || RTK_PLAY_IFRAME_SRC;
  rtkPlayPlaying = true;
  if (rtkPlayPlayBtn) rtkPlayPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  if (rtkPlayBtn) rtkPlayBtn.innerHTML = '<span class="play-emoji">🎶</span>';
  if (rtkPlayBtn) rtkPlayBtn.title = 'Pausar';
  if (rtkPlayStatus) rtkPlayStatus.textContent = 'Reproduciendo';
}

function toggleRtkPlayPlay() {
  if (!rtkPlayCurrentTrack && rtkPlayTrackList.length) {
    playRtkPlayTrack(0);
    return;
  }
  rtkPlayPlaying = !rtkPlayPlaying;
  if (rtkPlayPlaying && rtkPlayCurrentTrack) {
    const track = rtkPlayCurrentTrack;
    if (rtkPlayFrame) rtkPlayFrame.src = track.link || track.url || RTK_PLAY_IFRAME_SRC;
  }
  const emoji = rtkPlayPlaying ? '🎶' : '🎵';
  const label = rtkPlayPlaying ? 'Pausar' : 'Reproducir';
  if (rtkPlayPlayBtn) rtkPlayPlayBtn.innerHTML = `<i class="fa-solid ${rtkPlayPlaying ? 'fa-pause' : 'fa-play'}"></i>`;
  if (rtkPlayBtn) rtkPlayBtn.innerHTML = `<span class="play-emoji">${emoji}</span>`;
  if (rtkPlayBtn) rtkPlayBtn.title = label;
  if (rtkPlayStatus) rtkPlayStatus.textContent = rtkPlayPlaying ? 'Reproduciendo' : 'Pausado';
}

function rtkPlayNext() {
  if (!rtkPlayTrackList.length) return;
  const idx = rtkPlayCurrentTrack ? rtkPlayTrackList.indexOf(rtkPlayCurrentTrack) : -1;
  const next = (idx + 1) % rtkPlayTrackList.length;
  playRtkPlayTrack(next);
}

function rtkPlayPrev() {
  if (!rtkPlayTrackList.length) return;
  const idx = rtkPlayCurrentTrack ? rtkPlayTrackList.indexOf(rtkPlayCurrentTrack) : -1;
  const prev = (idx - 1 + rtkPlayTrackList.length) % rtkPlayTrackList.length;
  playRtkPlayTrack(prev);
}

async function loadSshConfig(pathValue) {
  const resolved = expandTilde(pathValue);
  if (!resolved) return;
  const result = await window.ideRtk.readTextFile(resolved);
  if (!result.ok) {
    logConsole(`SSH config error: ${result.error || 'no se pudo leer'}`);
    pushToast('error', 'SSH config', `No se pudo leer el archivo: ${result.error || 'desconocido'}`);
    return;
  }
  sshConfigData = { path: resolved, hosts: parseSshConfig(result.content) };
  updateActiveSshProfile({
    configPath: resolved,
    selectedHost: sshSelectedHost || sshHostSelect?.value || sshConfigData.hosts[0]?.host || '',
    identityFile: String(sshIdentityFileInput?.value || '').trim(),
    platform: String(sshPlatformSelect?.value || 'auto'),
    remoteRoot: getRemoteRootValue(),
  });
  renderSshHosts(sshSelectedHost || sshHostSelect?.value || sshConfigData.hosts[0]?.host || '');
  renderSshProfiles();
  logConsole(`SSH config cargado: ${sshConfigData.hosts.length} host(s)`);
  void persistState();
}

async function saveSshConfigState() {
  sshRemoteRoot = getRemoteRootValue();
  setSelectedSshHost(sshHostSelect?.value || sshSelectedHost || '');
  updateActiveSshProfile({
    configPath: String(sshConfigPathInput?.value || sshConfigData.path || '').trim(),
    selectedHost: sshHostSelect?.value || sshSelectedHost || '',
    identityFile: String(sshIdentityFileInput?.value || '').trim(),
    platform: String(sshPlatformSelect?.value || 'auto'),
    remoteRoot: sshRemoteRoot,
  });
  renderSshProfiles();
  const result = await persistState().then(() => ({ ok: true })).catch((error) => ({ ok: false, error: error.message }));
  if (result.ok) {
    pushToast('success', 'SSH', 'Configuración guardada localmente.');
    logConsole('SSH config guardado localmente');
    return result;
  }
  pushToast('error', 'SSH', result.error || 'No se pudo guardar la configuración.');
  logConsole(`SSH config save error: ${result.error || 'desconocido'}`);
  return result;
}

function hideContextMenu() {
  contextMenu?.classList.add('hidden');
  appContextMenu?.classList.add('hidden');
  editorContextMenu?.classList.add('hidden');
}

function showAppContextMenu(x, y, target = null) {
  if (!appContextMenu) return;
  const maxX = window.innerWidth - 220;
  const maxY = window.innerHeight - 120;
  appContextMenu.classList.remove('hidden');
  appContextMenu.style.left = `${Math.max(12, Math.min(x, maxX))}px`;
  appContextMenu.style.top = `${Math.max(12, Math.min(y, maxY))}px`;
  appContextMenu.dataset.targetX = String(Math.max(0, Math.floor(x)));
  appContextMenu.dataset.targetY = String(Math.max(0, Math.floor(y)));
  appContextMenu.dataset.targetKind = target?.tagName || '';
}

function hideNameModal() {
  nameModal?.classList.add('hidden');
  nameModalAction = null;
  nameModalPayload = null;
  if (nameModalInput) nameModalInput.value = '';
}

function openNameModal({ title, label, placeholder, confirmText, action, payload, value }) {
  if (!nameModal) return;
  nameModalTitle.textContent = title;
  nameModalLabel.textContent = label;
  nameModalInput.placeholder = placeholder;
  nameModalConfirmBtn.title = confirmText;
  nameModalAction = action;
  nameModalPayload = payload;
  nameModal.classList.remove('hidden');
  nameModalInput.value = value || '';
  setTimeout(() => nameModalInput.focus(), 0);
}

async function confirmNameModal() {
  const value = String(nameModalInput?.value || '').trim();
  if (!value || !nameModalAction) return;
  const action = nameModalAction;
  const payload = nameModalPayload || {};
  const isRemoteTarget = treeMode === 'remote' || remoteTreeState?.path === payload.path || remoteCollapsed.has(payload.path);
  hideNameModal();
  if (action === 'new-file') {
    const result = isRemoteTarget
      ? await window.ideRtk.sshCreateFile?.({
        ...(getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {}),
        remotePath: `${payload.path.replace(/\/$/, '')}/${value}`,
        content: '',
      })
      : await window.ideRtk.createFile({ dirPath: payload.path, fileName: value, content: '' });
    if (result.ok) {
      await refreshCurrentTree();
      if (!isRemoteTarget) await openFile(result.filePath);
      if (isRemoteTarget && result.remotePath) await openRemoteFile(result.remotePath);
      if (isRemoteTarget) {
        logConsole(`SSH create file: ${result.remotePath || value}`);
      }
    }
    return;
  }
  if (action === 'new-folder') {
    const result = isRemoteTarget
      ? await window.ideRtk.sshCreateFolder?.({
        ...(getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {}),
        remotePath: `${payload.path.replace(/\/$/, '')}/${value}`,
      })
      : await window.ideRtk.createFolder({ dirPath: payload.path, folderName: value });
    if (result.ok) await refreshCurrentTree();
    return;
  }
  if (action === 'rename') {
    const isRemoteTarget = treeMode === 'remote' || remoteTreeState?.path === payload.path || remoteCollapsed.has(payload.path);
    const result = isRemoteTarget
      ? await window.ideRtk.sshRenamePath?.({
        ...(getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {}),
        sourcePath: payload.path,
        newName: value,
      })
      : await window.ideRtk.renamePath({ sourcePath: payload.path, newName: value });
    if (result.ok) {
      await refreshCurrentTree();
      if (currentFile === payload.path) {
        currentFile = result.path;
        const activeTab = openFiles[activeFileIndex];
        if (activeTab) {
          activeTab.path = result.path;
          activeTab.name = result.path.split(/[\\/]/).pop();
          activeTab.isRemote = isRemoteTarget || activeTab.isRemote;
        }
        updateEditorMeta();
        renderTabs();
        void persistState();
      }
      if (isRemoteTarget) logConsole(`SSH rename: ${payload.path} -> ${result.path || value}`);
    }
    return;
  }
  if (action === 'refresh-file' && target.type === 'file') {
    if (treeMode === 'remote' || remoteTreeState?.path === target.path || remoteCollapsed.has(target.path)) {
      await openRemoteFile(target.path);
    } else {
      await openFile(target.path);
    }
    return;
  }
  if (action === 'refresh-folder' && target.type === 'directory') {
    await refreshCurrentTree();
    if (treeMode === 'remote') {
      remoteLoadedDirs.delete(target.path);
      remoteTreeChildren.delete(target.path);
      await renderTree('remote');
    } else {
      loadedDirs.delete(target.path);
      treeChildren.delete(target.path);
      await renderTree('local');
    }
    logConsole(`Carpeta actualizada: ${target.path}`);
    return;
  }
}

function showContextMenu(x, y, type) {
  if (!contextMenu) return;
  contextMenu.classList.remove('hidden');
  contextMenu.style.left = `${Math.min(x, window.innerWidth - 220)}px`;
  contextMenu.style.top = `${Math.min(y, window.innerHeight - 220)}px`;
  const isFile = type === 'file';
  const isDir = type === 'directory';
  const zipAction = contextMenu.querySelector('[data-action="download-zip"]');
  if (zipAction) zipAction.classList.toggle('hidden', !isDir || !window.ideRtk?.zipAvailable);
  contextMenu.querySelector('[data-action="new-file"]').style.display = type === 'directory' ? 'block' : 'none';
  contextMenu.querySelector('[data-action="new-folder"]').style.display = type === 'directory' ? 'block' : 'none';
  contextMenu.querySelector('[data-action="edit"]').style.display = isFile ? 'block' : 'none';
  contextMenu.querySelector('[data-action="refresh-file"]').style.display = isFile ? 'block' : 'none';
  contextMenu.querySelector('[data-action="refresh-folder"]').style.display = isDir ? 'block' : 'none';
  contextMenu.querySelector('[data-action="download"]').style.display = 'block';
  if (zipAction) zipAction.style.display = isDir ? 'block' : 'none';
}

function showEditorContextMenu(x, y) {
  if (!editorContextMenu) return;
  editorContextMenu.classList.remove('hidden');
  editorContextMenu.style.left = `${Math.min(x, window.innerWidth - 220)}px`;
  editorContextMenu.style.top = `${Math.min(y, window.innerHeight - 180)}px`;
}

function renderRecentPanels() {
  if (recentPanel) {
    recentPanel.innerHTML = recentFiles.slice(0, 8).map((item) => `
      <button class="mini-item" data-open-recent="${esc(item.path)}">
        <span>${esc(item.name || item.path.split(/[\\/]/).pop())}</span>
        <small>${esc(item.language || '')}</small>
      </button>
    `).join('') || '<div class="empty">Sin recientes</div>';
    recentPanel.querySelectorAll('[data-open-recent]').forEach((btn) => btn.addEventListener('click', () => openFile(btn.dataset.openRecent)));
  }
  if (favoritesPanel) {
    favoritesPanel.innerHTML = favoriteFiles.slice(0, 8).map((item) => `
      <button class="mini-item" data-open-fav="${esc(item.path)}">
        <span>${esc(item.name || item.path.split(/[\\/]/).pop())}</span>
        <small>Fav</small>
      </button>
    `).join('') || '<div class="empty">Sin favoritos</div>';
    favoritesPanel.querySelectorAll('[data-open-fav]').forEach((btn) => btn.addEventListener('click', () => openFile(btn.dataset.openFav)));
  }
}

function toggleFavorite(filePath) {
  if (!filePath) return;
  const name = filePath.split(/[\\/]/).pop();
  const idx = favoriteFiles.findIndex((item) => item.path === filePath);
  if (idx >= 0) favoriteFiles.splice(idx, 1);
  else favoriteFiles.unshift({ path: filePath, name });
  persistState();
  renderRecentPanels();
}

function rememberRecent(file) {
  if (!file?.path) return;
  const item = { path: file.path, name: file.name, language: file.language };
  recentFiles = [item, ...recentFiles.filter((entry) => entry.path !== file.path)].slice(0, 20);
  persistState();
  renderRecentPanels();
}

function markDirty(path) {
  if (!path) return;
  dirtyFiles.add(path);
  updateEditorMeta();
  void persistState();
}

function clearDirty(path) {
  if (!path) return;
  dirtyFiles.delete(path);
  updateEditorMeta();
  void persistState();
}

function updateEditorMeta() {
  const suffix = currentFile ? (dirtyFiles.has(currentFile) ? ' · sin guardar' : ' · guardado') : '';
  const opened = lastOpenedAt ? ` · abierto ${lastOpenedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '';
  const totalLines = currentFile && editor.value ? (editor.value.match(/\n/g) || []).length + 1 : 0;
  const cursorLine = editor?.dataset?.cursorLine || '1';
  const cursorColumn = editor?.dataset?.cursorColumn || '1';
  const wrapLabel = codeWrapEnabled ? 'wrap on' : 'wrap off';
  const symbolLabel = currentSymbol?.label ? ` · ${currentSymbol.label}` : '';
  const lineInfo = currentFile ? `Ln ${cursorLine}, Col ${cursorColumn} · ${totalLines} líneas · ${wrapLabel}${symbolLabel}` : '';
  editorMeta.textContent = currentFile
    ? `${currentLanguage} · ${currentIsText ? 'texto editable' : 'solo lectura sugerida'} · ${lineInfo}${suffix}${opened}`
    : 'Sin archivo';
  if (editorTitle) {
    editorTitle.textContent = currentFile ? shortName(currentFile) : 'Editor';
    editorTitle.title = currentFile || '';
  }
  if (languageBadge) {
    languageBadge.textContent = languageLabel(currentLanguage);
    languageBadge.classList.add('language-badge');
  }
  if (editStatus) {
    const baseStatus = currentFile ? (dirtyFiles.has(currentFile) ? 'Editando' : 'Listo') : 'Sin archivo';
    editStatus.dataset.baseText = baseStatus;
    editStatus.textContent = codeDiagnostics.length
      ? `${baseStatus} · ${codeDiagnostics.filter((item) => item.type === 'error').length} error(es), ${codeDiagnostics.filter((item) => item.type === 'warn').length} aviso(s)`
      : baseStatus;
  }
  if (editorBreadcrumb) {
    editorBreadcrumb.textContent = currentFile
      ? `${currentFile.replace(/\\/g, '/')} · ${lineInfo}`
      : 'Sin archivo';
  }
}

function updateBreadcrumbActionState() {
  if (!focusBlockBtn) return;
  focusBlockBtn.classList.toggle('active', Boolean(currentSymbol));
  focusBlockBtn.title = currentSymbol ? `Ir al bloque: ${currentSymbol.label}` : 'Ir al bloque actual';
  focusBlockBtn.setAttribute('aria-label', focusBlockBtn.title);
}

function updateMinimapState() {
  const shell = document.getElementById('minimapShell');
  shell?.classList.toggle('hidden', !(pluginStates.editorPack !== false) || !minimapVisible);
  if (toggleMinimapBtn) {
    toggleMinimapBtn.classList.toggle('active', minimapVisible);
    toggleMinimapBtn.title = minimapVisible ? 'Ocultar minimapa' : 'Mostrar minimapa';
    toggleMinimapBtn.setAttribute('aria-label', toggleMinimapBtn.title);
  }
}

function normalizeEditorView() {
  centerHidden = false;
  previewMode = 'normal';
  columnsCount = 3;
  previewVisible = true;
  rightViewMode = 'web';
  splitEnabled = false;
  rightPanel?.classList.remove('split-mode');
  splitWrap?.classList.add('hidden');
  backToPreviewBtn?.classList.add('hidden');
  updateRightViewModeButtons();
  applyTheme();
  applyPreviewVisibility();
}

function detectCurrentSymbol(source, lineNumber, language = currentLanguage) {
  const lines = String(source || '').split('\n');
  const maxIdx = Math.max(0, Math.min(lines.length - 1, lineNumber - 1));
  const patterns = {
    js: [
      { re: /^\s*(?:export\s+)?(?:async\s+)?function\s+([A-Za-z0-9_$]+)/, type: 'function' },
      { re: /^\s*(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=\s*(?:async\s*)?(?:\(|function\b)/, type: 'function' },
      { re: /^\s*class\s+([A-Za-z0-9_$]+)/, type: 'class' },
    ],
    php: [
      { re: /^\s*function\s+([A-Za-z0-9_]+)/, type: 'function' },
      { re: /^\s*class\s+([A-Za-z0-9_]+)/, type: 'class' },
    ],
    html: [
      { re: /^\s*<([A-Za-z0-9:-]+)(\s|>)/, type: 'tag' },
    ],
    css: [
      { re: /^\s*([.#]?[A-Za-z0-9_-]+)\s*\{/, type: 'rule' },
    ],
    md: [
      { re: /^\s*(#{1,6})\s+(.*)$/, type: 'heading' },
    ],
  };
  const rules = patterns[language] || [];
  for (let i = maxIdx; i >= 0; i -= 1) {
    const line = lines[i];
    for (const rule of rules) {
      const match = line.match(rule.re);
      if (match) {
        const name = String(match[1] || match[2] || '').trim();
        return { line: i + 1, label: `${rule.type}: ${name}`.trim(), name, type: rule.type };
      }
    }
  }
  return null;
}

function findMatchingBracket(source, index) {
  const pairs = { '(': ')', '[': ']', '{': '}', '<': '>' };
  const reverse = { ')': '(', ']': '[', '}': '{', '>': '<' };
  const ch = source[index];
  if (!ch || (!pairs[ch] && !reverse[ch])) return null;
  const direction = pairs[ch] ? 1 : -1;
  const open = pairs[ch] ? ch : reverse[ch];
  const close = pairs[ch] || ch;
  let depth = 0;
  for (let i = index; i >= 0 && i < source.length; i += direction) {
    const c = source[i];
    if (c === open) depth += direction === 1 ? 1 : -1;
    if (c === close) depth += direction === 1 ? -1 : 1;
    if (depth === 0) return { start: Math.min(index, i), end: Math.max(index, i), pair: [open, close] };
  }
  return null;
}

function updateBracketMatch() {
  const source = String(editor?.value || '');
  const pos = Math.max(0, (editor?.selectionStart ?? 0) - 1);
  bracketMatch = findMatchingBracket(source, pos);
  if (!editorWrap) return;
  editorWrap.classList.toggle('has-bracket-match', Boolean(bracketMatch));
  if (bracketMatch) {
    editor.dataset.bracketStart = String(bracketMatch.start);
    editor.dataset.bracketEnd = String(bracketMatch.end);
  }
}

function scheduleEditorAuxRefresh() {
  if (editorAuxTimer) clearTimeout(editorAuxTimer);
  editorAuxTimer = setTimeout(() => {
    editorAuxTimer = null;
    updateActiveLineIndicator();
    updateBracketMatch();
    if (minimapVisible) renderMinimap();
  }, 80);
}

function scheduleEditorHighlight(reason = 'typing') {
  if (editorHighlightFrame) return;
  editorHighlightFrame = requestAnimationFrame(() => {
    editorHighlightFrame = null;
    syncHighlight();
    logConsole(`highlight repaint (${reason}) rAF`);
  });
}

function renderMinimap() {
  if (!minimapVisible || !minimapCanvas || !editor) return;
  if (minimapFrame) cancelAnimationFrame(minimapFrame);
  minimapFrame = requestAnimationFrame(() => {
    minimapFrame = null;
    const ctx = minimapCanvas.getContext('2d');
    if (!ctx) return;
    const rect = minimapCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const cssW = Math.max(1, rect.width);
    const cssH = Math.max(1, rect.height);
    const pxW = Math.max(1, Math.round(cssW * dpr));
    const pxH = Math.max(1, Math.round(cssH * dpr));
    if (minimapCanvas.width !== pxW || minimapCanvas.height !== pxH) {
      minimapCanvas.width = pxW;
      minimapCanvas.height = pxH;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const src = String(editor.value || '');
    const lines = src.split('\n');
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = 'rgba(12, 19, 28, 0.92)';
    ctx.fillRect(0, 0, cssW, cssH);
    const step = Math.max(1, Math.ceil(lines.length / cssH));
    for (let y = 0, i = 0; y < cssH; y += 1, i += step) {
      const chunk = lines.slice(i, i + step).join('\n');
      const len = Math.min(1, chunk.length / 180);
      ctx.fillStyle = `rgba(0, 194, 203, ${0.10 + len * 0.55})`;
      ctx.fillRect(0, y, Math.max(2, Math.round(cssW * len)), 1);
    }
    const total = Math.max(1, lines.length);
    const cursorLine = Math.max(1, currentLineIndex);
    const markerY = Math.round((cursorLine - 1) / total * cssH);
    ctx.fillStyle = 'rgba(255, 202, 40, 0.85)';
    ctx.fillRect(0, markerY, cssW, 2);
  });
}

function getSymbolStartLine(lineNumber, language = currentLanguage, source = editor?.value || '') {
  return detectCurrentSymbol(source, lineNumber, language)?.line || lineNumber;
}

function jumpToLine(lineNumber) {
  if (!editor) return;
  const value = String(editor.value || '');
  const targetLine = Math.max(1, lineNumber);
  const before = value.split('\n').slice(0, targetLine - 1).join('\n');
  const index = before.length + (targetLine > 1 ? 1 : 0);
  const lineHeight = parseFloat(getComputedStyle(editor).lineHeight) || 22;
  editor.focus();
  editor.setSelectionRange(index, index);
  editor.scrollTop = Math.max(0, (targetLine - 2) * lineHeight);
  scheduleScrollSync();
  updateActiveLineIndicator();
  updateBracketMatch();
}

function findSymbolLine(direction = 1) {
  if (!editor) return null;
  const lines = String(editor.value || '').split('\n');
  const start = Math.max(0, currentLineIndex - 1);
  const ranges = [];
  for (let i = 0; i < lines.length; i += 1) {
    const symbol = detectCurrentSymbol(lines.slice(0, i + 1).join('\n'), i + 1, currentLanguage);
    if (symbol?.line === i + 1) ranges.push(symbol.line);
  }
  if (!ranges.length) return null;
  if (direction > 0) return ranges.find((line) => line > currentLineIndex) || ranges[0];
  const reversed = [...ranges].reverse();
  return reversed.find((line) => line < currentLineIndex) || reversed[0];
}

focusBlockBtn?.addEventListener('click', () => {
  if (!currentSymbol) return;
  jumpToLine(currentSymbol.line);
});

toggleMinimapBtn?.addEventListener('click', () => {
  minimapVisible = !minimapVisible;
  updateMinimapState();
  if (minimapVisible) renderMinimap();
});

minimapCanvas?.addEventListener('click', (event) => {
  if (!editor || !minimapCanvas) return;
  const rect = minimapCanvas.getBoundingClientRect();
  const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));
  const totalLines = Math.max(1, (editor.value.match(/\n/g) || []).length + 1);
  const line = Math.max(1, Math.min(totalLines, Math.round((y / rect.height) * totalLines)));
  const lineHeight = parseFloat(getComputedStyle(editor).lineHeight) || 22;
  editor.focus();
  const start = editor.value.split('\n').slice(0, line - 1).join('\n').length + (line > 1 ? 1 : 0);
  editor.setSelectionRange(start, start);
  editor.scrollTop = Math.max(0, (line - 2) * lineHeight);
  scheduleScrollSync();
  updateActiveLineIndicator();
  updateBracketMatch();
});

function setColumnsCount(nextCount) {
  columnsCount = nextCount === 2 ? 2 : 3;
  previewVisible = columnsCount === 3;
  applyTheme();
  applyPreviewVisibility();
  renderTree(treeMode);
  void persistState();
}

function applyPreviewVisibility() {
  const workspace = document.querySelector('.workspace');
  const previewBody = document.querySelector('.preview-body');
  const splitWrapEl = document.getElementById('splitWrap');
  rightPanel?.classList.remove('split-mode');
  if (!workspace) return;
  if (columnsCount === 2) {
    workspace.classList.add('preview-hidden');
    workspace.classList.add('columns-2');
    workspace.classList.remove('columns-3');
    previewBody?.classList.add('hidden');
    splitWrapEl?.classList.add('hidden');
    return;
  }
  workspace.classList.remove('preview-hidden');
  workspace.classList.add('columns-3');
  workspace.classList.remove('columns-2');
  previewBody?.classList.remove('hidden');
  splitWrapEl?.classList.toggle('hidden', !splitEnabled);
  workspace.classList.toggle('center-hidden', centerHidden);
  workspace.classList.toggle('preview-fit', previewMode === 'fit');
  workspace.classList.toggle('preview-expanded', previewMode === 'expanded');
}

function setSettingsVisibility(open) {
  settingsModal?.classList.toggle('hidden', !open);
}

function showExternalChange(payload) {
  if (!payload?.filePath || payload.filePath !== currentFile) return;
  externalChangePending = payload;
  fileChangeBanner?.classList.remove('hidden');
  if (fileChangeBanner) {
    const label = fileChangeBanner.querySelector('span');
    if (label) label.textContent = 'Archivo actualizado automáticamente';
  }
  if (editStatus) editStatus.textContent = 'Archivo actualizado';
  if (saveSuccessTimer) clearTimeout(saveSuccessTimer);
  saveSuccessTimer = setTimeout(() => {
    if (fileChangeBanner) fileChangeBanner.classList.add('hidden');
    if (editStatus && currentFile) editStatus.textContent = dirtyFiles.has(currentFile) ? 'Editando' : 'Listo';
  }, 2200);
}

function showSaveSuccess(message = 'Archivo guardado correctamente') {
  if (fileChangeBanner) {
    const label = fileChangeBanner.querySelector('span');
    if (label) label.textContent = message;
    fileChangeBanner.classList.remove('hidden');
  }
  if (editStatus) editStatus.textContent = 'Guardado';
  if (saveSuccessTimer) clearTimeout(saveSuccessTimer);
  saveSuccessTimer = setTimeout(() => {
    if (fileChangeBanner) fileChangeBanner.classList.add('hidden');
    if (editStatus && currentFile) editStatus.textContent = dirtyFiles.has(currentFile) ? 'Editando' : 'Listo';
  }, 2200);
}

async function reloadCurrentFile() {
  if (!currentFile) return;
  const result = await window.ideRtk.openFile(currentFile);
  if (!result.ok) return;
  const active = openFiles[activeFileIndex];
  if (active) {
    active.content = result.content || '';
    active.language = result.language || getLanguage(currentFile);
    active.isText = result.isText;
    active.dirty = false;
  }
  editor.value = result.content || '';
  if (plainEditor) plainEditor.textContent = '';
  currentLanguage = normalizeLanguage(currentFile, result.language, result.content || '');
  currentIsText = result.isText;
  normalizeEditorView();
  clearDirty(currentFile);
  if (plainEditor) plainEditor.textContent = '';
  if (highlightLayer) highlightLayer.innerHTML = '';
  resetCodeSearch();
  updatePreview(editor.value, currentFile);
  fileChangeBanner?.classList.add('hidden');
  externalChangePending = null;
  renderTabs();
  updateEditorMeta();
  updateSyntaxLanguage(currentFile, result.language || getLanguage(currentFile));
}

function updatePreview(content, filePath) {
  clearPreviewTimers();
  const fileLabel = shortName(filePath || 'archivo');
  logConsole(`updatePreview path=${filePath || '-'} len=${String(content || '').length} file=${fileLabel} auto=${previewAutoEnabled}`);
  previewStatus.textContent = `Cargando ${fileLabel} en ${Math.round(PREVIEW_EDIT_DELAY_MS / 1000)}s...`;
  setPreviewUrlLabel(`en cola: ${fileLabel}`);
  renderPreviewIfChanged(content, filePath, 'immediate', { force: true });
  if (previewDebounceTimer) clearTimeout(previewDebounceTimer);
  previewDebounceTimer = setTimeout(() => {
    previewDebounceTimer = null;
    renderPreviewIfChanged(content, filePath, 'debounce-5s');
  }, 5000);
  if (previewRefreshInterval) clearInterval(previewRefreshInterval);
  logConsole(`preview auto refresh disabled path=${filePath || '-'} mode=save-only`);
  if (splitEnabled) {
    splitEnabled = false;
    rightPanel?.classList.remove('split-mode');
    splitWrap?.classList.add('hidden');
    backToPreviewBtn?.classList.add('hidden');
    if (rightPanelTitle) rightPanelTitle.textContent = 'Preview';
  }
}

function refreshPreviewNow() {
  if (!currentFile) return;
  logConsole(`refreshPreviewNow path=${currentFile} auto=${previewAutoEnabled}`);
  updatePreview(editor.value, currentFile);
}

function closeOtherTabs() {
  if (activeFileIndex < 0) return;
  const active = openFiles[activeFileIndex];
  openFiles.splice(0, openFiles.length, active);
  activeFileIndex = 0;
  renderTabs();
  updateEditorMeta();
  void persistState();
}

async function duplicateActiveTab() {
  if (activeFileIndex < 0 || !currentFile) return;
  const active = openFiles[activeFileIndex];
  if (!active) return;
  const duplicate = {
    ...active,
    path: `${active.path}#copy-${Date.now()}`,
    name: `${shortName(active.path)} (copia)`,
    dirty: true,
    openedAt: new Date(),
  };
  openFiles.push(duplicate);
  activeFileIndex = openFiles.length - 1;
  currentFile = duplicate.path;
  editor.value = duplicate.content || '';
  if (plainEditor) plainEditor.textContent = editor.value || '';
  updateEditorMeta();
  renderTabs();
  forceHighlightPaint('duplicateTab');
  updatePreview(editor.value, currentFile);
  void persistState();
}

function findOpenTabByPath(filePath) {
  return openFiles.findIndex((file) => file.path === filePath);
}

function applyOpenEntry(entry, index = null) {
  logConsole(`applyOpenEntry path=${entry?.path || '-'} len=${String(entry?.content || '').length} index=${index === null ? 'new' : index}`);
  ensureEditorPreviewOpen();
  if (index != null && index >= 0 && index < openFiles.length) {
    openFiles[index] = entry;
    activateTab(index);
    return index;
  }
  openFiles.push(entry);
  activeFileIndex = openFiles.length - 1;
  currentFile = entry.path;
  currentIsText = entry.isText;
  updateSyntaxLanguage(currentFile, entry.language);
  editor.value = entry.content || '';
  if (plainEditor) plainEditor.textContent = editor.value || '';
  normalizeEditorView();
  updateEditorMeta();
  renderTabs();
  updateSyntaxLanguage(currentFile, entry.language);
  forceHighlightPaint('applyOpenEntry');
  resetCodeSearch();
  updatePreview(editor.value, currentFile);
  rememberRecent(entry);
  void persistState();
  return activeFileIndex;
}

function reopenExistingTabIfNeeded(filePath, entry) {
  const existingIndex = findOpenTabByPath(filePath);
  if (existingIndex >= 0) {
    openFiles[existingIndex] = entry;
    activateTab(existingIndex);
    return true;
  }
  return false;
}

async function refreshTreeKeepingOpenFile() {
  if (!currentRoot) return;
  const openPath = currentFile;
  treeState = { name: currentRoot.split(/[\\/]/).pop(), path: currentRoot, type: 'directory' };
  loadedDirs.clear();
  treeChildren.clear();
  collapsed.clear();
  if (treeState?.path) collapsed.delete(treeState.path);
  await renderTree('local');
  if (openPath) await expandTreeToPath('local', openPath);
  await renderTree('local');
  if (openPath) {
    const result = await window.ideRtk.openFile(openPath).catch(() => null);
    if (result?.ok) {
      const idx = openFiles.findIndex((file) => file.path === openPath);
      if (idx >= 0) openFiles[idx].content = result.content || openFiles[idx].content;
    }
  }
  scrollTreeToActive('local');
}

async function refreshCurrentTree() {
  if (treeMode === 'remote') {
    if (!remoteTreeState?.path) {
      remoteTreeState = { name: sshSelectedHost || 'Servidor', path: getRemoteRootValue(), type: 'directory' };
    }
    remoteLoadedDirs.clear();
    remoteTreeChildren.clear();
    remoteCollapsed.clear();
    if (remoteTreeState?.path) remoteCollapsed.add(remoteTreeState.path);
    await renderTree('remote');
    return;
  }
  await refreshTreeKeepingOpenFile();
}

async function openRemoteFile(filePath) {
  const activeHost = sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0];
  if (!activeHost) {
    pushToast('warn', 'Servidor', 'Carga primero un host SSH.');
    return;
  }
  const result = await window.ideRtk.sshReadFile?.({ ...activeHost, remotePath: filePath });
  if (!result?.ok) {
    pushToast('error', 'Servidor', result?.error || 'No se pudo abrir el archivo remoto.');
    logConsole(`SSH read error: ${result?.error || 'desconocido'}`);
    return;
  }
  const entry = {
    path: filePath,
    name: filePath.split(/[\\/]/).pop(),
    content: result.content || '',
    isText: true,
    language: normalizeLanguage(filePath, getLanguage(filePath), result.content || ''),
    isRemote: true,
    dirty: false,
    openedAt: new Date(),
  };
  if (reopenExistingTabIfNeeded(filePath, entry)) return;
  applyOpenEntry(entry);
}

let _tabDragIndex = -1;

function renderTabs() {
  if (!tabBar) return;
  logConsole(`renderTabs count=${openFiles.length} active=${activeFileIndex}`);
  tabBar.setAttribute('role', 'tablist');
  tabBar.innerHTML = openFiles.map((file, index) => `
    <button class="tab ${index === activeFileIndex ? 'active' : ''} ${file.dirty ? 'dirty' : ''}" data-tab-index="${index}" title="${esc(file.path)}" role="tab" aria-selected="${index === activeFileIndex ? 'true' : 'false'}" draggable="true">
      <span class="tab-close" data-close-index="${index}" role="button" tabindex="0" aria-label="Cerrar ${esc(file.name)}">×</span>
      <span>${esc(file.name)}</span>
    </button>
  `).join('') || '<div class="tab-empty">Sin pestañas abiertas</div>';
  tabBar.querySelectorAll('[data-tab-index]').forEach((btn) => {
    btn.addEventListener('click', () => activateTab(Number(btn.dataset.tabIndex)));
    btn.addEventListener('mousedown', (event) => {
      if (event.button === 1) {
        event.preventDefault();
        closeTab(Number(btn.dataset.tabIndex));
      }
    });
    btn.addEventListener('dragstart', (event) => {
      _tabDragIndex = Number(btn.dataset.tabIndex);
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', String(_tabDragIndex));
      btn.style.opacity = '0.5';
    });
    btn.addEventListener('dragend', () => {
      btn.style.opacity = '';
      _tabDragIndex = -1;
      tabBar.querySelectorAll('.tab').forEach((t) => t.style.borderLeft = '');
    });
    btn.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      const idx = Number(btn.dataset.tabIndex);
      if (idx === _tabDragIndex) return;
      tabBar.querySelectorAll('.tab').forEach((t) => t.style.borderLeft = '');
      btn.style.borderLeft = '2px solid var(--accent)';
    });
    btn.addEventListener('dragleave', () => {
      btn.style.borderLeft = '';
    });
    btn.addEventListener('drop', (event) => {
      event.preventDefault();
      btn.style.borderLeft = '';
      const from = _tabDragIndex;
      const to = Number(btn.dataset.tabIndex);
      if (from < 0 || from === to) return;
      const [moved] = openFiles.splice(from, 1);
      openFiles.splice(to, 0, moved);
      activeFileIndex = to;
      if (from < activeFileIndex && to >= activeFileIndex) activeFileIndex--;
      renderTabs();
    });
  });
  tabBar.querySelectorAll('[data-close-index]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      closeTab(Number(btn.dataset.closeIndex));
    });
    btn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        closeTab(Number(btn.dataset.closeIndex));
      }
    });
  });
  updateCenterChromeVisibility();
}

function refreshActiveTreeSelection() {
  treeView?.querySelectorAll?.('.node').forEach((nodeEl) => {
    nodeEl.classList.toggle('active', nodeEl.dataset.path === currentFile);
  });
}

function showWelcome(show) {
  const overlay = document.getElementById('welcomeOverlay');
  if (!overlay) return;
  overlay.classList.toggle('hidden', !show);
  if (show) {
    const list = document.getElementById('welcomeRecentList');
    if (list && recentFiles.length > 0) {
      list.innerHTML = '<div style="font-size:12px;color:var(--muted);margin-bottom:6px;font-weight:600">Recientes</div>' +
        recentFiles.slice(0, 5).map((f) =>
          `<div class="welcome-recent-item" data-path="${esc(f.path)}"><i class="fa-regular fa-file" style="margin-right:6px"></i>${esc(f.name)}</div>`
        ).join('');
      list.querySelectorAll('.welcome-recent-item').forEach((el) => {
        el.addEventListener('click', () => openFile(el.dataset.path));
      });
    }
  }
}

function isTransientEmptyTab(file) {
  return Boolean(file && file.path.startsWith('untitled-') && !file.content && !file.dirty);
}

let _quickOpenFiles = [];
let _quickOpenSelect = -1;

function showQuickOpen() {
  const overlay = document.getElementById('quickOpenOverlay');
  const input = document.getElementById('quickOpenInput');
  const results = document.getElementById('quickOpenResults');
  if (!overlay || !input || !results) return;
  if (!currentRoot) { pushToast('warn', 'Abrir archivo', 'Abre una carpeta primero.'); return; }
  overlay.classList.remove('hidden');
  input.value = '';
  results.innerHTML = '<div style="padding:12px;color:var(--muted);text-align:center">Cargando...</div>';
  input.focus();
  _quickOpenFiles = [];
  _quickOpenSelect = -1;
  window.ideRtk.listFiles(currentRoot).then((res) => {
    if (!res.ok) { results.innerHTML = '<div style="padding:12px;color:var(--muted);text-align:center">Error al listar archivos</div>'; return; }
    _quickOpenFiles = (res.items || []).filter((f) => f.type === 'file');
    renderQuickOpenResults('');
  });
}

function renderQuickOpenResults(query) {
  const results = document.getElementById('quickOpenResults');
  if (!results) return;
  const q = query.toLowerCase().trim();
  const filtered = !q ? _quickOpenFiles.slice(0, 50) : _quickOpenFiles.filter((f) => f.name.toLowerCase().includes(q) || f.path.toLowerCase().includes(q)).slice(0, 50);
  _quickOpenSelect = -1;
  results.innerHTML = filtered.length
    ? filtered.map((f, i) => `<button class="quick-open-item" data-idx="${i}" data-path="${esc(f.path)}"><i class="fa-regular fa-file"></i>${esc(f.name)}<small>${esc(f.path.replace(currentRoot, '').replace(/^[/\\]/, ''))}</small></button>`).join('')
    : '<div style="padding:12px;color:var(--muted);text-align:center">Sin resultados</div>';
  results.querySelectorAll('.quick-open-item').forEach((btn) => {
    btn.addEventListener('click', () => { hideQuickOpen(); openFile(btn.dataset.path); });
    btn.addEventListener('mousemove', () => {
      results.querySelectorAll('.quick-open-item').forEach((e) => e.classList.remove('active'));
      btn.classList.add('active');
      _quickOpenSelect = Number(btn.dataset.idx);
    });
  });
}

function hideQuickOpen() {
  const overlay = document.getElementById('quickOpenOverlay');
  if (overlay) overlay.classList.add('hidden');
  editor?.focus();
}

// Hotkey for quick open is in document keydown handler (Ctrl+P)
// Need to add keyboard navigation inside quick open
document.addEventListener('keydown', (event) => {
  const overlay = document.getElementById('quickOpenOverlay');
  if (!overlay || overlay.classList.contains('hidden')) return;
  if (event.key === 'Escape') { hideQuickOpen(); event.preventDefault(); return; }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const items = overlay.querySelectorAll('.quick-open-item');
    if (!items.length) return;
    _quickOpenSelect = Math.min(_quickOpenSelect + 1, items.length - 1);
    items.forEach((e, i) => e.classList.toggle('active', i === _quickOpenSelect));
    items[_quickOpenSelect]?.scrollIntoView({ block: 'nearest' });
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    const items = overlay.querySelectorAll('.quick-open-item');
    if (!items.length) return;
    _quickOpenSelect = Math.max(_quickOpenSelect - 1, 0);
    items.forEach((e, i) => e.classList.toggle('active', i === _quickOpenSelect));
    items[_quickOpenSelect]?.scrollIntoView({ block: 'nearest' });
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    const items = overlay.querySelectorAll('.quick-open-item');
    const active = _quickOpenSelect >= 0 ? items[_quickOpenSelect] : items[0];
    if (active) { hideQuickOpen(); openFile(active.dataset.path); }
    return;
  }
});

document.getElementById('quickOpenInput')?.addEventListener('input', function () {
  renderQuickOpenResults(this.value);
});

function closeTransientActiveTab() {
  if (activeFileIndex < 0) return;
  const active = openFiles[activeFileIndex];
  if (!isTransientEmptyTab(active)) return;
  closeTab(activeFileIndex);
}

function activateTab(index) {
  const file = openFiles[index];
  if (!file) return;
  logConsole(`activateTab index=${index} path=${file.path} len=${String(file.content || '').length}`);
  ensureEditorPreviewOpen();
  showWelcome(false);
  activeFileIndex = index;
  currentFile = file.path;
  currentIsText = file.isText;
  updateSyntaxLanguage(currentFile, file.language);
  editor.value = file.content;
  if (plainEditor) plainEditor.textContent = '';
  if (highlightLayer) highlightLayer.innerHTML = '';
  normalizeEditorView();
  lastOpenedAt = file.openedAt || new Date();
  updateEditorMeta();
  renderTabs();
  scheduleTreeRender();
  forceHighlightPaint('activateTab');
  resetCodeSearch();
  logConsole(`activateTab preview check path=${currentFile} auto=${previewAutoEnabled}`);
  updatePreview(editor.value, currentFile);
  void renderActiveTree();
  rememberRecent(file);
  if (splitFile?.path === currentFile) {
    splitEditor.value = editor.value;
    syncSplitHighlight();
  }
}

function closeTab(index) {
  if (index < 0 || index >= openFiles.length) return;
  const file = openFiles[index];
  if (file?.dirty && !confirm(`El archivo "${file.name}" tiene cambios sin guardar. ¿Cerrar igual?`)) return;
  openFiles.splice(index, 1);
  if (!openFiles.length) {
    activeFileIndex = -1;
    currentFile = null;
    currentLanguage = 'text';
    editor.value = '';
    if (plainEditor) plainEditor.textContent = '';
    editorMeta.textContent = 'Sin archivo';
    highlightLayer.innerHTML = '';
    renderTabs();
    previewFrame.srcdoc = '';
    previewStatus.textContent = 'Abre un archivo .html para ver el preview';
    previewLastSignature = '';
    clearPreviewTimers();
    showWelcome(true);
    return;
  }
  activeFileIndex = Math.max(0, Math.min(index, openFiles.length - 1));
  activateTab(activeFileIndex);
}

async function openFile(filePath) {
  const result = await window.ideRtk.openFile(filePath);
  if (!result.ok) return;
  showWelcome(false);
  closeTransientActiveTab();
  logConsole(`openFile ${result.filePath} len=${String(result.content || '').length} isText=${Boolean(result.isText)} lang=${result.language || 'text'}`);
  const entry = {
    path: result.filePath,
    name: result.filePath.split(/[\\/]/).pop(),
    content: result.content || '',
    isText: result.isText,
    language: normalizeLanguage(result.filePath, result.language, result.content || ''),
    isRemote: false,
    dirty: false,
    openedAt: new Date(),
  };
  ensureEditorPreviewOpen();
  if (reopenExistingTabIfNeeded(result.filePath, entry)) {
    logConsole(`openFile reused tab path=${entry.path}`);
    await expandTreeToPath('local', entry.path);
    scheduleTreeRender();
    void renderActiveTree();
    return;
  }
  normalizeEditorView();
  applyOpenEntry(entry);
  logConsole(`openFile preview check path=${entry.path} auto=${previewAutoEnabled}`);
  updateSyntaxLanguage(entry.path, entry.language);
  await expandTreeToPath('local', entry.path);
  scheduleTreeRender();
  void renderActiveTree();
}

async function restoreSavedTabs() {
  if (!Array.isArray(resumeTabs) || !resumeTabs.length) return;
  logConsole(`restoreSavedTabs count=${resumeTabs.length}`);
  const savedTabs = [...resumeTabs];
  resumeTabs = [];
  for (const saved of savedTabs) {
    if (!saved?.path) continue;
    const result = await window.ideRtk.openFile(saved.path);
    if (!result.ok) continue;
    const entry = {
      path: saved.path,
      name: saved.name || saved.path.split(/[\\/]/).pop(),
      content: saved.dirty ? String(saved.content ?? '') : (result.content || ''),
      isText: saved.isText !== false,
      language: normalizeLanguage(saved.path, saved.language || result.language, saved.dirty ? String(saved.content ?? '') : (result.content || '')),
      isRemote: Boolean(saved.isRemote),
      dirty: Boolean(saved.dirty),
      openedAt: saved.openedAt ? new Date(saved.openedAt) : new Date(),
    };
    if (findOpenTabByPath(entry.path) >= 0) {
      continue;
    }
    openFiles.push(entry);
  }
  if (!openFiles.length) return;
  const preferred = resumeActivePath ? openFiles.findIndex((file) => file.path === resumeActivePath) : 0;
  activeFileIndex = preferred >= 0 ? preferred : 0;
  currentFile = openFiles[activeFileIndex].path;
  currentIsText = openFiles[activeFileIndex].isText;
  updateSyntaxLanguage(currentFile, openFiles[activeFileIndex].language);
  editor.value = openFiles[activeFileIndex].content || '';
  logConsole(`restoreSavedTabs active path=${currentFile} len=${String(editor.value || '').length}`);
  if (plainEditor) plainEditor.textContent = '';
  if (highlightLayer) highlightLayer.innerHTML = '';
  normalizeEditorView();
  columnsCount = 3;
  previewVisible = true;
  centerHidden = false;
  previewMode = 'normal';
  rightViewMode = 'web';
  updateRightViewModeButtons();
  applyTheme();
  applyPreviewVisibility();
  logConsole(`restoreSavedTabs preview check path=${currentFile} auto=${previewAutoEnabled}`);
  if (openFiles[activeFileIndex].dirty) markDirty(currentFile);
  updateEditorMeta();
  renderTabs();
  updateSyntaxLanguage(currentFile, openFiles[activeFileIndex].language);
  await expandTreeToPath(treeMode, currentFile);
  scheduleTreeRender();
  forceHighlightPaint('restoreSavedTabs');
  resetCodeSearch();
  updatePreview(editor.value, currentFile);
  logConsole(`restoreSavedTabs done openFiles=${openFiles.length} active=${currentFile || '-'}`);
  void renderActiveTree();
  rememberRecent(openFiles[activeFileIndex]);
  if (splitFile?.path === currentFile) {
    splitEditor.value = editor.value;
    syncSplitHighlight();
  }
}

openFolderBtn.addEventListener('click', async () => {
  const result = await window.ideRtk.pickFolder();
  logConsole(`pickFolder result ok=${Boolean(result?.ok)} root=${result?.rootPath || '-'} tree=${Boolean(result?.tree)}`);
  if (!result.ok) {
    if (result.permissionDenied) {
      alert('Necesitas permitir el acceso para abrir una carpeta.');
    }
    return;
  }
  currentRoot = result.rootPath || result.folderPath || currentRoot || null;
  treeState = result.tree || (currentRoot ? { name: currentRoot.split(/[\\/]/).pop(), path: currentRoot, type: 'directory' } : null);
  if (!currentRoot) {
    logConsole('pickFolder: no rootPath received');
    pushToast('warn', 'Carpeta', 'No se recibió una ruta de carpeta válida.');
    return;
  }
  collapsed.clear();
  loadedDirs.clear();
  treeChildren.clear();
  treeMode = 'local';
  if (treeState?.path) collapsed.delete(treeState.path);
  applyTreeMode();
  scheduleTreeRender();
  renderRecentPanels();
  writeLocalState({ lastRootPath: currentRoot || '' });
  const saved = await persistState();
  logConsole(`Carpeta guardada: ${currentRoot} persistOk=${Boolean(saved?.ok)}`);
});

openImporterBtn?.addEventListener('click', async () => {
  openImporterModal();
  if (!importerState.filePath) {
    await pickAndParseImportFile();
  }
});

closeImporterBtn?.addEventListener('click', () => closeImporterModal());
importerModal?.addEventListener('click', (event) => {
  if (event.target === importerModal) closeImporterModal();
});
pickImporterFileBtn?.addEventListener('click', async () => {
  await pickAndParseImportFile();
});
copyImporterJsonBtn?.addEventListener('click', async () => {
  await copyImporterJson();
});
importerRunBtn?.addEventListener('click', async () => {
  await runImporter();
});
copyImporterConsoleBtn?.addEventListener('click', async () => {
  await copyImporterConsole();
});

if (leftPanel) {
  ['dragenter', 'dragover'].forEach((eventName) => {
    leftPanel.addEventListener(eventName, (event) => {
      if (treeMode !== 'local') return;
      event.preventDefault();
      event.stopPropagation();
      leftDropDepth += 1;
      setLeftDropState(true, 'Suelta carpetas o archivos para importar');
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'copy';
      }
    });
  });
  leftPanel.addEventListener('dragleave', (event) => {
    if (treeMode !== 'local') return;
    event.preventDefault();
    event.stopPropagation();
    leftDropDepth = Math.max(0, leftDropDepth - 1);
    if (leftDropDepth === 0) {
      setLeftDropState(false);
    }
  });
  leftPanel.addEventListener('drop', handleLeftDrop);
  leftPanel.addEventListener('mouseover', (event) => {
    if (treeMode !== 'local') return;
    const targetDir = getDropTargetDirectory(event.target);
    leftPanel.dataset.dropTarget = targetDir || '';
  });
}

tabBar?.addEventListener('dragenter', (event) => {
  const hasLocalFiles = getDroppedLocalPaths(event).length > 0;
  if (!hasLocalFiles) return;
  event.preventDefault();
  event.stopPropagation();
  tabBar.classList.add('drag-over');
});
tabBar?.addEventListener('dragover', (event) => {
  const hasLocalFiles = getDroppedLocalPaths(event).length > 0;
  if (!hasLocalFiles) return;
  event.preventDefault();
  event.stopPropagation();
  if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
  tabBar.classList.add('drag-over');
});
tabBar?.addEventListener('dragleave', (event) => {
  event.preventDefault();
  event.stopPropagation();
  tabBar.classList.remove('drag-over');
});
tabBar?.addEventListener('drop', async (event) => {
  event.preventDefault();
  event.stopPropagation();
  tabBar.classList.remove('drag-over');
  const sourcePaths = getDroppedLocalPaths(event);
  if (!sourcePaths.length) return;
  const inspected = await window.ideRtk.inspectPaths?.({ paths: sourcePaths }) || { ok: false, items: [] };
  const firstFile = Array.isArray(inspected.items) ? inspected.items.find((item) => item.isFile) : null;
  if (!firstFile?.path) {
    pushToast('warn', 'Tabs', 'Suelta un archivo para abrirlo en una pestaña.');
    return;
  }
  await openFile(firstFile.path);
  pushToast('success', 'Tabs', `Archivo abierto: ${shortName(firstFile.path)}.`);
});

const serverTreeView = document.getElementById('serverTreeView');
if (serverTreeView) {
  ['dragenter', 'dragover'].forEach((eventName) => {
    serverTreeView.addEventListener(eventName, (event) => {
      if (treeMode !== 'remote') return;
      const hasLocalFiles = getDroppedLocalPaths(event).length > 0;
      if (!hasLocalFiles) return;
      event.preventDefault();
      event.stopPropagation();
      serverTreeView.classList.add('drag-over');
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    });
  });
  serverTreeView.addEventListener('dragleave', (event) => {
    if (treeMode !== 'remote') return;
    event.preventDefault();
    event.stopPropagation();
    serverTreeView.classList.remove('drag-over');
  });
  serverTreeView.addEventListener('drop', async (event) => {
    if (treeMode !== 'remote') return;
    serverTreeView.classList.remove('drag-over');
    await handleRemoteDrop(event);
  });
}

connectSshBtn?.addEventListener('click', () => {
  setSshModalVisible(true);
  renderSshProfiles();
  const activeProfile = getActiveSshProfile() || sshProfiles[0];
  if (activeProfile) {
    if (sshConfigPathInput && !sshConfigPathInput.value) sshConfigPathInput.value = activeProfile.configPath || '/Users/idavidmorales/.ssh/config';
    if (sshRemoteRootInput && !sshRemoteRootInput.value) sshRemoteRootInput.value = activeProfile.remoteRoot || '/var/www/html';
    sshSelectedHost = activeProfile.selectedHost || sshSelectedHost;
  }
  renderSshHosts(sshSelectedHost);
  updateSshPreviewSelection();
});

refreshTreeBtn?.addEventListener('click', async () => {
  await refreshCurrentTree();
});

treeLocalTab?.addEventListener('click', async () => {
  treeMode = 'local';
  applyTreeMode();
  await renderActiveTree();
});

treeServerTab?.addEventListener('click', async () => {
  treeMode = 'remote';
  applyTreeMode();
  const activeHost = sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0];
  if (!activeHost) {
    pushToast('warn', 'Servidor', 'Carga un host SSH primero para ver el árbol remoto.');
    return;
  }
  remoteTreeState = remoteTreeState || { name: activeHost.host, path: sshRemoteRoot || '.', type: 'directory' };
  if (!remoteTreeState.path) remoteTreeState.path = '.';
  await renderActiveTree();
});

consoleBtn?.addEventListener('click', () => toggleConsole(consoleDrawer?.classList.contains('hidden')));

copyConsoleBtn?.addEventListener('click', async () => {
  const text = consoleLog.join('\n') || 'Sin mensajes en consola';
  await window.ideRtk.copyText({ text });
});

closeConsoleBtn?.addEventListener('click', () => toggleConsole(false));
consoleCopyBtn?.addEventListener('click', async () => {
  const text = consoleLog.join('\n') || 'Sin mensajes en consola';
  await window.ideRtk.copyText({ text });
  pushToast('success', 'Consola copiada', 'El contenido de la consola se copió al portapapeles.');
});

closeSshModalBtn?.addEventListener('click', () => setSshModalVisible(false));
sshModal?.addEventListener('click', (event) => {
  if (event.target === sshModal) setSshModalVisible(false);
});
sshHostSelect?.addEventListener('change', () => {
  setSelectedSshHost(sshHostSelect.value || '');
  updateActiveSshProfile({ selectedHost: sshSelectedHost });
  renderSshHosts(sshSelectedHost);
  updateSshPreviewSelection();
});
sshRemoteRootInput?.addEventListener('change', () => {
  sshRemoteRoot = getRemoteRootValue();
  updateActiveSshProfile({ remoteRoot: sshRemoteRoot });
  void persistState();
});
function updateSshPreviewSelection() {
  if (!sshHostSelect || !sshPreview) return;
  const active = getActiveSshHost(sshHostSelect.value || sshSelectedHost);
  sshPreview.textContent = active
    ? `Host: ${active.host}\nHostName: ${active.hostName || '-'}\nUser: ${active.user || '-'}\nIdentityFile: ${active.identityFile || '-'}\nPort: ${active.port || '-'}`
    : 'Carga un archivo SSH config para ver hosts.';
}

async function connectSelectedSsh() {
  const active = getActiveSshHost(sshHostSelect?.value || sshSelectedHost);
  if (!active) {
    setSshStatus('error', 'Sin host');
    pushToast('warn', 'SSH', 'Primero carga un archivo de configuración SSH.');
    logConsole('SSH: intento sin host configurado');
    return;
  }
  setSelectedSshHost(active.host);
  setSshStatus('connecting', `Conectando a ${active.host}`);
  pushToast('info', 'SSH', `Conectando a ${active.host}...`);
  logConsole(`SSH: conectando a ${active.host}`);
  const result = await window.ideRtk.sshConnect(active);
  if (!result.ok) {
    setSshStatus('error', `Error en ${active.host}`);
    const detail = result.error === 'ssh_client_not_found'
      ? 'No se encontró el cliente ssh. En Windows instala OpenSSH o usa PowerShell con OpenSSH habilitado.'
      : (result.error || result.hint || 'No se pudo conectar');
    pushToast('error', 'SSH falló', detail);
    logConsole(`SSH error: ${detail}`);
    return;
  }
  setSshStatus('connected', `Conectado a ${active.host}`);
  pushToast('success', 'SSH conectado', `Conexión exitosa con ${active.host}`);
  logConsole(`SSH conectado: ${active.host}`);
  sshRemoteRoot = getRemoteRootValue();
  updateActiveSshProfile({
    configPath: String(sshConfigPathInput?.value || sshConfigData.path || '').trim(),
    selectedHost: active.host,
    identityFile: String(sshIdentityFileInput?.value || '').trim(),
    platform: String(sshPlatformSelect?.value || 'auto'),
    remoteRoot: sshRemoteRoot,
  });
  treeMode = 'remote';
  remoteTreeState = { name: active.host, path: sshRemoteRoot, type: 'directory' };
  remoteCollapsed.clear();
  remoteLoadedDirs.clear();
  remoteTreeChildren.clear();
  if (remoteTreeState?.path) remoteCollapsed.add(remoteTreeState.path);
  applyTreeMode();
  await renderTree('remote');
  void persistState();
}

async function disconnectSsh() {
  sshStatus = 'disconnected';
  setSshStatus('disconnected', 'Desconectado');
  treeMode = 'local';
  remoteTreeState = null;
  remoteCollapsed.clear();
  remoteLoadedDirs.clear();
  remoteTreeChildren.clear();
  applyTreeMode();
  await renderActiveTree();
  logConsole('SSH desconectado');
  pushToast('info', 'SSH', 'Sesión desconectada.');
}

sshHostSelect?.addEventListener('change', updateSshPreviewSelection);
loadSshConfigBtn?.addEventListener('click', async () => {
  await loadSshConfig(sshConfigPathInput?.value);
  updateSshPreviewSelection();
});
saveSshConfigBtn?.addEventListener('click', async () => {
  await saveSshConfigState();
});
newSshProfileBtn?.addEventListener('click', async () => {
  const current = getActiveSshProfile() || createDefaultSshProfile();
  const profile = {
    ...current,
    id: `ssh-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: `Config ${sshProfiles.length + 1}`,
  };
  sshProfiles = [...sshProfiles, profile];
  activeSshProfileId = profile.id;
  renderSshProfiles();
  syncSshProfileFields(profile);
  await persistState();
  pushToast('success', 'SSH', 'Nueva configuración agregada.');
});
copySshBtn?.addEventListener('click', async () => {
  const active = sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0];
  if (!active) return;
  await window.ideRtk.copyText({ text: `ssh ${active.user ? `${active.user}@` : ''}${active.hostName || active.host}` });
  pushToast('success', 'Comando copiado', 'Se copió el comando SSH.');
});
document.getElementById('connectSshNowBtn')?.addEventListener('click', connectSelectedSsh);
document.getElementById('disconnectSshBtn')?.addEventListener('click', disconnectSsh);

document.addEventListener('click', () => hideContextMenu());
document.addEventListener('contextmenu', (event) => {
  if (event.target.closest?.('#contextMenu')) return;
  if (event.target.closest?.('.node')) return;
  event.preventDefault();
  showAppContextMenu(event.clientX, event.clientY, event.target);
});
appContextMenu?.addEventListener('click', async (event) => {
  const btn = event.target.closest?.('button[data-action]');
  if (!btn) return;
  hideContextMenu();
  if (btn.dataset.action === 'devtools') {
    await window.ideRtk.openDevTools?.({});
    return;
  }
  if (btn.dataset.action === 'inspect') {
    const x = Number(appContextMenu.dataset.targetX || 0);
    const y = Number(appContextMenu.dataset.targetY || 0);
    await window.ideRtk.openDevTools?.({ x, y });
  }
});
closeNameModalBtn?.addEventListener('click', hideNameModal);
nameModalCancelBtn?.addEventListener('click', hideNameModal);
nameModalConfirmBtn?.addEventListener('click', confirmNameModal);
nameModal?.addEventListener('click', (event) => {
  if (event.target === nameModal) hideNameModal();
});
nameModalInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    confirmNameModal();
  }
  if (event.key === 'Escape') hideNameModal();
});
contextMenu?.addEventListener('click', async (event) => {
  const btn = event.target.closest('button[data-action]');
  if (!btn || !contextTarget) return;
  const action = btn.dataset.action;
  const target = contextTarget;
  hideContextMenu();
  if (action === 'new-file' && target.type === 'directory') {
    openNameModal({
      title: 'Nuevo archivo',
      label: 'Nombre del archivo',
      placeholder: 'nuevo-archivo.txt',
      confirmText: 'Crear archivo',
      action: 'new-file',
      payload: target,
      value: 'nuevo-archivo.txt',
    });
    return;
  }
  if (action === 'new-folder' && target.type === 'directory') {
    openNameModal({
      title: 'Nueva carpeta',
      label: 'Nombre de la carpeta',
      placeholder: 'nueva-carpeta',
      confirmText: 'Crear carpeta',
      action: 'new-folder',
      payload: target,
      value: 'nueva-carpeta',
    });
    return;
  }
  if (action === 'rename') {
    openNameModal({
      title: 'Renombrar',
      label: 'Nuevo nombre',
      placeholder: target.path.split(/[\\/]/).pop(),
      confirmText: 'Renombrar',
      action: 'rename',
      payload: target,
      value: target.path.split(/[\\/]/).pop(),
    });
    return;
  }
  if (action === 'delete') {
    const label = target.path.split(/[\\/]/).pop();
    if (!confirm(`¿Eliminar "${label}"? Esta acción no se puede deshacer.`)) return;
    const result = await window.ideRtk.deletePath({ targetPath: target.path });
    if (result.ok) {
      if (currentFile === target.path) {
        currentFile = null;
        editor.value = '';
      }
      await refreshCurrentTree();
    }
    return;
  }
  if (action === 'edit' && target.type === 'file') {
    await openFile(target.path);
  }
  if (action === 'open-explorer') {
    await window.ideRtk.openInExplorer?.(target.path);
    return;
  }
  if (action === 'download') {
    const result = treeMode === 'remote'
      ? await window.ideRtk.sshDownloadPath?.({ ...sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0], remotePath: target.path })
      : await window.ideRtk.downloadPath?.({ sourcePath: target.path });
    if (result?.ok) {
      pushToast('success', 'Descarga', `Guardado en ${result.destinationPath}`);
      logConsole(`download ok source=${result.sourcePath} dest=${result.destinationPath} type=${result.type}`);
    } else if (result?.permissionDenied) {
      pushToast('warn', 'Descarga', 'Se canceló el permiso para descargar el elemento.');
    } else {
      pushToast('error', 'Descarga', result?.error || 'No se pudo descargar el elemento.');
      logConsole(`download error source=${target.path} error=${result?.error || 'unknown'}`);
    }
    return;
  }
  if (action === 'download-zip') {
    if (treeMode === 'remote') {
      pushToast('warn', 'Descarga ZIP', 'La descarga ZIP de servidor no está disponible todavía.');
      logConsole(`download zip remote unsupported source=${target.path}`);
      return;
    }
    if (target.type !== 'directory') return;
    const result = await window.ideRtk.downloadPath?.({ sourcePath: target.path, preferZip: true });
    if (result?.ok) {
      pushToast('success', 'Descarga ZIP', `Guardado en ${result.destinationPath}`);
      logConsole(`download zip ok source=${result.sourcePath} dest=${result.destinationPath} type=${result.type}`);
    } else if (result?.permissionDenied) {
      pushToast('warn', 'Descarga ZIP', 'Se canceló el permiso para descargar la carpeta.');
    } else {
      pushToast('error', 'Descarga ZIP', result?.error || 'No se pudo comprimir la carpeta.');
      logConsole(`download zip error source=${target.path} error=${result?.error || 'unknown'}`);
    }
  }
});
editor?.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  event.stopPropagation();
  showEditorContextMenu(event.clientX, event.clientY);
});
editorContextMenu?.addEventListener('click', async (event) => {
  const btn = event.target.closest?.('button[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  hideContextMenu();
  editor.focus();
  if (action === 'select-all') {
    editor.select();
    return;
  }
  if (action === 'copy') {
    document.execCommand('copy');
    return;
  }
  if (action === 'cut') {
    document.execCommand('cut');
    if (currentFile) {
      editor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return;
  }
  if (action === 'paste') {
    const clipboardText = await window.ideRtk.readClipboard?.();
    const text = clipboardText?.ok ? String(clipboardText.text || '') : '';
    if (!text) return;
    const start = editor.selectionStart ?? editor.value.length;
    const end = editor.selectionEnd ?? editor.value.length;
    const value = editor.value;
    editor.value = `${value.slice(0, start)}${text}${value.slice(end)}`;
    const next = start + text.length;
    editor.setSelectionRange(next, next);
    editor.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }
  if (action === 'download-current') {
    if (!currentFile) {
      pushToast('warn', 'Descarga', 'No hay archivo activo.');
      return;
    }
    const result = treeMode === 'remote'
      ? await window.ideRtk.sshDownloadPath?.({ ...sshConfigData.hosts.find((host) => host.host === sshHostSelect?.value) || sshConfigData.hosts[0], remotePath: currentFile })
      : await window.ideRtk.downloadPath?.({ sourcePath: currentFile });
    if (result?.ok) {
      pushToast('success', 'Descarga', `Guardado en ${result.destinationPath}`);
      logConsole(`download current ok source=${result.sourcePath} dest=${result.destinationPath} type=${result.type}`);
    } else if (result?.permissionDenied) {
      pushToast('warn', 'Descarga', 'Se canceló el permiso para descargar el archivo.');
    } else {
      pushToast('error', 'Descarga', result?.error || 'No se pudo descargar el archivo.');
      logConsole(`download current error source=${currentFile} error=${result?.error || 'unknown'}`);
    }
  }
});

reloadExternalBtn?.addEventListener('click', reloadCurrentFile);
dismissExternalBtn?.addEventListener('click', () => {
  fileChangeBanner?.classList.add('hidden');
  externalChangePending = null;
  if (editStatus) editStatus.textContent = currentFile ? 'Listo' : 'Sin archivo';
});

saveFileBtn.addEventListener('click', async () => {
  const result = await saveActiveFile();
  if (result?.ok) {
    showSaveSuccess('Archivo guardado correctamente');
    refreshPreviewNow();
  } else {
    pushToast('error', 'Guardar', result?.error || 'No se pudo guardar el archivo.');
    logConsole(`Guardar error: ${result?.error || 'desconocido'}`);
  }
});

function cycleEditorFontSize() {
  const order = ['small', 'medium', 'large'];
  const next = order[(order.indexOf(editorFontSize) + 1) % order.length];
  editorFontSize = next;
  applyTheme();
  void persistState();
  pushToast('info', 'Tamaño del código', `Vista cambiada a ${next}.`);
}

function stepEditorFontSize(delta = 1) {
  const order = ['small', 'medium', 'large'];
  const current = Math.max(0, order.indexOf(editorFontSize));
  const nextIndex = Math.max(0, Math.min(order.length - 1, current + delta));
  const next = order[nextIndex];
  if (next === editorFontSize) return;
  editorFontSize = next;
  applyTheme();
  void persistState();
  pushToast('info', 'Tamaño del código', `Vista cambiada a ${next}.`);
}

document.getElementById('fontSizeBtn')?.addEventListener('click', cycleEditorFontSize);
fontSizeDownBtn?.addEventListener('click', () => stepEditorFontSize(-1));
fontSizeUpBtn?.addEventListener('click', () => stepEditorFontSize(1));

newFileBtn.addEventListener('click', () => {
  const untitled = {
    path: `${currentRoot || 'untitled'}/untitled-${Date.now()}.txt`,
    name: `untitled-${Date.now()}.txt`,
    content: '',
    isText: true,
    language: 'text',
    dirty: false,
    openedAt: new Date(),
  };
  openFiles.push(untitled);
  activateTab(openFiles.length - 1);
  void persistState();
});

toggleRecentBtn?.addEventListener('click', () => recentPanel?.classList.toggle('hidden'));
toggleFavBtn?.addEventListener('click', () => favoritesPanel?.classList.toggle('hidden'));
toggleSidebarBtn?.addEventListener('click', () => {
  sidebarCompact = !sidebarCompact;
  void persistState();
  applyTheme();
});

let terminalCwd = null;
let terminalMode = 'local';

function getTerminalSshPayload() {
  const activeHost = getActiveSshHost(sshHostSelect?.value || sshSelectedHost) || {};
  return {
    host: activeHost.host || sshHostSelect?.value || '',
    hostName: activeHost.hostName || '',
    user: activeHost.user || '',
    port: activeHost.port || '',
    identityFile: activeHost.identityFile || sshIdentityFileInput?.value || '',
  };
}

function appendTerminal(text) {
  if (!terminalOutput) return;
  terminalOutput.textContent += `${text}\n`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function appendTerminalPrompt() {
  const dir = terminalCwd || currentRoot || '~';
  const prompt = terminalMode === 'ssh' ? `ssh:${dir}$ ` : `${dir}$ `;
  if (!terminalOutput) return;
  terminalOutput.textContent += prompt;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const terminalModeBtn = document.getElementById('terminalModeBtn');

toggleTerminalBtn?.addEventListener('click', () => {
  terminalPanel?.classList.toggle('hidden');
  if (!terminalPanel?.classList.contains('hidden') && !terminalCwd) {
    terminalCwd = currentRoot;
    appendTerminal(`Terminal ${terminalMode === 'ssh' ? 'SSH' : 'Local'} — "${terminalCwd}"`);
    appendTerminalPrompt();
  }
});

terminalModeBtn?.addEventListener('click', () => {
  terminalMode = terminalMode === 'ssh' ? 'local' : 'ssh';
  terminalModeBtn.innerHTML = terminalMode === 'ssh' ? '<i class="fa-solid fa-server"></i>' : '<i class="fa-solid fa-laptop"></i>';
  terminalModeBtn.classList.toggle('ssh-mode', terminalMode === 'ssh');
  appendTerminal(`→ Modo ${terminalMode === 'ssh' ? 'SSH' : 'Local'}`);
  if (terminalMode === 'ssh') {
    terminalCwd = '~';
    const payload = getTerminalSshPayload();
    if (payload.host) appendTerminal(`  Servidor: ${payload.user ? payload.user + '@' : ''}${payload.host}`);
  } else {
    terminalCwd = currentRoot;
  }
  appendTerminalPrompt();
});

terminalForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const raw = String(terminalInput.value || '').trim();
  if (!raw) return;
  terminalInput.value = '';
  if (!terminalCwd) terminalCwd = currentRoot;
  if (!terminalCwd) { appendTerminal('! Abre una carpeta primero'); appendTerminalPrompt(); return; }

  if (raw === 'clear' || raw === 'cls') {
    terminalOutput.textContent = '';
    appendTerminalPrompt();
    return;
  }

  const cdMatch = raw.match(/^cd(?:\s+(.+))?$/);
  if (cdMatch) {
    appendTerminal(`> ${raw}`);
    const target = cdMatch[1] || '~';
    if (terminalMode === 'ssh') {
      const result = await window.ideRtk.sshExec({ ...getTerminalSshPayload(), command: `cd ${target} && pwd` });
      if (!result.ok) {
        appendTerminal(`! ${result.error}`);
      } else {
        const dir = result.stdout?.trim();
        if (dir) terminalCwd = dir;
      }
    } else {
      const result = await window.ideRtk.runCommand({ cwd: terminalCwd, command: `cd ${target} && pwd` });
      if (!result.ok) {
        appendTerminal(`! ${result.error}`);
      } else {
        const dir = result.stdout?.trim();
        if (dir) terminalCwd = dir;
      }
    }
    appendTerminalPrompt();
    return;
  }

  appendTerminal(`> ${raw}`);
  if (terminalMode === 'ssh') {
    const result = await window.ideRtk.sshExec({ ...getTerminalSshPayload(), command: raw });
    if (!result.ok) {
      appendTerminal(`! ${result.error}`);
    } else {
      if (result.stdout) appendTerminal(result.stdout.trimEnd());
      if (result.stderr) appendTerminal(result.stderr.trimEnd());
    }
  } else {
    const result = await window.ideRtk.runCommand({ cwd: terminalCwd, command: raw });
    if (!result.ok) {
      appendTerminal(`! ${result.error}`);
    } else {
      if (result.stdout) appendTerminal(result.stdout.trimEnd());
      if (result.stderr) appendTerminal(result.stderr.trimEnd());
    }
  }
  appendTerminalPrompt();
});

editor.addEventListener('input', () => {
  if (currentFile) {
    const active = openFiles[activeFileIndex];
    if (active) {
      active.content = editor.value;
      active.dirty = true;
    }
    markDirty(currentFile);
    scheduleEditorHighlight('typing');
    if (editorSearchTimer) clearTimeout(editorSearchTimer);
    if (String(codeSearchInput?.value || '').trim()) {
      editorSearchTimer = setTimeout(() => {
        editorSearchTimer = null;
        updateCodeSearchState();
      }, 120);
    }
    scheduleEditorAuxRefresh();
    if (autosaveTimer) clearTimeout(autosaveTimer);
    if (autosaveEnabled) {
      autosaveTimer = setTimeout(async () => {
        if (!currentFile) return;
        const activeNow = openFiles[activeFileIndex];
        if (!activeNow?.dirty) return;
        const result = await window.ideRtk.saveFile({ filePath: currentFile, content: editor.value });
        if (!result?.ok) {
          pushToast('error', 'Autosave', result?.error || 'No se pudo guardar automáticamente.');
          return;
        }
        activeNow.dirty = false;
        clearDirty(currentFile);
        renderTabs();
        showSaveSuccess('Archivo guardado automáticamente');
        refreshPreviewNow();
        if (editorSearchTimer) clearTimeout(editorSearchTimer);
        editorSearchTimer = setTimeout(() => {
          editorSearchTimer = null;
          updateCodeSearchState();
        }, 120);
      }, 1200);
    }
  }
});

window.ideRtk?.onFileChanged?.((payload) => {
  showExternalChange(payload);
});

editor.addEventListener('keydown', async (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
    event.preventDefault();
    const result = await saveActiveFile();
    if (result?.ok) {
      showSaveSuccess('Archivo guardado correctamente');
      renderTabs();
    } else {
      pushToast('error', 'Guardar', result?.error || 'No se pudo guardar el archivo.');
      logConsole(`Guardar error: ${result?.error || 'desconocido'}`);
    }
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'ArrowUp') {
    event.preventDefault();
    const prev = findSymbolLine(-1);
    if (prev) jumpToLine(prev);
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'ArrowDown') {
    event.preventDefault();
    const next = findSymbolLine(1);
    if (next) jumpToLine(next);
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.altKey && event.key.toLowerCase() === 'w') {
    event.preventDefault();
    codeWrapEnabled = !codeWrapEnabled;
    applyTheme();
    syncHighlight();
    renderLineNumbers();
    void persistState();
    pushToast('info', 'Ajuste de texto', codeWrapEnabled ? 'Ajuste de línea activado.' : 'Ajuste de línea desactivado.');
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    codeSearchVisible = true;
    updateCenterChromeVisibility();
    codeSearchInput?.focus();
    codeSearchInput?.select?.();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') {
    event.preventDefault();
    codeSearchVisible = true;
    updateCenterChromeVisibility();
    codeSearchInput?.focus();
    codeSearchInput?.select?.();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'd') {
    event.preventDefault();
    const val = editor.value;
    const selStart = editor.selectionStart;
    const selEnd = editor.selectionEnd;
    const lineStart = val.lastIndexOf('\n', selStart - 1) + 1;
    let lineEnd = val.indexOf('\n', selEnd);
    if (lineEnd < 0) lineEnd = val.length;
    const line = val.slice(lineStart, lineEnd);
    const before = val.slice(0, lineEnd);
    const after = val.slice(lineEnd);
    editor.value = before + '\n' + line + after;
    editor.selectionStart = selStart + line.length + 1;
    editor.selectionEnd = editor.selectionStart;
    editor.dispatchEvent(new Event('input'));
  }
});

document.addEventListener('keydown', (event) => {
  const qoOverlay = document.getElementById('quickOpenOverlay');
  const qoVisible = qoOverlay && !qoOverlay.classList.contains('hidden');
  if (qoVisible) return; // let quick-open handler take over

  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'p') {
    event.preventDefault();
    setColumnsCount(columnsCount === 2 ? 3 : 2);
    if (columnsCount === 2) centerHidden = false;
    applyTheme();
    applyPreviewVisibility();
    renderTree(treeMode);
    logConsole(`Layout: ${columnsCount} columnas, centerHidden=${centerHidden}`);
    void persistState();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'o') {
    event.preventDefault();
    openFolderBtn?.click();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key === 'Tab') {
    event.preventDefault();
    if (openFiles.length < 2) return;
    const dir = event.shiftKey ? -1 : 1;
    const next = (activeFileIndex + dir + openFiles.length) % openFiles.length;
    activateTab(next);
    return;
  }
  if (event.key === 'Escape' && codeSearchVisible && codeSearchBar && !codeSearchBar.classList.contains('hidden')) {
    codeSearchVisible = false;
    updateCenterChromeVisibility();
    editor?.focus();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p' && !codeSearchVisible) {
    event.preventDefault();
    showQuickOpen();
  }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'm') {
    event.preventDefault();
    const wasHidden = rtkPlayModal?.classList.contains('hidden');
    setRtkPlayModalVisible(wasHidden);
    if (wasHidden && !rtkPlayData) fetchRtkPlayData();
    else if (wasHidden && rtkPlayFrame) rtkPlayFrame.src ||= RTK_PLAY_IFRAME_SRC;
  }
});

editor.addEventListener('scroll', scheduleScrollSync);
editor.addEventListener('focus', () => {
  if (currentFile) forceHighlightPaint('focus');
});
editor.addEventListener('input', () => {
  updateDiagnosticsForCurrentFile();
  void syncHighlight();
  syncEditorScrollState();
  updateActiveLineIndicator();
  updateBracketMatch();
});
editor.addEventListener('mousedown', () => {
  requestAnimationFrame(() => updateActiveLineIndicator());
});
editor.addEventListener('mouseup', () => {
  requestAnimationFrame(() => updateActiveLineIndicator());
});
editor.addEventListener('keyup', () => setTimeout(updateActiveLineIndicator, 0));
editor.addEventListener('click', updateActiveLineIndicator);
editor.addEventListener('select', updateActiveLineIndicator);
document.addEventListener('selectionchange', () => {
  if (document.activeElement === editor) setTimeout(updateActiveLineIndicator, 0);
});
editor.addEventListener('keyup', updateBracketMatch);
editor.addEventListener('click', updateBracketMatch);
editor.addEventListener('select', updateBracketMatch);
wrapCodeBtn?.addEventListener('click', () => {
  codeWrapEnabled = false;
  applyTheme();
  syncHighlight();
  renderLineNumbers();
  void persistState();
  pushToast('info', 'Ajuste de texto', 'El ajuste de texto quedó desactivado por prueba.');
});
pasteCodeBtn?.addEventListener('click', pasteIntoEditor);
selectAllCodeBtn?.addEventListener('click', () => {
  if (!editor) return;
  editor.focus();
  editor.setSelectionRange(0, String(editor.value || '').length);
});
codeSearchInput?.addEventListener('input', () => {
  if (codeSearchTimer) clearTimeout(codeSearchTimer);
  codeSearchTimer = setTimeout(() => {
    codeSearchTimer = null;
    updateCodeSearchState();
  }, 120);
});
codeSearchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    focusCodeSearchMatch(event.shiftKey ? -1 : 1);
  }
});
codeSearchPrevBtn?.addEventListener('click', () => focusCodeSearchMatch(-1));
codeSearchNextBtn?.addEventListener('click', () => focusCodeSearchMatch(1));
document.getElementById('codeSearchRegexBtn')?.addEventListener('click', toggleCodeSearchRegex);
closeCodeSearchBtn?.addEventListener('click', () => {
  codeSearchVisible = false;
  updateCenterChromeVisibility();
});
toggleCodeSearchBtn?.addEventListener('click', () => {
  codeSearchVisible = !codeSearchVisible;
  updateCenterChromeVisibility();
  if (codeSearchVisible) {
    codeSearchInput?.focus();
    codeSearchInput?.select?.();
  }
});

splitBtn?.addEventListener('click', () => {
  splitEnabled = !splitEnabled;
  rightPanel?.classList.toggle('split-mode', splitEnabled);
  backToPreviewBtn?.classList.toggle('hidden', !splitEnabled);
  if (rightPanelTitle) rightPanelTitle.textContent = splitEnabled ? 'Split' : 'Preview';
  if (!splitEnabled) {
    splitFile = null;
    splitWrap?.classList.add('hidden');
    document.querySelector('.preview-body')?.classList.remove('hidden');
  } else if (currentFile && !splitFile) {
    splitFile = { path: currentFile, language: currentLanguage };
    splitEditor.value = editor.value;
    splitWrap?.classList.remove('hidden');
    syncSplitHighlight();
  }
  rightViewMode = splitEnabled ? 'text' : rightViewMode;
  updateRightViewModeButtons();
  applyPreviewVisibility();
});

sendToSplitBtn?.addEventListener('click', () => {
  if (!currentFile) return;
  splitEnabled = true;
  rightPanel?.classList.add('split-mode');
  backToPreviewBtn?.classList.remove('hidden');
  if (rightPanelTitle) rightPanelTitle.textContent = 'Split';
  splitFile = { path: currentFile, language: currentLanguage };
  splitEditor.value = editor.value;
  splitWrap?.classList.remove('hidden');
  syncSplitHighlight();
  applyPreviewVisibility();
});

backToPreviewBtn?.addEventListener('click', () => {
  splitEnabled = false;
  splitFile = null;
  rightPanel?.classList.remove('split-mode');
  backToPreviewBtn?.classList.add('hidden');
  if (rightPanelTitle) rightPanelTitle.textContent = 'Preview';
  splitWrap?.classList.add('hidden');
  document.querySelector('.preview-body')?.classList.remove('hidden');
  rightViewMode = 'web';
  updateRightViewModeButtons();
  applyPreviewVisibility();
});

duplicateTabBtn?.addEventListener('click', duplicateActiveTab);
closeOtherTabsBtn?.addEventListener('click', closeOtherTabs);

splitEditor?.addEventListener('input', async () => {
  if (!splitFile?.path) return;
  syncSplitHighlight();
  const target = openFiles.find((file) => file.path === splitFile.path);
  if (target) {
    target.content = splitEditor.value;
    target.dirty = true;
  }
  if (autosaveTimer) clearTimeout(autosaveTimer);
  if (autosaveEnabled) {
    autosaveTimer = setTimeout(async () => {
      const result = await window.ideRtk.saveFile({ filePath: splitFile.path, content: splitEditor.value });
      if (!result?.ok) return;
      const targetNow = openFiles.find((file) => file.path === splitFile.path);
      if (targetNow) targetNow.dirty = false;
      renderTabs();
    }, 1200);
  }
});

splitEditor?.addEventListener('scroll', () => {
  if (splitLineNumbers) splitLineNumbers.scrollTop = splitEditor.scrollTop;
  if (splitHighlightLayer) splitHighlightLayer.scrollTop = splitEditor.scrollTop;
  updateActiveLineIndicator(splitEditor, splitLineNumbers, splitHighlightLayer, splitActiveLineOverlay);
});
splitEditor?.addEventListener('keyup', () => setTimeout(() => updateActiveLineIndicator(splitEditor, splitLineNumbers, splitHighlightLayer, splitActiveLineOverlay), 0));
splitEditor?.addEventListener('click', () => updateActiveLineIndicator(splitEditor, splitLineNumbers, splitHighlightLayer, splitActiveLineOverlay));
splitEditor?.addEventListener('select', () => updateActiveLineIndicator(splitEditor, splitLineNumbers, splitHighlightLayer, splitActiveLineOverlay));
splitEditor?.addEventListener('keyup', updateBracketMatch);
splitEditor?.addEventListener('click', updateBracketMatch);
splitEditor?.addEventListener('select', updateBracketMatch);

window.addEventListener('beforeunload', (event) => {
  const hasDirty = openFiles.some((file) => file.dirty);
  void persistState();
  if (!hasDirty) return;
  event.preventDefault();
  event.returnValue = '';
});

async function runSearch() {
  if (!currentRoot) return;
  const query = String(searchInput.value || '').trim();
  if (!query) {
    if (searchStatus) searchStatus.textContent = 'Listo';
    searchResults.classList.add('hidden');
    searchResults.innerHTML = '';
    return;
  }
  searchLoading = true;
  searchResults.classList.remove('hidden');
  searchResults.classList.add('loading');
  if (searchStatus) searchStatus.textContent = 'Buscando';
  const response = await window.ideRtk.search({ rootPath: currentRoot, query, limit: 50 });
  searchLoading = false;
  searchResults.classList.remove('loading');
  if (!response.ok) return;
  if (searchStatus) searchStatus.textContent = `${response.results?.length || 0} hallazgos`;
  searchResults.classList.remove('hidden');
  searchResults.innerHTML = response.results.map((item) => `
    <button class="search-result" data-open-search="${esc(item.path)}">
      <strong>${esc(item.name)}</strong>
      <small>L${item.line} · ${esc(item.preview || '')}</small>
    </button>
  `).join('') || '<div class="empty">Sin resultados</div>';
  searchResults.querySelectorAll('[data-open-search]').forEach((btn) => {
    btn.addEventListener('click', () => openFile(btn.dataset.openSearch));
  });
}

searchBtn?.addEventListener('click', runSearch);
searchInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    runSearch();
  }
});
searchInput?.addEventListener('input', () => {
  if (searchStatus) searchStatus.textContent = String(searchInput.value || '').trim() ? 'Escribe y busca' : 'Listo';
});

reloadPreviewBtn?.addEventListener('click', () => {
  if (currentFile) updatePreview(editor.value, currentFile);
});

copyPathBtn?.addEventListener('click', async () => {
  if (!currentFile) return;
  try {
    await navigator.clipboard.writeText(currentFile);
  } catch {}
});

openInExplorerBtn?.addEventListener('click', async () => {
  const targetPath = currentFile || currentRoot;
  if (!targetPath) return;
  const result = await window.ideRtk.openInExplorer?.(targetPath);
  if (!result?.ok) {
    pushToast('warn', 'Explorador', result?.error || 'No se pudo abrir la ubicación.');
    logConsole(`Explorador error: ${result?.error || 'desconocido'}`);
    return;
  }
  pushToast('success', 'Explorador', 'La ubicación se abrió en el explorador del sistema.');
});

fitPreviewBtn?.addEventListener('click', () => {
  previewMode = previewMode === 'fit' ? 'normal' : 'fit';
  if (previewMode === 'fit') previewVisible = true;
  void persistState();
  applyTheme();
  applyPreviewVisibility();
  renderTree(treeMode);
});

expandPreviewBtn?.addEventListener('click', () => {
  previewMode = previewMode === 'expanded' ? 'normal' : 'expanded';
  if (previewMode === 'expanded') previewVisible = true;
  void persistState();
  applyTheme();
  applyPreviewVisibility();
  renderTree(treeMode);
});

copyContentBtn?.addEventListener('click', async () => {
  if (!currentFile) return;
  await window.ideRtk.copyText({ text: editor.value || '' });
});
pasteCodeBtn?.addEventListener('click', pasteIntoEditor);
selectAllCodeBtn?.addEventListener('click', () => {
  if (!editor) return;
  editor.focus();
  editor.setSelectionRange(0, String(editor.value || '').length);
});
formatCodeBtn?.addEventListener('click', formatCurrentCode);
closeCurrentTabBtn?.addEventListener('click', () => {
  if (activeFileIndex < 0) return;
  closeTab(activeFileIndex);
});

document.addEventListener('keydown', async (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
    const selection = String(window.getSelection?.()?.toString?.() || '').trim();
    if (!selection) return;
    try {
      await window.ideRtk.copyText({ text: selection });
      pushToast('success', 'Copiado', 'Texto seleccionado copiado.');
    } catch {}
  }
});

togglePreviewBtn?.addEventListener('click', () => {
  togglePreviewColumns();
});

togglePreviewTopBtn?.addEventListener('click', togglePreviewColumns);
togglePreviewCenterBtn?.addEventListener('click', togglePreviewColumns);

toggleCenterBtn?.addEventListener('click', () => {
  centerHidden = !centerHidden;
  void persistState();
  applyTheme();
  applyPreviewVisibility();
});

settingsBtn?.addEventListener('click', () => setSettingsVisibility(true));
closeSettingsBtn?.addEventListener('click', () => setSettingsVisibility(false));
settingsModal?.addEventListener('click', (event) => {
  if (event.target === settingsModal) setSettingsVisibility(false);
});
loginBtn?.addEventListener('click', () => setLoginModalVisible(true));
closeLoginBtn?.addEventListener('click', () => setLoginModalVisible(false));
loginModal?.addEventListener('click', (event) => {
  if (event.target === loginModal) setLoginModalVisible(false);
});
loginSubmitBtn?.addEventListener('click', submitLocalLogin);
logoutBtn?.addEventListener('click', logoutLocalSession);
openWebLoginBtn?.addEventListener('click', openExternalLogin);
updatesBtn?.addEventListener('click', () => setUpdatesModalVisible(true));
closeUpdatesBtn?.addEventListener('click', () => setUpdatesModalVisible(false));
closeUpdatesFooterBtn?.addEventListener('click', () => setUpdatesModalVisible(false));
updatesModal?.addEventListener('click', (event) => {
  if (event.target === updatesModal) setUpdatesModalVisible(false);
});
checkUpdatesBtn?.addEventListener('click', checkForUpdates);
openUpdateUrlBtn?.addEventListener('click', openUpdateDownload);
applyUpdateBtn?.addEventListener('click', applyAvailableUpdate);
pluginsBtn?.addEventListener('click', () => setPluginsModalVisible(true));
closePluginsBtn?.addEventListener('click', () => setPluginsModalVisible(false));
closePluginsFooterBtn?.addEventListener('click', () => setPluginsModalVisible(false));
refreshPluginsBtn?.addEventListener('click', () => renderPluginsCatalog());
pluginsModal?.addEventListener('click', (event) => {
  if (event.target === pluginsModal) setPluginsModalVisible(false);
});
pluginsLocalTab?.addEventListener('click', () => {
  pluginsTab = 'local';
  pluginsLocalTab.classList.add('active');
  pluginsExternalTab?.classList.remove('active');
  renderPluginsCatalog();
});
pluginsExternalTab?.addEventListener('click', () => {
  pluginsTab = 'external';
  pluginsExternalTab.classList.add('active');
  pluginsLocalTab?.classList.remove('active');
  renderPluginsCatalog();
});

/* Routicket Play events */
rtkPlayBtn?.addEventListener('click', () => {
  const wasHidden = rtkPlayModal?.classList.contains('hidden');
  setRtkPlayModalVisible(wasHidden);
  if (wasHidden && !rtkPlayData) fetchRtkPlayData();
  else if (wasHidden && rtkPlayFrame) rtkPlayFrame.src ||= RTK_PLAY_IFRAME_SRC;
});
closeRtkPlayBtn?.addEventListener('click', () => setRtkPlayModalVisible(false));
rtkPlayPlayBtn?.addEventListener('click', toggleRtkPlayPlay);
rtkPlayNextBtn?.addEventListener('click', rtkPlayNext);
rtkPlayPrevBtn?.addEventListener('click', rtkPlayPrev);
rtkPlayBgBtn?.addEventListener('click', () => setRtkPlayModalVisible(false));
rtkPlayRefreshBtn?.addEventListener('click', fetchRtkPlayData);
rtkPlayModal?.addEventListener('click', (event) => {
  if (event.target === rtkPlayModal) setRtkPlayModalVisible(false);
});

themeSelect?.addEventListener('change', () => {
  theme = themeSelect.value;
  if (['light', 'solarized'].includes(theme) && !LIGHT_PRISM_THEMES.has(prismTheme)) {
    prismTheme = 'lightplus';
  } else if (theme === 'retro' && prismTheme === 'lightplus') {
    prismTheme = 'sublime';
  }
  void persistState();
  applyTheme();
});
codeViewerSelect?.addEventListener('change', () => {
  codeViewer = codeViewerSelect.value;
  void persistState();
  applyTheme();
  forceHighlightPaint('code-viewer-change');
});
prismThemeSelect?.addEventListener('change', () => {
  prismTheme = prismThemeSelect.value;
  void persistState();
  applyPrismTheme();
  forceHighlightPaint('prism-theme-change');
});
codeMirrorThemeSelect?.addEventListener('change', () => {
  codeMirrorTheme = codeMirrorThemeSelect.value;
  void persistState();
  applyTheme();
  forceHighlightPaint('codemirror-theme-change');
});
lineNumbersSelect?.addEventListener('change', () => {
  lineNumbersVisible = lineNumbersSelect.value !== 'off';
  void persistState();
  applyTheme();
  renderLineNumbers();
});
activeLineSelect?.addEventListener('change', () => {
  activeLineVisible = activeLineSelect.value !== 'off';
  void persistState();
  applyTheme();
  updateActiveLineIndicator();
});
activeLineColorSelect?.addEventListener('change', () => {
  activeLineColor = activeLineColorSelect.value;
  void persistState();
  applyTheme();
  updateActiveLineIndicator();
});
helpSelect?.addEventListener('change', () => {
  helpVisible = helpSelect.value !== 'off';
  if (helpVisible) helpCardState = { start: false, parts: false };
  void persistState();
  setHelpText();
});
densitySelect?.addEventListener('change', () => {
  density = densitySelect.value;
  void persistState();
  applyTheme();
});
hintSelect?.addEventListener('change', () => {
  hintsVisible = hintSelect.value !== 'off';
  void persistState();
  applyTheme();
});
contrastSelect?.addEventListener('change', () => {
  highContrast = contrastSelect.value === 'on';
  void persistState();
  applyTheme();
});
iconSizeSelect?.addEventListener('change', () => {
  iconSize = ['small', 'medium', 'large'].includes(iconSizeSelect.value) ? iconSizeSelect.value : 'medium';
  void persistState();
  applyTheme();
});
uiTextSizeSelect?.addEventListener('change', () => {
  uiTextSize = ['small', 'medium', 'large'].includes(uiTextSizeSelect.value) ? uiTextSizeSelect.value : 'medium';
  void persistState();
  applyTheme();
});
globalPaddingSelect?.addEventListener('change', () => {
  globalPadding = ['small', 'medium', 'large'].includes(globalPaddingSelect.value) ? globalPaddingSelect.value : 'medium';
  void persistState();
  applyTheme();
});
iconFamilySelect?.addEventListener('change', () => {
  iconFamily = ['solid', 'outline'].includes(iconFamilySelect.value) ? iconFamilySelect.value : 'solid';
  void persistState();
  applyTheme();
});
autosaveSelect?.addEventListener('change', () => {
  autosaveEnabled = autosaveSelect.value === 'on';
  void persistState();
  pushToast('info', 'Autoguardado', autosaveEnabled ? 'Activado' : 'Desactivado');
});
expandCodeBtn?.addEventListener('click', () => {
  centerHidden = false;
  previewMode = 'expanded';
  setColumnsCount(3);
  rightViewMode = 'web';
  updateRightViewModeButtons();
  void persistState();
  applyTheme();
  applyPreviewVisibility();
});

collapseCodeBtn?.addEventListener('click', () => {
  previewMode = 'normal';
  setColumnsCount(2);
  centerHidden = false;
  rightViewMode = 'web';
  updateRightViewModeButtons();
  void persistState();
  applyTheme();
  applyPreviewVisibility();
});

webViewTabBtn?.addEventListener('click', () => {
  rightViewMode = 'web';
  rightPanelTitle.textContent = 'Preview';
  updateRightViewModeButtons();
  applyPreviewVisibility();
  void persistState();
});

toggleEditorHelpBtn?.addEventListener('click', () => {
  helpVisible = !helpVisible;
  if (helpVisible) helpCardState = { start: false, parts: false };
  void persistState();
  setHelpText();
  applyTheme();
});

openWebExplorerBtn?.addEventListener('click', async () => {
  const targetPath = currentFile || currentRoot;
  if (!targetPath) return;
  const result = await window.ideRtk.openWebExplorer?.(targetPath);
  if (!result?.ok) {
    pushToast('warn', 'Web Explorer', result?.error || 'No se pudo abrir en el navegador.');
    return;
  }
  pushToast('success', 'Web Explorer', 'Abierto en el navegador.');
});

copyAnyTextBtn?.addEventListener('click', async () => {
  const selection = String(window.getSelection?.()?.toString?.() || '').trim();
  if (!selection) {
    pushToast('warn', 'Copiar', 'Selecciona texto primero.');
    return;
  }
  await window.ideRtk.copyText({ text: selection });
  pushToast('success', 'Copiar', 'Texto seleccionado copiado.');
});

expandAllBtn?.addEventListener('click', async () => {
  if (!treeState?.path) return;
  const all = await window.ideRtk.listFiles(treeState.path);
  if (!all.ok) return;
  loadedDirs.clear();
  treeChildren.clear();
  collapsed.clear();
  const dirs = [treeState.path];
  while (dirs.length) {
    const dir = dirs.pop();
    if (!dir) continue;
    collapsed.delete(dir);
    const children = await window.ideRtk.listDir(dir);
    if (!children.ok) continue;
    treeChildren.set(dir, children.items || []);
    loadedDirs.add(dir);
    for (const item of children.items || []) if (item.type === 'directory') dirs.push(item.path);
  }
  scheduleTreeRender();
});

collapseAllBtn?.addEventListener('click', () => {
  collapsed.clear();
  loadedDirs.clear();
  treeChildren.clear();
  if (treeState?.path) collapsed.add(treeState.path);
  renderTree();
});

recentPanel?.addEventListener('click', (event) => {
  const fav = event.target.closest?.('[data-fav-toggle]');
  if (!fav) return;
  toggleFavorite(fav.dataset.favToggle);
});

if (previewResizeHandle) {
  let resizingPreview = false;
  let startX = 0;
  let startWidth = 0;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const setPreviewWidth = (px) => {
    const workspace = document.querySelector('.workspace');
    if (!workspace) return;
    const min = 320;
    const max = Math.max(min, Math.floor(window.innerWidth * 0.55));
    const next = clamp(px, min, max);
    workspace.style.setProperty('--preview-width', `${next}px`);
    void persistState();
  };
  previewResizeHandle.addEventListener('pointerdown', (event) => {
    const workspace = document.querySelector('.workspace');
    if (!workspace) return;
    resizingPreview = true;
    startX = event.clientX;
    startWidth = previewFrame?.getBoundingClientRect?.().width || workspace.getBoundingClientRect().width * 0.35;
    previewResizeHandle.setPointerCapture?.(event.pointerId);
    document.body.style.cursor = 'col-resize';
    event.preventDefault();
  });
  window.addEventListener('pointermove', (event) => {
    if (!resizingPreview) return;
    const delta = startX - event.clientX;
    setPreviewWidth(startWidth + delta);
    applyTheme();
    requestAnimationFrame(() => refreshEditorAfterResize('preview-resize'));
  });
  window.addEventListener('pointerup', () => {
    if (!resizingPreview) return;
    resizingPreview = false;
    document.body.style.cursor = '';
    requestAnimationFrame(() => refreshEditorAfterResize('preview-resize-end'));
    void persistState();
  });
}

window.addEventListener('resize', () => {
  requestAnimationFrame(() => refreshEditorAfterResize('window-resize'));
});

(async () => {
  logConsole('boot init start');
  logConsole(`highlight engine=${hljs ? 'hljs' : 'manual'}`);
  await loadState();
  applyTheme();
  renderPluginsCatalog();
  buildEditorContextMenu();
  setHelpText();
  updateMinimapState();
  applyPreviewVisibility();
  updateEditorMeta();
  if (currentRoot) {
    logConsole(`boot restore root=${currentRoot}`);
    treeState = { name: currentRoot.split(/[\\/]/).pop(), path: currentRoot, type: 'directory' };
    collapsed.clear();
    loadedDirs.clear();
    treeChildren.clear();
    collapsed.delete(treeState.path);
    await renderTree();
  } else {
    logConsole('boot no saved root');
    renderTree();
  }
  await restoreSavedTabs();
  if (currentRoot && currentFile) {
    await refreshTreeKeepingOpenFile();
  }
  if (!openFiles.length) { renderTabs(); showWelcome(true); }
  if (currentFile) await expandTreeToPath(treeMode, currentFile);
  renderRecentPanels();
  forceHighlightPaint('boot');
  updateRadarClock();
  window.addEventListener('load', () => {
    setTimeout(() => {
      const missing = [];
      if (!window.CodeMirror) missing.push('CodeMirror');
      if (!window.Prism) missing.push('Prism');
      if (!window.require?.config) missing.push('Monaco-loader');
      if (!missing.length) return;
      if (missing.length === 1 && missing[0] === 'CodeMirror') {
        logConsole('CodeMirror still unavailable after load');
        return;
      }
      pushToast('warn', 'CDN', `No cargaron: ${missing.join(', ')}.`);
      logConsole(`cdn missing ${missing.join(', ')}`);
    }, 2200);
  }, { once: true });
})();

setInterval(updateRadarClock, 1000);
