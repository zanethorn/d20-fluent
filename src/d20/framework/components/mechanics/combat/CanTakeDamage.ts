/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T21:32:56-04:00
 * @Project: d20-fluent
 * @Filename: CanTakeDamage.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T22:27:49-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from "../../../Constructor";
import { IHasArmorClass } from "./IHasArmorClass";
import { ICanTakeDamage } from "./ICanTakeDamage";
import { IScore } from "../IScore";
import { IHitPoints } from "./IHitPoints";
import { IDamage } from "./IDamage";

export function CanTakeDamageMixin<TBase extends Constructor<IHasArmorClass>>(Base: TBase): TBase & Constructor<ICanTakeDamage> {
    return class extends Base implements ICanTakeDamage
    {
        readonly hitpoints: IHitPoints;
        readonly hardness: IScore;

        takeDamage(damage: IDamage): void {
            throw new Error("Method not implemented.");
        }
    };
}
