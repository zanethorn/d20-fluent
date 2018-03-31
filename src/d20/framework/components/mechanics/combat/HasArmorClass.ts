/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T12:22:08-04:00
 * @Project: d20-fluent
 * @Filename: ArmorClass.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:35:24-04:00
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
import { Score } from "../Score";

class ArmorClass
    extends Score
    implements IArmorClass
{
    constructor(parent: IHasArmorClass) {
        super('armorClass', parent);
    }

}

export type ArmorClassFactory = (parent: IHasArmorClass) => IArmorClass;

export var DefaultArmorClassFactory: ArmorClassFactory = (parent: IHasArmorClass)  => {
    return new ArmorClass(parent);
}

export function HasArmorClassMixin<TBase extends Constructor<IHasSize>>(Base: TBase): TBase & Constructor<IHasArmorClass> {
    return class extends Base implements IHasArmorClass
    {
        readonly armorClass: IArmorClass = DefaultArmorClassFactory(this);
    };
}
