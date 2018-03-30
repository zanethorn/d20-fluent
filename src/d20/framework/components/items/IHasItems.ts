/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:26:20-04:00
 * @Project: d20-fluent
 * @Filename: IHasItems.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:29:11-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IItem } from "./IItem";

export interface IHasItems
{
    readonly items: IterableIterator<IItem>;
    addItem(item:IItem): boolean;
    removeItem(item:IItem): boolean;
}
