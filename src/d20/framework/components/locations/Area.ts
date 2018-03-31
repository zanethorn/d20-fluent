/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:37:52-04:00
 * @Project: d20-fluent
 * @Filename: Area.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:57:28-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IArea } from './IArea';
import { IDoor } from './IDoor';
import { IThing } from '../IThing';
import { IModifier, IMaterial } from '../mechanics';
import { ArrayList, ICollection, IEnumerable } from '../../collections';


export class Area
    implements IArea
{
    private _children: ArrayList<IArea> = new ArrayList<IArea>();
    private _modifiers: ArrayList<IModifier> = new ArrayList<IModifier>();
    private _contents: ArrayList<IThing> = new ArrayList<IThing>();
    private _walls: IMaterial;
    private _floor: IMaterial;

    constructor(
        readonly id: string,
        readonly parent: IArea
    ){}

    get children(): IterableIterator<IArea> {
        return this._children[Symbol.iterator]();
    }

    get modifiers(): IterableIterator<IModifier> {
        function *_modifiers() {
            for (let m of this._modifiers){
                yield m;
            }
            if (this.parent){
                for (let m of this.parent.modifiers){
                    yield m;
                }
            }
        }
        return _modifiers();
    }

    get contents(): IterableIterator<IThing> {
        return this._contents[Symbol.iterator]();
    }

    description: string;

    get walls(): IMaterial {
        if (this._walls) {
            return this._walls;
        }
        return this.parent.walls;
    }
    set walls(value: IMaterial) {
        this._walls = value;
    }
    get floor(): IMaterial {
        if (this._floor) {
            return this._floor;
        }
        this.parent.floor;
    }
    set floor(value: IMaterial) {
        this._floor = value;
    }
    get isOutside(): boolean {
        return this.parent.isOutside;
    }

    north: IArea | IDoor;
    northeast: IArea | IDoor;
    east: IArea | IDoor;
    southeast: IArea | IDoor;
    south: IArea | IDoor;
    southwest: IArea | IDoor;
    west: IArea | IDoor;
    northwest: IArea | IDoor;
    up: IArea | IDoor;
    down: IArea | IDoor;
    inside: IArea | IDoor;
    outside: IArea | IDoor;

    addModifier(modifier: IModifier): boolean {
        return this._modifiers.add(modifier);
    }
    removeModifier(modifier: IModifier): boolean {
        return this._modifiers.remove(modifier);
    }
    addChild(area: IArea): boolean {
        return this._children.add(area);
    }
    removeChild(area: IArea): boolean {
        return this._children.remove(area);
    }
    addThing(thing: IThing): boolean {
        return this._contents.add(thing);
    }
    removeThing(thing: IThing): boolean {
        return this._contents.remove(thing);
    }
}
