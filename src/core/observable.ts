/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T14:01:50-04:00
 * @Project: d20-fluent
 * @Filename: observable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T14:50:26-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Constructor } from './mixins';
import { EventArgs, Event, IEventArgs } from './events';

export interface IPropertyChangedEventArgs
    extends IEventArgs
{
    readonly newValue: any;
    readonly oldValue: any;
    readonly name: string;
}

export interface IObservable
{
    propertyChanged: IEvent<IPropertyChangedEventArgs>;
}

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

type setter = (v: any) => void;

export function observe(target: any, key: string) {

    let innerKey = '_'+key;
    var getter = function() {
        return this[innerKey];
    }

    var setter = function(newVal) {
        let oldVal = this[innerKey];
        if (newVal !== oldVal){
            this[innerKey] = newVal;
            this.onPropertyChanged(key, newVal, oldVal);
        }
    }

    if (delete target[key]) {
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }

    // console.log("observe() called...");
    // return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //     console.log("observe invoked on %s by %s",target, propertyKey);
    //     console.log(descriptor);
    //     // let setter: setter = descriptor.set;
    //     // if (setter !== undefined) {
    //     //     //setter = (v: any) => { target[propertyKey] = v; };
    //     //     setter()
    //     // }
    //     //
    //     // target.onPropertyChanged.call(target, propertyKey, v, oldValue);
    //     //
    //     // let observedSetter: setter = (v: any) => {
    //     //     console.log("target: %s", target);
    //     //     console.log("this: %s", this);
    //     //     let oldValue = target[propertyKey];
    //     //     console.log("oldValue: %s", oldValue);
    //     //     if (v !== oldValue){
    //     //         setter.call(target, v);
    //     //         target.onPropertyChanged.call(target, propertyKey, v, oldValue);
    //     //     }
    //     // };
    //     //
    //     // descriptor.set = observedSetter;
    // }
}
