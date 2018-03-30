/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:59:02-04:00
 * @Project: d20-fluent
 * @Filename: IHasModifiers.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T21:59:25-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from '../IComponent'
import { IEnumerable } from '../../collections'
import { IModifier } from './IModifier'


export interface IHasModifiers
    extends IComponent
{
    readonly modifiers: IterableIterator<IModifier>;
    addModifier(modifier: IModifier): boolean;
    removeModifiers(modifier: IModifier): boolean;
}
