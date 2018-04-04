/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-04-03T19:49:50-04:00
 * @Project: d20-fluent
 * @Filename: ComponentLibrary.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T19:59:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent";
import { IComponentLibrary } from "./IComponentLibrary";

class ComponentLibrary
    implements ComponentLibrary
{
    private _components: any = {};

    registerComponent(component:IComponent):void{
        if (this._components[component.id] !== undefined){
            throw new Error("Component is already registered");
        }

        this._components[component.id] = component;
        console.log("Registered component %s", component.id);
    }

    getComponent(id:string): IComponent{
        return this._components[id] as IComponent;
    }

    makeInstance<T extends IComponent>(id:string, map?:any): T{
        let cmp = this.getComponent(id);
        let result = Object.create(cmp);
        return result as T;
    }
}

const DefaultComponentLibrary: IComponentLibrary = new ComponentLibrary();

export type ComponentLibraryFactory = () => IComponentLibrary;

export var DefaultComponentLibraryFactory: ComponentLibraryFactory =
    () => { return DefaultComponentLibrary };
