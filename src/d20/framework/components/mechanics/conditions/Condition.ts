/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T18:48:14-04:00
 * @Project: d20-fluent
 * @Filename: Condition.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T18:54:05-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasModifiers } from "../IHasModifiers";
import { ArrayList } from "../../../collections";
import { ICondition } from "./ICondition";

export function HasConditionsMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        private _conditions: ArrayList<ICondition> = new ArrayList<ICondition>();

        get conditions(): IterableIterator<ICondition> {
            return this._conditions[Symbol.iterator]();
        }

        addCondition(condition: ICondition): boolean {
            if (this._conditions.add(condition)){
                for (let m of condition.modifiers) {
                    (<IHasModifiers><any>this).addModifier(m);
                }
                return true;
            }
            return false;
        }
        removeCondition(condition: ICondition): boolean {
            if (this._conditions.remove(condition)){
                for (let m of condition.modifiers) {
                    (<IHasModifiers><any>this).removeModifiers(m);
                }
                return true;
            }
            return false;
        }
    };
}
