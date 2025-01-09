const { app, BrowserWindow, Menu, shell, Tray } = require("electron");
const path = require("path");

let tray = null;
let win = null;

function resolveAssetPath(asset) {
  return app.isPackaged
    ? path.join(process.resourcesPath, "assets", asset)
    : path.join(__dirname, "assets", asset);
}

function createTray() {
  const iconPath = resolveAssetPath("icons/logo.ico"); // Alterado para .ico
  try {
    tray = new Tray(iconPath);
  } catch (error) {
    console.error("Failed to load tray icon:", error);
    return;
  }
  
  const contextMenu = Menu.buildFromTemplate([
    { 
      label: 'Abrir', 
      click: () => win.show() 
    },
    { 
      label: 'Fechar', 
      click: () => {
        app.isQuiting = true;
        app.quit();
      } 
    }
  ]);

  tray.setToolTip('LoFi Radio');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => win.show());
}

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 400,
    icon: resolveAssetPath("icons/logo.ico"), // Alterado para .ico
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile("index.html").catch((err) => {
    console.error("Failed to load index.html:", err);
  });

  const menu = Menu.buildFromTemplate([
    {
      label: "Sobre",
      submenu: [
        {
          label: "Sobre Square Cloud",
          click: () => {
            shell.openExternal("https://squarecloud.app/");
          },
        },
        {
          label: "Sobre mim",
          click: () => {
            shell.openExternal("https://jeiel.pages.dev");
          },
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  win.on("close", (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      win.hide();
      return false;
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  createTray();
});

app.on('before-quit', () => {
  app.isQuiting = true;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});