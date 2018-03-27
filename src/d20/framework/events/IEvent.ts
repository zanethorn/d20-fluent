/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:15:55-04:00
 * @Project: d20-fluent
 * @Filename: IEvent.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:16:58-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IEventArgs } from "./IEventArgs"
import { EventHandler } from "./EventHandler"

export interface IEvent<TArgs extends IEventArgs>
{
    on(handler: EventHandler<TArgs>): void;
    off(handler:EventHandler<TArgs>): void;
}
