/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:58:46-04:00
 * @Project: d20-fluent
 * @Filename: Ruleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T19:25:41-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IRulebook } from "./IRulebook";
import { IRule } from "./IRule";
import { Rule } from "./Rule";
import { ComponentBase } from "./ComponentBase";

export type RulebookBinder = (id: string, ...rules: IRule[]) => IRulebook;

export class Rulebook
    extends ComponentBase
    implements IRulebook
{
    readonly rules: IRule[] = [];


    constructor(id:string) {
        super(id);
    }

    apply(): void {
        for (let r of this.rules){
            r.apply();
        }
    }
}
