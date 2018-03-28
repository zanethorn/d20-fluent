/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:33:16-04:00
 * @Project: d20-fluent
 * @Filename: IPropertyChangedEventArgs.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:33:58-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IEventArgs } from './IEventArgs'

export interface IPropertyChangedEventArgs
    extends IEventArgs
{
    readonly newValue: any;
    readonly oldValue: any;
    readonly name: string;
}
