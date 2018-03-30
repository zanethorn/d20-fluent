/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:48:39-04:00
 * @Project: d20-fluent
 * @Filename: ICanAttack.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T12:20:12-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IScore } from "../IScore";
import { IHasScores } from "../IHasScores";
import { IAttack } from "./IAttack";
import { IHasArmorClass } from "./IHasArmorClass";
import { IAttackResult } from "./IAttackResult";

export interface ICanAttack
    extends IHasScores
{
    baseAttack: IScore;
    initiative: IScore;

    readonly attacks: IterableIterator<IAttack>;
    addAttack(attack:IAttack): boolean;
    removeAttack(attack:IAttack): boolean;
    attack(target: IHasArmorClass):IAttackResult;
}
