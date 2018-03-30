/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T10:34:49-04:00
 * @Project: d20-fluent
 * @Filename: Creature.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:36:36-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICreature } from './ICreature';
import {
    DefaultAbilityScoreFactory,
    IAbilityScore,
    AbilityScoreType,
    IAbility,
    Alignment,
    IScore,
    IArmorClass,
    ICondition,
    IAttack,
    IHasArmorClass,
    IAttackResult,
    IFeat,
    ISavingThrow,
    SavingThrowType,
    ISkill
} from '../mechanics';
import { ArrayList } from '../../collections';
import { DefaultBaseAttackFactory } from '../mechanics/combat/BaseAttack';
import { DefaultInitiativeFactory } from '../mechanics/combat/Initiative';
import { DefaultArmorClassFactory } from '../mechanics/combat/ArmorClass';
import { DefaultSpeedFactory } from '../mechanics/movement/Speed';
import { DefaultSavingThrowFactory } from '../mechanics/savingthrows/SavingThrow';
import { ISize } from '../mechanics/size/ISize';
import { Thing } from '../Thing';

export class Creature
    extends
    HasAbilitiesMixin (
    HasAbilityScoresMixin (
    HasAlignmentMixin (
    HasArmorClassMixin (
    CanAttackMixin (
    HasConditionsMixin (
    HasChallengeRatingMixin (
    HasFeatsMixin (
    CanMoveMixin (
    HasSavingThrows (
    HasScoresMixin (
        Thing
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





    private _skills: ArrayList<ISkill> = new ArrayList<ISkill>();
    




    get skills(): IterableIterator<ISkill> {
        return this._skills[Symbol.iterator]();
    }

    constructor(){}



    getSkill(type: SkillType): ISkill {
        let skill:ISkill = null;
        for (let s of this._skills) {
            skill = s;
            break;
        }

        if (skill === undefined) {
            if (type.useUntrained){
                skill = new Skill(type, this);
                this._skills.add(skill);
            }
        }

        return skill;
    }
    addSkillRanks(type: ISkillType, ranks: number): ISkill {
        throw new Error("Method not implemented.");
    }

    subtypes: IterableIterator<ICreatureSubtype>;
    race: string;
    area: IArea;
    id: string;
    description: string;

    scores: IterableIterator<IScore>;
    getScore(id: string): IScore {
        throw new Error("Method not implemented.");
    }
    modifiers: IterableIterator<IModifier>;
    addModifier(modifier: IModifier): boolean {
        throw new Error("Method not implemented.");
    }
    removeModifiers(modifier: IModifier): boolean {
        throw new Error("Method not implemented.");
    }

    weight: number;
    sizeModifer: IModifier;

    move(d: Direction): void {
        throw new Error("Method not implemented.");
    }
    maxHitPoints: number;
    injuries: number;
    subdualDamage: number;
    currentHitPoints: number;
    hardness: number;
    takeDamage(damage: IDamage): void {
        throw new Error("Method not implemented.");
    }

    type: ICreatureType;


    name: string;
    items: IterableIterator<IItem>;
    addItem(item: IItem): boolean {
        throw new Error("Method not implemented.");
    }
    removeItem(item: IItem): boolean {
        throw new Error("Method not implemented.");
    }


}
