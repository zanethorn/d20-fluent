/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T21:26:19-04:00
 * @Project: d20-fluent
 * @Filename: AbilityScoreModifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:07:38-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Modifier } from '../Modifier'
import { IAbilityModifier } from './IAbilityModifier';
import { IAbilityScore } from './IAbilityScore';
import { ModifierType } from '../ModifierType';
import { IScore } from '../IScore';

export class AbilityModifier
    implements IAbilityModifier
{
    constructor(public readonly abilityScore: IAbilityScore) {}

    get type(): ModifierType {
        return ModifierType.ability;
    }

    get value(): number {
        return 0;
    }

    appliesTo(score: IScore): boolean {
        throw new Error("Method not implemented.");
    }
}
