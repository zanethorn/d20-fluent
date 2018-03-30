/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:49:19-04:00
 * @Project: d20-fluent
 * @Filename: AbilityScore.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:55:19-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IAbilityScore } from './IAbilityScore';
import { Score } from '../Score';
import { IHasScores } from '../IHasScores';
import { IModifier } from '../IModifier';
import { AbilityScoreType } from './AbilityScoreType'
import { IAbilityModifier } from './IAbilityModifier';
import { ModifierType } from '../ModifierType';
import { IScore } from '../IScore';
import { IHasAbilityScores } from '.';
import { Constructor } from '../../../Constructor';


class AbilityModifier
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
        if (
            (<any>score).type !== undefined &&
            (<any>score).type.abilityScore === this.abilityScore
        ){
            return true;
        }
        return false;
    }
}


abstract class AbilityScore
    extends Score
    implements IAbilityScore
{
    readonly abilityModifier: IAbilityModifier = new AbilityModifier(this);

    constructor(
        public readonly type: AbilityScoreType,
        id:string, parent: IHasScores
    ) {
        super(id, parent);

    }
}

class Strength
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.strength, "strength", parent);
    }
}

class Dexterity
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.dexterity, "dexterity", parent);
    }
}

class Constitution
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.constitution, "constitution", parent);
    }
}

class Intelligence
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.intelligence, "intelligence", parent);
    }
}

class Wisdom
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.wisdom, "wisdom", parent);
    }
}

class Charisma
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.charisma, "charisma", parent);
    }
}

export type AbilityScoreFactory = (type:AbilityScoreType, parent: IHasScores) => IAbilityScore;

export var DefaultAbilityScoreFactory: AbilityScoreFactory =
    (type:AbilityScoreType, parent: IHasScores) => {
        var score:IAbilityScore;
        switch (type){
            case AbilityScoreType.strength:
                score = new Strength(parent);
                break;
            case AbilityScoreType.dexterity:
                score = new Dexterity(parent);
                break;
            case AbilityScoreType.constitution:
                score = new Constitution(parent);
                break;
            case AbilityScoreType.intelligence:
                score = new Intelligence(parent);
                break;
            case AbilityScoreType.wisdom:
                score = new Wisdom(parent);
                break;
            case AbilityScoreType.charisma:
                score = new Charisma(parent);
                break
        }

        parent.addModifier(score.abilityModifier);
        return score;
    };

export function HasAbilityScoresMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasAbilityScores> {
    return class extends Base implements IHasAbilityScores
    {
        readonly strength: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.strength, (<IHasAbilityScores><any>this));
        readonly dexterity: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.dexterity, (<IHasAbilityScores><any>this));
        readonly constitution: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.constitution, (<IHasAbilityScores><any>this));
        readonly intelligence: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.intelligence, (<IHasAbilityScores><any>this));
        readonly wisdom: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.wisdom, (<IHasAbilityScores><any>this));
        readonly charisma: IAbilityScore = DefaultAbilityScoreFactory(AbilityScoreType.charisma, (<IHasAbilityScores><any>this));
    };
}
