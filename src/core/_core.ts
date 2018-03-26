/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:26:42-04:00
 * @Project: d20-fluent
 * @Filename: _core.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T14:01:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Constructor } from './mixins';

export interface IHasValue
{
    value: number;
}

export interface IHasType<T>
{
    readonly type: T;
}

export interface IHasName
{
    name: string;
}

export function HasValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        value: number = 0;
    };
}

export function HasProtectedValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        protected _value: number = 0;
        get value(): number {
            return this._value;
        }
        set value(v:number):void {
            throw new Error("value is readonly");
        }
    };
}

export function HasReadonlyValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        constructor(private readonly _value:number, ...args: any[]) {
            super(...args);
        }

        get value(): number {
            return this._value;
        }
        set value(v:number):void {
            throw new Error("value is readonly");
        }
    };
}

export function HasName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasValue {
        name: string = '';
    };
}

export function HasProtectedName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasValue {
        protected _name: string = '';
        get name(): string {
            return this._name;
        }
        set name(v:string):void {
            throw new Error("name is readonly");
        }
    };
}

export function HasReadonlyName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasValue {
        constructor(private readonly _name:string, ...args: any[]) {
            super(...args);
        }

        get name(): string {
            return this._name;
        }
        set name(v:string):void {
            throw new Error("name is readonly");
        }
    };
}

export function HasReadonlyType<TBase extends Constructor, TType>(Base: TBase): Constructor<IHasType<TType>> & TBase {
    return class extends Base implements IHasType<TType> {
        constructor(public readonly type:TType, ...args: any[]) {
            super(...args);
        }
    };
}
