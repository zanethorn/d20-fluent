/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:59:48-04:00
 * @Project: d20-fluent
 * @Filename: IModifer.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:10:29-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasValue } from '../../IHasValue'
import { IHasReadonlyValue } from '../../IHasReadonlyValue'
import { IHasType } from '../../IHasType'
import { ModifierType } from './ModifierType'

declare module './IScore' {
    export interface IScore
    {

    }
}

import  { IScore } from './IScore';
import { StackedModifier } from './StackedModifier';

export interface IModifier
    extends IHasReadonlyValue, IHasType<ModifierType>
{
    appliesTo(score:IScore): boolean;
}
