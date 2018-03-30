/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T18:54:16-04:00
 * @Project: d20-fluent
 * @Filename: IArea.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:09:09-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IComponent } from '../IComponent';
import { IMaterial, IHasModifiers, IModifier } from '../mechanics'
import { IThing } from '../IThing'
import { ICollection } from '../../collections';
import { IContainsThings } from '../IContainsThings'

declare module './IDoor'
{
    export interface IDoor
        extends IThing
    {

    }
}

import { IDoor } from './IDoor';

export interface IArea
    extends IHasModifiers, IContainsThings
{
    readonly parent: IArea;
    readonly children: IterableIterator<IArea>;
    readonly isOutside: boolean;

    walls: IMaterial;
    floor: IMaterial;

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

    addChild(modifier: IArea): void;
    removeChild(modifier: IArea): void;
}
