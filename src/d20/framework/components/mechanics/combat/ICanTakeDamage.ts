/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:48:50-04:00
 * @Project: d20-fluent
 * @Filename: ICanTakeDamage.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T21:43:47-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IDamage } from "./IDamage";
import { IHasScores } from "../IHasScores";
import { IScore } from "../IScore";
import { IHasArmorClass } from "./IHasArmorClass";
import { IHitPoints } from "./IHitPoints";

export interface ICanTakeDamage
    extends IHasArmorClass
{
    readonly hitpoints: IHitPoints;
    readonly hardness: IScore;

    takeDamage(damage: IDamage): void;
}
