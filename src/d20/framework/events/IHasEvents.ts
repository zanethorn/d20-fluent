/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:17:27-04:00
 * @Project: d20-fluent
 * @Filename: IHasEvents.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:18:05-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { EventHandler } from './EventHandler'

export interface IHasEvents {
    on(evt:string, handler: EventHandler<any>): void;
    off(evt:string, handler: EventHandler<any>): void;
}
