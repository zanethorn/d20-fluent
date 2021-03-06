/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T19:48:50-04:00
 * @Project: d20-fluent
 * @Filename: tmp.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T14:15:30-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 import { ModifierType } from './modifiers';

 declare module './interfaces' {
     export enum ModifierType {
         foo
     }

     export interface IRollModifiers {
         readonly foo:number;
     }
 }

let enumSize = Object.keys(ModifierType).length / 2;
ModifierType[ModifierType["foo"] = enumSize] = "foo";

export { ModifierType };
