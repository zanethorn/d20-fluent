/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T12:22:08-04:00
 * @Project: d20-fluent
 * @Filename: ArmorClass.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:58:15-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IArmorClass } from "./IArmorClass";
import { IHasScores } from "../IHasScores";
import { IHasArmorClass } from ".";
import { Constructor } from "../../../Constructor";
import { ICheckResult } from "../ICheckResult";
import { IModifier } from "../IModifier";
import { IHasSize } from "../size/IHasSize";

class ArmorClass implements IArmorClass {

    description: string;

    get id(): string{
        return "armorClass";
    }

    get modifiers(): IterableIterator<IModifier> {
        let self = this;
        function *_modifiers(){

        }
        return _modifiers();
    }

    get modifiedValue(): number {
        let t = this.value;
        for (let m of this.modifiers) {
            t += m.value;
        }
        return t;
    }

    get value(): number {
        return 10;
    }

    set value(v:number){
        // Base armor class cannot be set
    }

    constructor(public readonly parent: IHasArmorClass) {}

    check(dc: number, ...modifiers: IModifier[]): ICheckResult {
        throw new Error("Method not implemented.");
    }
}

export type ArmorClassFactory = (parent: IHasArmorClass) => IArmorClass;

export var DefaultArmorClassFactory: ArmorClassFactory = (parent: IHasArmorClass)  => {
    return new ArmorClass(parent);
}

export function HasArmorClassMixin<TBase extends Constructor<IHasSize>>(Base: TBase): TBase & Constructor<IHasArmorClass> {
    return class extends Base implements IHasArmorClass
    {
        readonly armorClass: IArmorClass = DefaultArmorClassFactory(<IHasArmorClass><any>this);
    };
}
