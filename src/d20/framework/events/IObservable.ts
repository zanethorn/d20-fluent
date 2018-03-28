/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:34:21-04:00
 * @Project: d20-fluent
 * @Filename: IObservable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:35:01-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IPropertyChangedEventArgs } from './IPropertyChangedEventArgs'
import { IEvent } from './IEvent'

export interface IObservable
{
    propertyChanged: IEvent<IPropertyChangedEventArgs>;
}
