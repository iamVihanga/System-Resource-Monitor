import electron from "electron";

import { ipcOn, ipcInvoke } from "./src/ipc-helpers";

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    ipcOn("statistics", (stats) => callback(stats));
  },
  getStaticData: () => ipcInvoke("staticData")
} satisfies Window["electron"]);
