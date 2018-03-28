/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T08:21:34-04:00
 * @Project: d20-fluent
 * @Filename: _core.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T09:52:50-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */








export interface IHasScores
    extends IHasModifiers, IObservable
{
    scores(): Iterator<IModifier>;
}

export interface IScore
    extends IHasValue, IHasName, IObservable
{
    readonly parent: IHasScores;
    canApplyModifier(modifier:IModifier): boolean;
}

export interface IThing
    extends IHasScores
{
    area: IArea;
}

export interface IHasThings
{
    modifiers(): Iterator<IThing>;
    addModifier(thing:IThing): void;
    removeModifier(thing:IThing): void;
}

export interface IArea
    extends IHasThings, IObservable
{
    readonly parent: IArea;

}

export enum AbilityScoreType
{
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
}

export interface IHasKeyAbility {
    readonly keyAbility: AbilityScoreType;
}

export interface IAbilityScore
    extends IScore, IHasType<AbilityScoreType>
{
    abilityModifier: IModifier;
}

export interface IHasAbilityScores
    extends IHasScores
{
    readonly strength: IAbilityScore;
    readonly dexterity: IAbilityScore;
    readonly constitution: IAbilityScore;
    readonly intelligence: IAbilityScore;
    readonly wisdom: IAbilityScore;
    readonly charisma: IAbilityScore;
}

export enum SavingThrowType
{
    Fortitude,
    Reflex,
    Will
}

export interface ISavingThrow
    extends IScore, IHasType<SavingThrowType>, IHasKeyAbility
{
}

export interface IHasSavingThrows
{
    readonly fortitude: ISavingThrow;
    readonly reflex: ISavingThrow;
    readonly will: ISavingThrow;
}

export interface ISkillType
    extends IHasKeyAbility, IHasName
{
    readonly canUseUntrained: boolean;
}

export interface IHasSkills
    extends IHasScores
{
    readonly skills: IEnumerable<ISkill>;

    getSkill(type:SkillType): ISkill;
    addSkillRanks(type:SkillType, ranks: number): ISkill;
}

//export interface ICreature
