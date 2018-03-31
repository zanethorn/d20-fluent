/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T10:34:49-04:00
 * @Project: d20-fluent
 * @Filename: Creature.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-31T00:11:32-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICreature } from './ICreature';
import {

    IHasAbilities,
    HasAbilitiesMixin,

    IHasAbilityScores,
    HasAbilityScoresMixin,

    IHasAlignment,
    HasAlignmentMixin,

    IHasArmorClass,
    HasArmorClassMixin,

    IHasSavingThrows,
    HasSavingThrowsMixin,

    IHasConditions,
    HasConditionsMixin,

    IHasChallengeRating,
    HasChallengeRatingMixin,

    IHasFeats,
    HasFeatsMixin,

    ICanAttack,
    CanAttackMixin,

    ICanMove,
    CanMoveMixin,

    IHasSkills,
    HasSkillsMixin,

    IHasScores,
    HasScoresMixin,

    IHasModifiers,
    HasModifiersMixin,

    IHasSize,
    HasSizeMixin,

    ICanTakeDamage,
    CanTakeDamageMixin
} from '../mechanics';
import {
    IHasItems,
    HasItemsMixin,

    IWearsItems,
    WearsItemsMixin
} from '../items';
import { ArrayList } from '../../collections';
import { ThingBase } from '../ThingBase';
import { ICreatureType } from './ICreatureType';
import { ICreatureSubtype } from './ICreatureSubtype';
import { CreatureType } from './CreatureType';
import { IArea } from '../locations';

export class Creature
    extends
    WearsItemsMixin (
        HasItemsMixin (
            HasAbilitiesMixin (
                HasAbilityScoresMixin (
                    HasAlignmentMixin (
                        CanTakeDamageMixin (
                            HasArmorClassMixin (
                                CanAttackMixin (
                                    HasConditionsMixin (
                                        HasChallengeRatingMixin (
                                            HasFeatsMixin (
                                                CanMoveMixin (
                                                    HasSavingThrowsMixin (
                                                        HasSizeMixin (
                                                            HasSkillsMixin (
                                                                HasScoresMixin (
                                                                    HasModifiersMixin(
                                                                        ThingBase
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
    implements ICreature
{
    private _type: ICreatureType = CreatureType.humanoid;
    private _subtypes: ArrayList<ICreatureSubtype> = new ArrayList<ICreatureSubtype>();

    get type(): ICreatureType {
        return this._type;
    }
    set type(value:ICreatureType) {
        for (let a of this._type.abilities) {
            this.removeAbility(a);
        }
        for (let m of this._type.modifiers) {
            this.removeModifier(m);
        }
        this._type = value;
        for (let a of value.abilities) {
            this.addAbility(a);
        }
        for (let m of value.modifiers) {
            this.addModifier(m);
        }
    }

    get subtypes(): IterableIterator<ICreatureSubtype> {
        return this._subtypes[Symbol.iterator]();
    }

    addSubtype(type:ICreatureSubtype): boolean {
        if(this._subtypes.add(type)) {
            for (let a of type.abilities) {
                this.addAbility(a);
            }
            for (let m of type.modifiers) {
                this.addModifier(m);
            }
        }
        return false;
    }
    removeSubtype(type:ICreatureSubtype): boolean {
        if(this._subtypes.remove(type)) {
            for (let a of type.abilities) {
                this.removeAbility(a);
            }
            for (let m of type.modifiers) {
                this.removeModifier(m);
            }
        }
        return false;
    }

    race: string;
    id: string;
    description: string;
    name: string;
    //area: IArea;
}
