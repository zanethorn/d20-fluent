/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:38:02-04:00
 * @Project: d20-fluent
 * @Filename: ObservableMixin.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:39:51-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IObservable } from './IObservable';
import { Constructor } from '../Constructor';
import { EventArgs } from './EventArgs';
import { Event } from './Event';
import { IEventArgs } from './IEventARgs';


export function ObservableMixin<TBase extends Constructor>(Base: TBase): Constructor<IObservable> & TBase {
    return class extends Base implements IObservable {
        private readonly _propertyChanged: Event<IPropertyChangedEventArgs> = new Event<IPropertyChangedEventArgs>();

        get propertyChanged(): IEvent<IPropertyChangedEventArgs> {
            return this._propertyChanged;
        }

        protected onPropertyChanged(name: string, newValue: any, originalValue: any): void {
            let arg = new PropertyChangedEventArgs(name, newValue, originalValue, this);
            this._propertyChanged.invoke(arg);
        }
    };
}
