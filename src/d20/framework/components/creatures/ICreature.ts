/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:57:20-04:00
 * @Project: d20-fluent
 * @Filename: ICreature.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T14:07:48-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IThing } from '../IThing';
import { ICreatureSubtype } from './ICreatureSubtype';
import {
    IHasAbilityScores,
    IAbilityScore,
    IHasSavingThrows,
    IHasSkills,
    IHasSize,
    IHasAlignment,
    ICanMove,
    ICanTakeDamage,
    ICanAttack,
    IHasArmorClass,
    IHasFeats,
    IHasChallengeRating,
    IHasAbilities,
    IHasConditions
} from '../mechanics';
import { IHasType } from '../../IHasType';
import { IHasName } from '../../IHasName';
import { IWearsItems } from '../items/IWearsItems';
import { ICreatureType } from './ICreatureType';

export interface ICreature
    extends
    IThing,
    IHasAbilities,
    IHasAbilityScores,
    IHasAlignment,
    ICanAttack,
    IHasArmorClass,


    IHasSavingThrows,
    IHasSkills,
    IHasSize,

    ICanMove,
    ICanTakeDamage,

    IHasFeats,
    IHasName,
    IWearsItems,
    IHasChallengeRating,

    IHasConditions
{
    type: ICreatureType;
    race: string;

    readonly subtypes: IterableIterator<ICreatureSubtype>;
    addSubtype(type:ICreatureSubtype): boolean;
    removeSubtype(type:ICreatureSubtype): boolean;
}
