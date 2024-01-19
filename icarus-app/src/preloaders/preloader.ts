import {
  contextBridge,
  ipcRenderer,
  IpcRendererEvent
} from "electron";
import * as os from "os";

const ALLOWED_SEND_CHANNELS = ['toMain'];
const ALLOWED_RECEIVE_CHANNELS = ['fromMain'];

contextBridge.exposeInMainWorld('system', {
  type: os.type
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel: string, data: any) => {
    if (ALLOWED_SEND_CHANNELS.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel: string, func: Function) => {
    if (ALLOWED_RECEIVE_CHANNELS.includes(channel)) {
      ipcRenderer.on(channel, (event: IpcRendererEvent, ...args: any[]) => func(...args));
    }
  }
});
