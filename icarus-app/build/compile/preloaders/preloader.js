"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const os = require("os");
const ALLOWED_SEND_CHANNELS = ['toMain'];
const ALLOWED_RECEIVE_CHANNELS = ['fromMain'];
electron_1.contextBridge.exposeInMainWorld('system', {
    type: os.type
});
electron_1.contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        if (ALLOWED_SEND_CHANNELS.includes(channel)) {
            electron_1.ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        if (ALLOWED_RECEIVE_CHANNELS.includes(channel)) {
            electron_1.ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
});
