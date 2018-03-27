/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:06:18-04:00
 * @Project: d20-fluent
 * @Filename: IComponent.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:06:18-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 export interface IComponent
 {
     id: string;
     readonly initializer: () => void;
 }
