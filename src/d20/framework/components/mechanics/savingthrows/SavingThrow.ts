/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:22:47-04:00
 * @Project: d20-fluent
 * @Filename: SavingThrow.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:34:05-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ISavingThrow } from "./ISavingThrow";
import { Score } from "../Score";
import { SavingThrowType } from "./SavingThrowType";
import { IHasScores } from "../IHasScores";
import { IHasSavingThrows } from "./IHasSavingThrows";

abstract class SavingThrow
    extends Score
    implements ISavingThrow
{
    constructor(public readonly type: SavingThrowType, id:string, parent: IHasSavingThrows) {
        super(id, parent);
    }
}

class Fortitude
    extends SavingThrow
{
    constructor(parent: IHasSavingThrows) {
        super(SavingThrowType.fortitude, "fortitude", parent);
    }
}

class Reflex
    extends SavingThrow
{
    constructor(parent: IHasSavingThrows) {
        super(SavingThrowType.reflex, "reflex", parent);
    }
}

class Will
    extends SavingThrow
{
    constructor(parent: IHasSavingThrows) {
        super(SavingThrowType.will, "will", parent);
    }
}

export type SavingThrowFactory = (type:SavingThrowType, parent: IHasSavingThrows) => ISavingThrow;

export var DefaultSavingThrowFactory: SavingThrowFactory =
    (type:SavingThrowType, parent: IHasSavingThrows) => {
        switch (type){
            case SavingThrowType.fortitude:
                return new Fortitude(parent);
            case SavingThrowType.reflex:
                return new Reflex(parent);
            case SavingThrowType.will:
                return new Will(parent);
        }
    };


export function HasSavingThrowsMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        readonly fortitude: ISavingThrow = DefaultSavingThrowFactory(SavingThrowType.fortitude, <IHasSavingThrows><any>this);
        readonly reflex: ISavingThrow = DefaultSavingThrowFactory(SavingThrowType.reflex, <IHasSavingThrows><any>this);
        readonly will: ISavingThrow = DefaultSavingThrowFactory(SavingThrowType.will, <IHasSavingThrows><any>this);
    };
}
