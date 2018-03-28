/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:31:21-04:00
 * @Project: d20-fluent
 * @Filename: ComponentBase.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:08:04-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IComponent } from "./IComponent"
import { ComponentInitializer } from './ComponentInitializer'
import { IEnumerable, ArrayList } from '../collections'

export abstract class ComponentBase
    implements IComponent
{
    //private readonly _children: ArrayList<IComponent> = new ArrayList<IComponent>();
    public description: string;

    constructor(
        public readonly parent:IComponent,
        public readonly name:string
        ) {

    }

    get children(): IterableIterator<IComponent> {
        let self = <any>this;
        function *_children(): IterableIterator<IComponent> {
            for (let v of self){
                if (v instanceof ComponentBase) {
                    yield v;
                }
            }
        }
        return _children();
    }

    destructor: () => void;

    find(p:any): IComponent {
        throw "Not implemented";
    }

    protected addChild(child: IComponent): void {
        (<any>this)[child.name] = child;
    }

}
