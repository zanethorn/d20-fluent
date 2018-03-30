/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:42:28-04:00
 * @Project: d20-fluent
 * @Filename: ICharacter.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T00:38:41-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICreature } from "../creatures";
import { ICharacterClass } from "./ICharacterClass";
import { IClassLevel } from "./IClassLevel";
import { IHasExperience } from "../mechanics/experience";

export interface ICharacter
    extends ICreature, IHasExperience
{
    readonly currentClass: ICharacterClass;
    readonly characterClasses: IterableIterator<IClassLevel>;
    readonly characterLevel: number;
}

function makeCharacter(target:ICreature): ICharacter {
    Object.defineProperty(target, '_currentClass', { configurable: true, enumerable: false, writable: true});
    Object.defineProperty(target, 'currentClass', { configurable: true, enumerable: true, get: function() { return this._currentClass; }});
    Object.defineProperty(target, '_characterClasses', { configurable: true, enumerable: false, writable: false, value: []});
    Object.defineProperty(target, 'characterClasses', { configurable:true, enumerable:true, get: function() { return this._characterClasses; }});
    Object.defineProperty(target, 'characterLevel', { configurable: true, enumerable: true, get: function() { let t = 0; for (let c of this.characterClasses) { t += c.level;} return t;}});
    return target as ICharacter;
}

function makeClassLevel(cls:ICharacterClass): IClassLevel {
    let cl: any = new (<any>cls)();
    cl.level = 0;
    return cl as IClassLevel;
}

export function addLevel(target:ICreature, characterClass: ICharacterClass): ICharacter{
    let character: ICharacter = undefined;
    if ((<any>target).currentClass === undefined) {
        character = makeCharacter(target);
    }
    else {
        character = target as ICharacter;
    }

    let level: IClassLevel = undefined;
    for (let cls of character.characterClasses){
        if (cls.id === characterClass.id){
            level = cls;
            break;
        }
    }

    if (level === undefined){
        level = makeClassLevel(characterClass);
    }

    level.addLevel();
    (<any>character)._currentClass = characterClass;

    return character;
}
