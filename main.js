const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'My Electron App',
    width: 800,
    height: 600,
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  })

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);