/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T21:18:59-04:00
 * @Project: d20-fluent
 * @Filename: HasItems.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T21:52:36-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from "../../Constructor";
import { ArrayList } from "../../collections";
import { IHasItems } from "./IHasItems";
import { IHasScores } from "../mechanics/IHasScores";
import { IItem } from "./IItem";

export function HasItemsMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasItems> {
    return class extends Base implements IHasItems
    {
        private _items: ArrayList<IItem> = new ArrayList<IItem>();

        get items(): IterableIterator<IItem> {
            return this._items[Symbol.iterator]();
        }

        addItem(item: IItem): boolean {
            return this._items.add(item);
        }
        removeItem(item: IItem): boolean {
            return this._items.remove(item);
        }
    };
}
