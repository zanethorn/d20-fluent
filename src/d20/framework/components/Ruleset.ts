/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:58:46-04:00
 * @Project: d20-fluent
 * @Filename: Ruleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:12:04-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { ComponentBase } from './ComponentBase';
import { ComponentInitializer } from './ComponentInitializer';
import { IComponent } from './IComponent';
import { IRuleset } from "./IRuleset";
import { IRule } from "./IRule";
import { Rule } from "./Rule";
import { ArrayList, IEnumerable } from '../collections';

export class Ruleset
    extends ComponentBase
    implements IRuleset
{
    constructor(
        parent:IComponent,
        name:string
        ) {
        super(parent, name);
    }

    get rules(): IterableIterator<IRule> {
        // let self = this;
        // function *_rules() {
        //     // for (let v of self.children){
        //     //     if (v instanceof Rule || v instanceof Ruleset) {
        //     //         yield <IRule>v;
        //     //     }
        //     // }
        // }
        // return _rules();
        return null;
    }

    // apply():void {
    //     for (let r of this.rules){
    //         r.apply();
    //     }
    // }
}
