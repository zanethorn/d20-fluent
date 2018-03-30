/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T11:10:21-04:00
 * @Project: d20-fluent
 * @Filename: CheckResult.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T11:37:30-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICheckResult } from "./ICheckResult";
import { IScore } from "./IScore";
import { IModifier } from "./IModifier";

export class CheckResult
implements ICheckResult
{
    get isNatural1(): boolean {
        return this.value == 1;
    }
    get isNatural20(): boolean {
        return this.value == 20;
    }
    get success(): boolean {
        if (this.isNatural1){
            return false;
        }
        else if (this.isNatural20){
            return true;
        }
        return this.modifiedValue >= this.dc;
    }

    get modifiers(): IterableIterator<IModifier> {
        return this._modifiers[Symbol.iterator]();
    }

    get modifiedValue(): number {
        let t = 0;
        for (let m of this._modifiers){
            t+=m.value;
        }
        return t;
    }

    constructor(
        public readonly score: IScore,
        public readonly value: number,
        public readonly dc: number,
        private readonly _modifiers: IModifier[]
    ){

    }



}
