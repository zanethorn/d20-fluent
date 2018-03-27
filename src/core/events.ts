/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:27:18-04:00
 * @Project: d20-fluent
 * @Filename: events.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T12:54:41-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from './mixins';

export interface IEventArgs
{
    readonly sender: object;
}

export type EventHandler<TArgs extends IEventArgs> = (args: TArgs) => void;

export interface IEvent<TArgs extends IEventArgs>
{
    on(handler: EventHandler<TArgs>): void;
    off(handler:EventHandler<TArgs>): void;
}

export interface IHasEvents {
    on(evt:string, handler: EventHandler<any>): void;
    off(evt:string, handler: EventHandler<any>): void;
}

export abstract class EventArgs
    implements IEventArgs
{
    constructor(public readonly sender: object) {}
}

export class Event<TArgs extends IEventArgs>
{
    private _handlers: EventHandler<TArgs>[] = [];

    on(handler: EventHandler<TArgs>): void
    {
        let ix = this._handlers.indexOf(handler);
        if (ix === -1) {
            this._handlers.push(handler);
        }
    }

    off(handler:EventHandler<TArgs>): void
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

export function HasEvents<TBase extends Constructor>(Base: TBase): Constructor<IHasEvents> & TBase {
    return class extends Base implements IHasEvents {
        on(evt:string, handler: EventHandler<any>): void {
            (<any>this)[evt].on(handler);
        }
        off(evt:string, handler: EventHandler<any>): void{
            (<any>this)[evt].off(handler);
        }
    };
}
