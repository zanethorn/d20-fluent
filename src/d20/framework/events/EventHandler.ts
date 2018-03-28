/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:15:10-04:00
 * @Project: d20-fluent
 * @Filename: EventHandler.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:15:38-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IEventArgs } from "./IEventArgs"

export type EventHandler<TArgs extends IEventArgs> = (args: TArgs) => void;
