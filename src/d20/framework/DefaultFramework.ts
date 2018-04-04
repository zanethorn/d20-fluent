/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:40:33-04:00
 * @Project: d20-fluent
 * @Filename: DefaultFramework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T20:19:47-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Id20Framework } from './Id20Framework';
import {
    IComponent,
    IRule,
    IRulebook,
} from './components';
import * as c from './components';
import { IEnumerable, ArrayList } from './collections';
import * as path from "path";
import { v4 } from 'node-uuid';
import { RulebookBinder, Rulebook } from './components/Rulebook';
import { Rule } from './components/Rule';
import { ICreature } from './components/creatures';
import { DefaultComponentLibraryFactory } from './components/ComponentLibrary';

type ComponentConstructor<T> = new (parent:IComponent, name:string) => T ;

export class DefaultFramework
    implements Id20Framework
{

    private _currentComponent: IComponent;

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

    find(p:any): IComponent {
        throw "Not implemented";
    }

    get rulebook(): RulebookBinder {
        let self = this;
        function _rulebook(id: string, ...rules: IRule[]): IRulebook {

            let rulebook:IRulebook = DefaultComponentLibraryFactory().getComponent(id) as IRulebook;
            if (rulebook === undefined){
                rulebook = new Rulebook(id);
                console.log("Making rulebook %s", id);
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

    get include(): (path:string) => Promise<any> {
        function _include(path:string): Promise<any> {
            console.log("Importing %s...", path);
            return import(path).then((m) => {
                console.log("%s imported successfully", path);
            }).catch((err:any) => {
                console.log("Failed to import %s with error %s.", path, err);
            });
        };
        return _include;
    }

    get creature(): (type:string, map?: any) => ICreature {
        let self = this;
        function _creature(type:string, map: any={}): ICreature {
            let result = DefaultComponentLibraryFactory().makeInstance<ICreature>(type, map);
            result.name = "New thingy";
            console.log(result);
            return result;
        }
        return _creature;
    }

    initialize(): void {
        // let coreRulesPath = path.join(__dirname, "rulesets/core/index.js");
        // console.log("coreRulesPath: %s = %s",__dirname, coreRulesPath);
        // this.include(coreRulesPath).then;
        this.rulebook('core_rules').apply();
    }

}
