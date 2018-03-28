/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:40:33-04:00
 * @Project: d20-fluent
 * @Filename: DefaultFramework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T08:49:47-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Id20Framework } from './Id20Framework';
import {
    Component,
    ComponentBase,
    ComponentFactory,
    ComponentInitializer,
    ComponentInitializerOrString,
    IComponent,
    IRuleset,
    Ruleset
} from './components';
import * as c from './components';
import { IEnumerable, ArrayList } from './collections';
import * as path from "path";

type ComponentConstructor<T> = new (parent:IComponent, name:string, initializer: ComponentInitializer) => T ;

export class DefaultFramework
    implements Id20Framework
{
    private static _instance: DefaultFramework;
    private _currentComponent: IComponent;
    private readonly _children: ArrayList<IComponent> = new ArrayList<IComponent>();


    name: string = "_";
    description: string = "Default d20 Rules Framework";

    constructor() {

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
        return this._children[Symbol.iterator]();
    }

    find(p:any): IComponent {
        throw "Not implemented";
    }

    ruleset: ComponentFactory<IRuleset>;

    include(p: IComponent | string): void{
        console.log("Importing %s...", p);
        import(<string>p).then((m) => {
            console.log("%s imported successfully", p);
            for (let p in m) {
                let v:any = m[p];
                console.log("%s:%s", p, v);
            }
        });
    }

    initializer(): void {
        this._currentComponent = this;
        this.ruleset = this._factoryFactory(Ruleset);

        let coreRulesPath = path.join(__dirname, "../rulesets/core");
        this.include(coreRulesPath);
    }
    destructor(): void {

    }

    private _factoryFactory<TType extends IComponent>(t:ComponentConstructor<TType>): ComponentFactory<TType> {
        let self = this;
        return function(name: string, initializer: () => void): TType {

            let c = new t(
                self._currentComponent,
                name,
                initializer
            );

            (<any>self._currentComponent)[name] = c;
            self._currentComponent = c;
            c.initializer.call(c);
            self._currentComponent = c.parent;
            return c;
        }
    }


}
