/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T17:00:46-04:00
 * @Project: d20-fluent
 * @Filename: mixins.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T13:49:38-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

//export type Constructor<T = {}> = new (...args: any[]) => T;

export type Constructor<T = {}> = new (...args: any[]) => T;

export interface IFluentEmitter<TBase extends Constructor>
{

}

export interface IFluentType<TBase extends Constructor>
{
    readonly with: IFluentEmitter<TBase>;
}

export type FluentType<TBase extends Constructor> = TBase & IFluentType<TBase>

// export class DefaultBase {
//
// }
//
// export const DefaultConstructor:Constructor= <Constructor><any>Object;

export function Type<TBase extends Constructor>(base: TBase): FluentType<TBase> {
    return (<any>base) as FluentType<TBase>;
}

// export function apply(derivedCtor: any, ...baseCtors: any[]) {
//      baseCtors.forEach(baseCtor => {
//          Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//               if (name !== 'constructor') {
//                  derivedCtor.prototype[name] = baseCtor.prototype[name];
//              }
//          });
//      });
//  }
