const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');

  // Menu template with a custom button
  const menu = Menu.buildFromTemplate([
    {
      label: 'Square Cloud',
      submenu: [
        {
          label: 'Página oficial',
          click: () => {
            shell.openExternal('https://squarecloud.app/');
          },
        },
      ],
    },
  ]);

  // Set the menu to the window
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

