/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:27:18-04:00
 * @Project: d20-fluent
 * @Filename: events.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T09:37:40-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IEventArgs
{
    readonly sender: object;
}

export interface IEventHandler<TArgs extends IEventArgs>
{
    (args: TArgs): void;
}

export interface IEvent<TArgs extends IEventArgs>
{
    addHandler(handler: IEventHandler<TArgs>): void;
    removeHandler(handler:IEventHandler<TArgs>): void;
}

export abstract class EventArgs
    implements IEventArgs
{
    constructor(public readonly sender: object) {}
}

export class Event<TArgs extends IEventArgs>
{
    private _handlers: IEventHandler<TArgs>[] = [];

    addHandler(handler: IEventHandler<TArgs>): void
    {
        let ix = this._handlers.indexOf(handler);
        if (ix === -1) {
            this._handlers.push(handler);
        }
    }

    removeHandler(handler:IEventHandler<TArgs>): void
    {
        let ix = this._handlers.indexOf(handler);
        if (ix !== -1) {
            this._handlers.splice(ix,1);
        }
    }

    invoke(args: TArgs): void
    {
        this._handlers.forEach( h => h(args));
    }
}
