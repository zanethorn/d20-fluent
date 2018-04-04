/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-04-03T19:53:24-04:00
 * @Project: d20-fluent
 * @Filename: IComponentLibrary.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T19:55:40-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent";

export interface IComponentLibrary {
    registerComponent(component:IComponent):void;
    getComponent(id:string): IComponent;
    makeInstance<T extends IComponent>(id:string, map?:any): T;
}
