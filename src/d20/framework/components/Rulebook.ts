/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:58:46-04:00
 * @Project: d20-fluent
 * @Filename: Ruleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T18:42:35-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IRulebook } from "./IRulebook";
import { IRule } from "./IRule";
import { Rule } from "./Rule";

export type RulebookBinder = (id: string, ...rules: IRule[]) => IRulebook;

export class Rulebook
    implements IRulebook
{
    readonly rules: IRule[] = [];

    description:string;

    constructor(readonly id:string) {}

    apply(): void {
        for (let r of this.rules){
            r.apply();
        }
    }
}
