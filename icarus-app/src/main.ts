import { app, BrowserWindow } from 'electron';
import MenuBuilder from "./menu/menu";
import * as path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preloaders/preloader.js')
    },

    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 16, y: 15 },
    titleBarOverlay: {
      height: 45
    }
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
}

app.on('window-all-closed', () => {
  app.quit();
});

app
  .whenReady()
  .then(() => {
    createWindow();
  })
  .catch(console.error);
