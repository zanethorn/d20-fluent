/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T18:33:41-04:00
 * @Project: d20-fluent
 * @Filename: Ability.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-31T00:19:25-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IAbility } from "./IAbility";
import { ArrayList } from "../../../collections";
import { Constructor } from "../../../Constructor";
import { IHasScores } from "../IHasScores";
import { IHasAbilities } from "./IHasAbilities";

export function HasAbilitiesMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasAbilities> {
    return class extends Base implements IHasAbilities
    {
        private _abilities: ArrayList<IAbility> = new ArrayList<IAbility>();

        // constructor(id: string) {
        //     super(id);
        // }

        get abilities(): IterableIterator<IAbility> {
            return this._abilities[Symbol.iterator]();
        }

        addAbility(ability:IAbility):boolean {
            return this._abilities.add(ability);
        }
        removeAbility(ability:IAbility): boolean {
            return this._abilities.remove(ability);
        }
    };
}
