/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T16:24:35-04:00
 * @Project: d20-fluent
 * @Filename: dice.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T13:00:21-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IsClonable, IClonable, IsClonable } from './clonable';
import './modifiers'

function* listModifierNames(): IterableIterator<string> {
    for (var enumMember in ModifierType) {
        var isValueProperty = parseInt(enumMember, 10) >= 0
        if (isValueProperty) {
            yield ModifierType[enumMember];
        }
    }
}

export interface IRollModifiers {
    readonly ability: number;
    readonly alchemical: number;
    readonly armor: number;
    readonly base: number;
    readonly circumstance: number;
    readonly competence: number;
    readonly deflection: number;
    readonly dodge: number;
    readonly enchantment: number;
    readonly insight: number;
    readonly luck: number;
    readonly morale: number;
    readonly natural_armor: number;
    readonly profane: number;
    readonly racial: number;
    readonly resistance: number;
    readonly sacred: number;
    readonly shield: number;
    readonly size: number;

    readonly total: number;
}

export interface IDieRoll
    extends IClonable
{
    readonly number: number;
    readonly sides: number;
    readonly min: number;
    readonly max: number;
    readonly modifier: number;
    readonly bonuses: IRollModifiers;
    readonly penalties: IRollModifiers;

    plus(v: number, type?:ModifierType, stacks?:boolean) : IDieRoll;
    minus(v: number, type?:ModifierType, stacks?:boolean): IDieRoll;

    roll(): IRollResult;
}

export interface IRollResult {
    readonly roll: IDieRoll;
    readonly value: number;
}

class _RollModifiers
{
    constructor(){
        let me = <any>this;
        for (let n of listModifierNames()){
            if (me[n] === undefined){
                me[n] = 0;
            }
        }
    }

    get total(): number {
        let t = 0;
        let me = <any>this;
        for (let n of listModifierNames()){
            t += <number>me[n];
        }
        return t;
    }

    // ClonableMixin methods
    clone: () => IClonable;
}

class RollModifiers extends IsClonable(_RollModifiers){};

class _DieRoll implements IDieRoll
{
    private _bonuses:   RollModifiers;
    private _penalties: RollModifiers;

    readonly number: number;
    readonly sides: number;


    constructor(number: number, sides: number) {
        this.number = number;
        this.sides = sides;
        this._bonuses = new RollModifiers();
        this._penalties = new RollModifiers();
    }

    get bonuses(): IRollModifiers {
        return (<any>this._bonuses) as IRollModifiers;
    }
    get penalties(): IRollModifiers {
        return (<any>this._penalties) as IRollModifiers;
    }

    get min(): number {
        return this.number + this.modifier;
    }

    get max(): number {
        return (this.number * this.sides) + this.modifier;
    }

    get modifier(): number {
        return this.bonuses.total - this.penalties.total;
    }

    plus(v: number, type:ModifierType = ModifierType.base, stacks:boolean = false) : IDieRoll{
        // Check to make sure negative numbers get processed correctly
        if (v < 0){
            return this.minus(-v, type, stacks);
        }

        // Simple numbers always stack
        if(type == ModifierType.base){
            stacks = true;
        }

        let result = <DieRoll>this.clone();
        result._bonuses = <RollModifiers>this._bonuses.clone();
        result._penalties = <RollModifiers>this._penalties.clone();

        let modifierName = ModifierType[type];
        let modifierValue = <number>(<any>result._bonuses)[modifierName];
        if (stacks){
            modifierValue += v;
        }
        else if (v > modifierValue) {
            modifierValue = v;
        }

        (<any>result._bonuses)[modifierName] = modifierValue;

        return result;
    }
    minus(v: number, type:ModifierType = ModifierType.base, stacks:boolean = false): IDieRoll{
        // Check to make sure negative numbers get processed correctly
        if (v < 0){
            return this.minus(-v, type, stacks);
        }

        // Simple numbers always stack
        if(type == ModifierType.base){
            stacks = true;
        }

        let result = <DieRoll>this.clone();
        result._bonuses = <RollModifiers>this._bonuses.clone();
        result._penalties = <RollModifiers>this._penalties.clone();

        let modifierName = ModifierType[type];
        let modifierValue = <number>(<any>result._penalties)[modifierName];
        if (stacks){
            modifierValue += v;
        }
        else if (v > modifierValue) {
            modifierValue = v;
        }

        (<any>result._penalties)[modifierName] = modifierValue;

        return result;
    }

    roll(): IRollResult {
        let t = 0;
        for (let i =0; i < this.number; i++){
            t += Math.floor(Math.random() * this.sides) + 1;
        }
        t += this.modifier;
        return new RollResult(this, t);
    }

    // ClonableMixin methods
    clone: () => IClonable;
}
class DieRoll extends Clonable(_DieRoll){};

class RollResult
    implements IRollResult
{
    readonly roll: IDieRoll;
    readonly value: number;

    constructor(roll: IDieRoll, value: number){
        this.roll = roll;
        this.value = value;
    }
}

export function roll(n:number,d:number):IDieRoll {
    return new DieRoll(n,d);
}
