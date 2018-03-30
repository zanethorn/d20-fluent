/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:10:48-04:00
 * @Project: d20-fluent
 * @Filename: IContainsThings.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T20:12:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IThing } from './IThing'

export interface IContainsThings
{
    readonly contents: IterableIterator<IThing>;
    addThing(thing: IThing): boolean;
    removeThing(thing: IThing): boolean; 
}
