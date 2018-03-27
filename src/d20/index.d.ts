/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T14:49:49-04:00
 * @Project: d20-fluent
 * @Filename: d20.d.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T14:52:12-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IComponent
{
    id: string;
    readonly initializer: () => void;
}

export type ComponentFactory<T extends IComponent> = (id: string, callback: () => void) => T;

export interface IAdventure
    extends IComponent
{

}

export interface IDungeon
    extends IComponent
{

}

export const adventure: ComponentFactory<IAdventure>;
export const dungeon: ComponentFactory<IDungeon>;
