/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:35:42-04:00
 * @Project: d20-fluent
 * @Filename: PropertyChangedEventArgs.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:36:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IPropertyChangedEventArgs } from './IPropertyChangedEventArgs'
import { EventArgs } from './EventArgs'


class PropertyChangedEventArgs
    extends EventArgs
{
    constructor(
        readonly name: string,
        readonly newValue: any,
        readonly oldValue: any,
        sender: object,
    ) {
        super(sender);
    }
}
