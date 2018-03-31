/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:00:44-04:00
 * @Project: d20-fluent
 * @Filename: Modifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:54:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IModifier } from "./IModifier";
import { ModifierType } from "./ModifierType";
import { IScore } from "./IScore";
import { Constructor } from "../../Constructor";
import { IHasModifiers } from "./IHasModifiers";
import { IComponent } from "../IComponent";
import { ArrayList } from "../../collections";

export abstract class Modifier implements IModifier {

    constructor(
        public readonly type: ModifierType,
        public readonly value: number
    ) {}

    abstract appliesTo(score: IScore): boolean;

}


export function HasModifiersMixin<TBase extends Constructor<IComponent>>(Base: TBase): TBase & Constructor<IHasModifiers> {
    return class extends Base implements IHasModifiers
    {
        private _modifiers: ArrayList<IModifier> = new ArrayList<IModifier>();

        get modifiers(): IterableIterator<IModifier> {
            return this._modifiers[Symbol.iterator]();
        }
        addModifier(modifier: IModifier): boolean {
            return this._modifiers.add(modifier);
        }
        removeModifier(modifier: IModifier): boolean {
            return this._modifiers.remove(modifier);
        }

    };
}
