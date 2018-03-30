/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:48:50-04:00
 * @Project: d20-fluent
 * @Filename: ICanTakeDamage.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:28:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IDamage } from "./IDamage";

export interface ICanTakeDamage
{
    maxHitPoints: number;
    injuries: number;
    subdualDamage: number;
    readonly currentHitPoints: number;
    hardness: number;

    takeDamage(damage: IDamage): void;
}
