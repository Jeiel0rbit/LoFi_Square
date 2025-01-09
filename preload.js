const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => {
    try {
      ipcRenderer.send(channel, data);
    } catch (error) {
      console.error(`Failed to send message on channel ${channel}:`, error);
    }
  },
  receive: (channel, func) => {
    try {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    } catch (error) {
      console.error(`Failed to receive message on channel ${channel}:`, error);
    }
  }
});