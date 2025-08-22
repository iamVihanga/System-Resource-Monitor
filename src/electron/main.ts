import { app, BrowserWindow } from "electron";
import path from "path";
import { getPreloadPath, isDev } from "./util.js";
import { getStaticSystemData, pollResources } from "./src/resource-manager.js";
import { ipcMainHandle } from "./src/ipc-helpers.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath()
    }
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  pollResources(mainWindow);

  ipcMainHandle("staticData", () => {
    return getStaticSystemData();
  });
});
