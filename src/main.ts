/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T11:55:27-04:00
 * @Project: d20-fluent
 * @Filename: main.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T14:21:46-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Event, EventArgs, HasEvents, IEvent } from './core/events'
import { Id20Application, IApplicationEventArgs } from "./app"
import * as gui from "./gui"

class ApplicationEventArgs
    extends EventArgs {

    constructor(public readonly app: Id20Application){
        super(app);
    }
}

class Application
    extends HasEvents(Object)
    implements Id20Application
{
    private readonly _preInit:  Event<ApplicationEventArgs> = new Event<ApplicationEventArgs>();
    private readonly _postInit: Event<ApplicationEventArgs> = new Event<ApplicationEventArgs>();
    private readonly _ready: Event<ApplicationEventArgs> = new Event<ApplicationEventArgs>();
    private readonly _preExit: Event<ApplicationEventArgs> = new Event<ApplicationEventArgs>();
    private readonly _terminate: Event<ApplicationEventArgs> = new Event<ApplicationEventArgs>();

    private _isRunning: boolean = false;

    constructor(){
        super();
    }

    get preInit(): IEvent<IApplicationEventArgs> {
        return this._preInit;
    }
    get postInit(): IEvent<IApplicationEventArgs> {
        return this._postInit;
    }
    get ready(): IEvent<IApplicationEventArgs> {
        return this._ready;
    }
    get preExit(): IEvent<IApplicationEventArgs> {
        return this._preExit;
    }
    get terminate(): IEvent<IApplicationEventArgs> {
        return this._terminate;
    }


    run(): void{
        this._preInit.invoke(new ApplicationEventArgs(this));

        // Initialization logic goes there

        this._postInit.invoke(new ApplicationEventArgs(this));

        this._isRunning = true;
        this._ready.invoke(new ApplicationEventArgs(this));
    }

    exit(): void {
        this._isRunning = false;
        this._preExit.invoke(new ApplicationEventArgs(this));
        this._terminate.invoke(new ApplicationEventArgs(this));
    }
}

//export { Id20Application };
export const d20: Id20Application = new Application();

// Ready the GuiManager
d20.on('preInit', (e:IApplicationEventArgs) => {
    console.log("d20 Framework is Initializing.");
    gui.configure(e.app);
});

d20.on('postInit', () => {
    console.log("d20 Framework Has Initialized.");
});

d20.on('ready', () => {
    console.log("d20 Framework is Ready.");
});

d20.on('preExit', () => {
    console.log("d20 Framework is Preparing to exit.");
});

d20.on('terminate', () => {
    console.log("d20 Framework has terminated.");
    process.exit();
});
