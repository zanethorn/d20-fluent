/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T11:45:52-04:00
 * @Project: d20-fluent
 * @Filename: main.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T14:22:34-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import * as electron from "electron";
import * as path from "path";
import * as url from "url";
import { Id20Application } from '../app'
import { IGuiManager } from './manager'

class GuiManager
    implements IGuiManager
{
    private _mainWindow: electron.BrowserWindow;
    private readonly _electronApp: electron.App;
    private readonly _d20: Id20Application;

    constructor(electronApp: electron.App, d20: Id20Application ){
        this._electronApp = electronApp;
        this._d20 = d20;
    }

    initialize(): void {
        console.log("Gui manager is initializing.");

        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        //this._electronApp.on("ready", () => { this._createMainWindow(); });

        this._electronApp.on("activate", () => {
            // On OS X it"s common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (this._mainWindow === null) {
                this._createMainWindow();
            }
        });

        // Quit when all windows are closed.
        this._electronApp.on('window-all-closed', () => {
            this._d20.exit();
          // On OS X it is common for applications and their menu bar
          // to stay active until the user quits explicitly with Cmd + Q
            if (process.platform !== "darwin") {
                this._electronApp.quit();
            }

        });

        this._createMainWindow();
    }

    private _createMainWindow(): void {
        console.log("GUI manager is creating a new window.");

        // Create the browser window.
        this._mainWindow = new electron.BrowserWindow({
            height: 600,
            width: 800,
        });

        // and load the index.html of the app.
        this._mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "../assets/html/index.html"),
            protocol: "file:",
            slashes: true,
        }));

        // Open the DevTools.
        this._mainWindow.webContents.openDevTools();

        // Emitted when the window is closed.
        this._mainWindow.on("closed", () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            (<any>this)._mainWindow = null;
        });
    }
}

let guiManager:IGuiManager;

export function configure( fw: Id20Application ): void {

    // Configure electron application framework
    console.log("GUI Framework is being configured.");

    guiManager = new GuiManager(electron.app, fw);
    guiManager.initialize();
}
