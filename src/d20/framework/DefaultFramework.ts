/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:40:33-04:00
 * @Project: d20-fluent
 * @Filename: DefaultFramework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T18:42:27-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Id20Framework } from './Id20Framework';
import {
    //ComponentBase,
    ComponentFactory,
    ComponentInitializer,
    ComponentInitializerOrString,
    IComponent,
    IRule,
    Rule,
    IRulebook,
    RulebookBinder,
    Rulebook,
    ComponentCallback
} from './components';
import * as c from './components';
import { IEnumerable, ArrayList } from './collections';
import * as path from "path";
import { v4 } from 'node-uuid';

type ComponentConstructor<T> = new (parent:IComponent, name:string) => T ;

export class DefaultFramework
    implements Id20Framework
{
    private _currentComponent: IComponent;
    readonly rulebooks: IRulebook[] = [];

    description: string = "Default d20 Rules Framework";

    constructor() {
        this._currentComponent = this;
    }

    get id(): string {
        return "d20Framework";
    }

    get currentComponent(): IComponent {
        return this._currentComponent;
    }

    get d20(): Id20Framework {
        return this;
    }

    find(p:any): IComponent {
        throw "Not implemented";
    }

    get rulebook(): RulebookBinder {
        let self = this;
        function _rulebook(id: string, ...rules: IRule[]): IRulebook {

            let rulebook:IRulebook = undefined;
            for(let r of self.rulebooks){
                if (r.id === id){
                    rulebook = r;
                    break;
                }
            }

            if (rulebook === undefined){
                rulebook = new Rulebook(id);
                console.log("Making rulebook %s", id);
                self.rulebooks.push(rulebook);
            }

            for (let r of rules) {
                console.log("Added rule %s to rulebook %s.", r.id, rulebook.id);
                rulebook.rules.push(r);
            }

            return rulebook;
        }
        return _rulebook;
    }

    get rule(): (id:string, onApply: () => void) => IRule {
        let self = this;
        function _rule(id:string, onApply: () => void): IRule {
            return new Rule(id, onApply);
        }
        return _rule;
    }

    include(path:string): Promise<any> {
        console.log("Importing %s...", path);
        return import(<string>path).then((m) => {
            console.log("%s imported successfully", path);
        });
    }

    initialize(): void {
        let coreRulesPath = path.join(__dirname, "../rulesets/core");
        this.include(coreRulesPath);
    }

}
