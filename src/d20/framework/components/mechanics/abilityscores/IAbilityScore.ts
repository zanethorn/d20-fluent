/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:24:43-04:00
 * @Project: d20-fluent
 * @Filename: IAbilityScore.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:09:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from '../IScore';
import { IHasType } from '../../../IHasType';
import { AbilityScoreType } from './AbilityScoreType';
import { IModifier } from '../IModifier';

declare module './IAbilityModifier'
{
    export interface IAbilityModifier
        extends IModifier
    {

    }
}
import { IAbilityModifier } from './IAbilityModifier';


export interface IAbilityScore
    extends IScore, IHasType<AbilityScoreType>
{
    readonly abilityModifier: IAbilityModifier;
}
