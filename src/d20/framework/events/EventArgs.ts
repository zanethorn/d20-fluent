/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:18:26-04:00
 * @Project: d20-fluent
 * @Filename: EventArgs.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:19:02-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IEventArgs } from './EventArgs'

export abstract class EventArgs
    implements IEventArgs
{
    constructor(public readonly sender: object) {}
}
