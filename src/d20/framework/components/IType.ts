/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T10:58:22-04:00
 * @Project: d20-fluent
 * @Filename: IType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T12:40:00-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from './IComponent'

export interface IProperty
    extends IComponent
{
    readonly isReadOnly: boolean;
    readonly isInherited: boolean;
    readonly type: IType;
}

export interface IType
    extends IComponent
{
    readonly properties: IProperty[];
    
}
