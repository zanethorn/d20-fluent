/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T09:49:05-04:00
 * @Project: d20-fluent
 * @Filename: IHasAbilities.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T22:13:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IAbility } from "./IAbility";
import { IHasScores } from "../IHasScores";

export interface IHasAbilities
    extends IHasScores
{
    readonly abilities: IterableIterator<IAbility>;
    addAbility(ability:IAbility):boolean;
    removeAbility(ability:IAbility): boolean;
}
