/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:40:33-04:00
 * @Project: d20-fluent
 * @Filename: DefaultFramework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T15:02:21-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Id20Framework } from './Id20Framework';
import {
    ComponentBase,
    ComponentFactory,
    ComponentInitializer,
    ComponentInitializerOrString,
    IComponent,
    IRule,
    Rule,
    IRuleset,
    Ruleset,
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

    name: string = "Framework";
    description: string = "Default d20 Rules Framework";

    constructor() {
        this._currentComponent = this;
        this.ruleset = this._factoryFactory(Ruleset);
        this.rule = this._factoryFactory(Rule);
    }

    get currentComponent(): IComponent {
        return this._currentComponent;
    }

    get d20(): Id20Framework {
        return this;
    }

    get parent(): IComponent {
        return this;
    }

    get children(): IterableIterator<IComponent> {
        return this._children();
    }

    private *_children() {
        console.log('Listing components of self:');
        for (let k in (<any>this)) {
            let v = (<any>this)[k];
            if (v instanceof ComponentBase) {
                yield v;
            }
        }
    }

    find(p:any): IComponent {
        throw "Not implemented";
    }

    ruleset: ComponentFactory<IRuleset>;
    rule: ComponentFactory<IRule>;

    include(path:string): Promise<any> {
        console.log("Importing %s...", p);
        return import(<string>p).then((m) => {
            console.log("%s imported successfully", p);
        });
    }

    init(): void {
        let coreRulesPath = path.join(__dirname, "../rulesets/core");
        this.include(coreRulesPath);
    }
    destructor(): void {

    }

    private _factoryFactory<TType extends IComponent>(t:ComponentConstructor<TType>): ComponentFactory<TType> {
        let self = this;
        return function(name: string, callback: ComponentCallback): TType {

            let c = new t(
                self._currentComponent,
                name
            );

            (<any>self._currentComponent)[name] = c;
            self._currentComponent = c;
            callback(c);
            self._currentComponent = c.parent;
            return c;
        }
    }
}
