/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:40:33-04:00
 * @Project: d20-fluent
 * @Filename: DefaultFramework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T21:45:00-04:00
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

type ComponentConstructor<T> = new (parent:IComponent, name:string, description: string,initializer: ComponentInitializer) => T ;

export class DefaultFramework
    implements Id20Framework
{
    private static _instance: DefaultFramework;
    private _currentComponent: IComponent;
    private readonly _children: ArrayList<IComponent> = new ArrayList<IComponent>();


    name: string;
    description: string;


    private constructor() {

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

    get children(): IEnumerable<IComponent> {
        return this._children;
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
        this.ruleset = this._factoryFactory(Ruleset);

        let coreRulesPath = path.join(__dirname, "../rulesets/core/core.ruleset.js");
        this.include(coreRulesPath);
    }
    destructor(): void {

    }

    private _factoryFactory<TType extends IComponent>(t:ComponentConstructor<TType>): ComponentFactory<TType> {
        let self = this;
        return function(...args:ComponentInitializerOrString[]): TType {
            let l = args.length;
            let name: string = '';
            let description: string = '';
            var initializer: ComponentInitializer = () => {};
            let c: TType;

            if (l === 0){
                throw new Error("Unable to construct object, no arguments provided");
            }
            else if (l === 1) {
                if (typeof args[0] === 'string'){
                    name = <string>args[0];
                }
                else {
                    initializer = <ComponentInitializer>args[0];
                }
            }
            else if (l === 2) {
                if (typeof args[0] !== 'string'){
                }
                else {
                    name = <string>args[0];
                }
                initializer = <ComponentInitializer>args[1];
            }

            console.log("TType:")
            console.log(t);
            c = new t(
                self._currentComponent,
                name,
                description,
                initializer
            );
            let oldComponent = self._currentComponent;
            self._children.add(c);
            self._currentComponent = c;
            c.initializer.call(c);
            self._currentComponent = oldComponent;
            return c;
        }
    }

    public static get instance(): Id20Framework {
        if (!this._instance){
            this._instance = new this();
            this._instance.initializer();
        }
        return this._instance;
    }
}
