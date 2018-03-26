/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:26:42-04:00
 * @Project: d20-fluent
 * @Filename: _core.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T13:47:28-04:00
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

function withValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        value: number = 0;
    };
}

function withProtectedValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        protected _value: number = 0;
        get value(): number {
            return this._value;
        }
        set value(v:number) {
            throw new Error("value is readonly");
        }
    };
}

export function withReadonlyValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        private readonly _value:number;

        constructor(...args: any[]) {
            super(...args.slice(1));
            this._value = <number>args[0];
        }

        get value(): number {
            return this._value;
        }
        set value(v:number) {
            throw new Error("value is readonly");
        }
    };
}

export function withName<TBase extends Constructor>(Base: TBase) : Constructor<IHasName> & TBase{
    return class extends Base implements IHasName {
        name: string = '';
    };
}

export function withProtectedName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase{
    return class extends Base implements IHasName {
        protected _name: string = '';
        get name(): string {
            return this._name;
        }
        set name(v:string) {
            throw new Error("name is readonly");
        }
    };
}

export function withReadonlyName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasName {
        private readonly _name:string

        constructor(...args: any[]) {
            super(...args.slice(1));
            this._name = <string>args[0];
        }

        get name(): string {
            return this._name;
        }
        set name(v:string) {
            throw new Error("name is readonly");
        }
    };
}

export function withReadonlyType<TBase extends Constructor, TType>(Base: TBase): Constructor<IHasType<TType>> & TBase {
    return class extends Base implements IHasType<TType> {

        public readonly type:TType

        constructor(...args: any[]) {
            super(...args.slice(1));
            this.type = <TType>args[0];
        }
    };
}



declare module './mixins' {
    export interface IFluentType<TBase extends Constructor>{

        withValue(): IFluentType<TBase> | Constructor<IHasValue>;
        withName(): IFluentType<TBase> | Constructor<IHasName>
        withType<TType>(): IFluentType<TBase> | Constructor<IHasType<TType>>
    }
}

/* Fluent Methods fof type creation */
(<any>Object.prototype).withValue = function(){
    return withValue(this);
};
(<any>Object.prototype).withProtectedValue = function() {
    return withProtectedValue(this);
};
(<any>Object.prototype).withReadonlyValue = function() {
    return withReadonlyValue(this);
};
(<any>Object.prototype).withName = function() {
    return withName(this);
};
(<any>Object.prototype).withProtectedName = function() {
    return withProtectedName(this);
};
(<any>Object.prototype).withReadonlyName = function() {
    return withReadonlyName(this);
};
(<any>Object.prototype).withReadonlyType = function<TType>() {
    return withReadonlyType<typeof this, TType>(this);
};
