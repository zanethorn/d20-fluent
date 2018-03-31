/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:51:02-04:00
 * @Project: d20-fluent
 * @Filename: Score.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-31T00:22:44-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "./IScore";
import { IModifier } from "./IModifier";
import { IHasScores } from './IHasScores';
import { roll } from "../../DieRoll";
import { Die } from "../../Die";
import { CheckResult } from "./CheckResult";
import { ICheckResult } from "./ICheckResult";
import { Constructor } from "../../Constructor";
import { IHasModifiers } from "./IHasModifiers";


export function HasScoresMixin<TBase extends Constructor<IHasModifiers>>(Base: TBase): TBase & Constructor<IHasScores> {
    return class extends Base implements IHasScores
    {
        get scores(): IterableIterator<IScore> {
            let self = <any>this;
            function *_scores() {
                for (let k in self) {
                    let v = self[k];
                    if (v.id !== undefined) {
                        yield v;
                    }
                }
            }
            return _scores();
        }

        getScore(id:string): IScore {
            throw new Error("Method not implemented.");
        }

    };
}
