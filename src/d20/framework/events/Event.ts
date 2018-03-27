/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:19:22-04:00
 * @Project: d20-fluent
 * @Filename: Event.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:19:58-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IEvent } from './IEvent'
import { IEventArgs } from './IEventArgs'
import { EventHandler } from './EventHandler'

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
