/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:31:21-04:00
 * @Project: d20-fluent
 * @Filename: ComponentBase.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T20:10:04-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IComponent } from "./IComponent"
import { ComponentInitializer } from './ComponentInitializer'
import { IEnumerable, ArrayList } from '../collections'

export abstract class ComponentBase
    implements IComponent
{
    private readonly _children: ArrayList<IComponent> = new ArrayList<IComponent>();

    constructor(
        public readonly parent:IComponent,
        public name:string,
        public description: string,
        public initializer: ComponentInitializer
        ) {

    }

    get children(): IEnumerable<IComponent> {
        return this._children;
    }

    destructor: () => void;

    find(p:any): IComponent {
        throw "Not implemented";
    }
}
