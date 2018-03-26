/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T10:34:38-04:00
 * @Project: d20-fluent
 * @Filename: observable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T11:52:41-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from './mixins';
import { IEventArgs, EventArgs, IEvent, Event } from './events';

export interface IPropertyChangedEventArgs
    extends IEventArgs
{
    readonly originalValue: any;
    readonly newValue: any;
    readonly name: string;
}

export interface IObservable
{
    readonly propertyChanged: IEvent<IPropertyChangedEventArgs>;
}

class PropertyChangedEventArgs
    extends EventArgs
{
    constructor(
        readonly name: string,
        readonly originalValue: any,
        readonly newValue: any,
        sender: object,
    ) {
        super(sender);
    }
}

export function IsObservable<TBase extends Constructor>(Base: TBase): Constructor<IObservable & TBase> {
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

interface setter {
    (v: any): void;
}

export function observe() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let setter: setter = descriptor.set;
        if (setter === undefined) {
            setter = (v: any) => { target[propertyKey] = v; };
        }

        let observedSetter: setter = (v: any) => {
            let oldValue = target[propertyKey];
            if (v !== oldValue){
                setter(v);
                this.onPropertyChanged(propertyKey, v, oldValue);
            }
        };
    }
}
