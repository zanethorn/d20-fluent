/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T12:22:16-04:00
 * @Project: d20-fluent
 * @Filename: BaseAttack.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:08:14-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Score } from "../Score";
import { ICanAttack } from "./ICanAttack";
import { IScore } from "../IScore";
import { ArrayList } from "../../../collections";
import { IAttack } from "./IAttack";
import { IHasArmorClass } from "./IHasArmorClass";
import { IAttackResult } from ".";
import { Constructor } from "../../../Constructor";
import { IHasScores } from "../IHasScores";

class BaseAttack
    extends Score
{
    constructor(public readonly parent: ICanAttack)
    {
        super("baseAttack", parent)
    }
}

class Initiative
    extends Score
{
    constructor(public readonly parent: ICanAttack)
    {
        super("initiative", parent)
    }
}

export type BaseAttackFactory = (parent: ICanAttack) => IScore;

export var DefaultBaseAttackFactory: BaseAttackFactory = (parent: ICanAttack)  => {
    return new BaseAttack(parent);
}


export type InitiativeFactory = (parent: ICanAttack) => IScore;

export var DefaultInitiativeFactory: InitiativeFactory = (parent: ICanAttack)  => {
    return new Initiative(parent);
}

export function CanAttackMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<ICanAttack> {
    return class extends Base implements ICanAttack
    {
        private _attacks: ArrayList<IAttack> = new ArrayList<IAttack>();

        readonly baseAttack: IScore = DefaultBaseAttackFactory(this);
        readonly initiative: IScore = DefaultInitiativeFactory(this);

        get attacks(): IterableIterator<IAttack> {
            return this._attacks[Symbol.iterator]();
        }

        addAttack(attack:IAttack): boolean {
            return this._attacks.add(attack);
        }
        removeAttack(attack:IAttack): boolean {
            return this._attacks.remove(attack);
        }

        attack(target: IHasArmorClass):IAttackResult{
            throw new Error("Method not implemented.");
        }
    };
}