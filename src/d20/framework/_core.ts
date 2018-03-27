/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:26:42-04:00
 * @Project: d20-fluent
 * @Filename: _core.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T13:42:40-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { Constructor } from './mixins';







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
        set value(v:number) {
            throw new Error("value is readonly");
        }
    };
}

export function HasReadonlyValue<TBase extends Constructor>(Base: TBase): Constructor<IHasValue> & TBase {
    return class extends Base implements IHasValue {
        private readonly _value: number;

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

export function HasName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasName {
        name: string = '';
    };
}

export function HasProtectedName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
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

export function HasReadonlyName<TBase extends Constructor>(Base: TBase): Constructor<IHasName> & TBase {
    return class extends Base implements IHasName {
        private readonly _name:string;

        constructor( ...args: any[]) {
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

export function HasReadonlyType<TBase extends Constructor, TType>(Base: TBase, Type: TType): Constructor<IHasType<TType>> & TBase {
    return class extends Base implements IHasType<TType> {
        public readonly type:TType

        constructor(...args: any[]) {
            super(...args.slice(1));
            this.type = args[0];
        }
    };
}
