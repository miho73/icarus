"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const menu_1 = require("./menu/menu");
const path = require("path");
let mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
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
        }
        else {
            mainWindow.show();
        }
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    const menuBuilder = new menu_1.default(mainWindow);
    menuBuilder.buildMenu();
}
electron_1.app.on('window-all-closed', () => {
    electron_1.app.quit();
});
electron_1.app
    .whenReady()
    .then(() => {
    createWindow();
})
    .catch(console.error);
