import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getStaticSystemData, pollResources } from "./src/resource-manager.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  const systemData = getStaticSystemData();
  console.log(systemData);

  pollResources();
});

// https://youtu.be/fP-371MN0Ck?t=2785
