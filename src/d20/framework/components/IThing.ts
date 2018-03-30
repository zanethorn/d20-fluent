/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:55:33-04:00
 * @Project: d20-fluent
 * @Filename: IThing.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:48:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from './IComponent'

declare module './IArea'
{
    export interface IArea
        extends IComponent
    {

    }
}

import { IArea } from './IArea'

export interface IThing
    extends IComponent
{
    area: IArea;
}
