/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:49:19-04:00
 * @Project: d20-fluent
 * @Filename: AbilityScore.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:29:40-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IAbilityScore } from './IAbilityScore';
import { Score } from '../Score';
import { IHasScores } from '../IHasScores';
import { IModifier } from '../IModifier';
import { AbilityScoreType } from './AbilityScoreType'
import { AbilityModifier } from './AbilityModifier';
import { IAbilityModifier } from './IAbilityModifier';

export abstract class AbilityScore
    extends Score
    implements IAbilityScore
{
    readonly abilityModifier: IAbilityModifier = new AbilityModifier(this);

    constructor(public readonly type: AbilityScoreType, id:string, parent: IHasScores) {
        super(id, parent);
        parent.addModifier(this.abilityModifier);
    }
}
