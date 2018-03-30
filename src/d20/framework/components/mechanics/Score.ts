/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:51:02-04:00
 * @Project: d20-fluent
 * @Filename: Score.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:11:20-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "./IScore";
import { IModifier } from "./IModifier";
import { IHasScores } from './IHasScores';

export abstract class Score
    implements IScore
{
    description: string;
    value: number;

    constructor(public readonly id:string, public readonly parent: IHasScores) { }

    get modifiers(): IterableIterator<IModifier> {
        function *_modifiers() {
            for (let m of this.parent.modifiers) {
                if (m.appliesTo(this)){
                    yield m;
                }
            }
        }
        return _modifiers();
    }
    get modifiedValue(): number {
        let t = this.value;
        for (let m of this.modifiers) {
            t += m.value;
        }
        return t;
    }
}
