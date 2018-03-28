/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:06:18-04:00
 * @Project: d20-fluent
 * @Filename: IComponent.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T14:39:57-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IHasName } from "../IHasName"
import { IEnumerable } from "../collections"

export interface IComponent
{
    readonly name: string;
    readonly parent: IComponent;
    readonly children: IterableIterator<IComponent>;

    description: string;

    destructor: () => void;

    find(p:any): IComponent;
}
