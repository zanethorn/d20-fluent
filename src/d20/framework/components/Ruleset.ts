/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:58:46-04:00
 * @Project: d20-fluent
 * @Filename: Ruleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T19:31:58-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { ComponentBase } from './ComponentBase';
import { ComponentInitializer } from './ComponentInitializer';
import { IComponent } from './IComponent';
import { IRuleset } from "./IRuleset";
import { IRule } from "./IRule";
import { ArrayList, IEnumerable } from '../collections';

export class Ruleset
    extends ComponentBase
    implements IRuleset
{
    private _rules: ArrayList<IRule> = new ArrayList<IRule>();

    constructor(
        parent:IComponent,
        name:string,
        description: string,
        initializer: ComponentInitializer
        ) {
        super(parent, name, description, initializer);
    }

    get rules(): IEnumerable<IRule> {
        return this._rules;
    }

    addRule(r:IRule): void {
        this._rules.add(r);
    }

    apply():void {
        this.initializer.call(this);
    }
}
