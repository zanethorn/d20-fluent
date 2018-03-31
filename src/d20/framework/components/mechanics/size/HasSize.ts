/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:54:57-04:00
 * @Project: d20-fluent
 * @Filename: Size.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:54:59-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ISize } from "./ISize";
import { IModifier } from "../IModifier";
import { ModifierType } from "../ModifierType";
import { IScore } from "../IScore";
import { IHasModifiers } from "../IHasModifiers";
import { Constructor } from "../../../Constructor";
import { IHasSize } from "./IHasSize";
import { IHasScores } from "../IHasScores";

class SizeModifier
    implements IModifier
{

    get value(): number{
        return this._size.value;
    }

    get type(): ModifierType {
        return ModifierType.size;
    }

    constructor(private readonly _size: Size) {}

    appliesTo(score: IScore): boolean {
        throw new Error("Method not implemented.");
    }
}

export class Size
    implements ISize
{
    private static readonly _types: Size[] = [];

    readonly sizeModifier: IModifier = new SizeModifier(this);
    description: string;

    constructor(
        public readonly id: string,
        public readonly value: number
    ) {
        Size._types.push(this);
    }

    static readonly colossal:ISize	= new Size("colossal", -8);
    static readonly gargantuan:ISize = new Size("gargantuan",-4);
    static readonly huge:ISize	= new Size("huge",	-2);
    static readonly large:ISize	= new Size("large",	-1);
    static readonly medium:ISize = new Size("medium",0);
    static readonly small:ISize	= new Size("small",	1);
    static readonly tiny:ISize	= new Size("tiny",2);
    static readonly diminutive:ISize = new Size("diminutive",4);
    static readonly fine:ISize	= new Size("fine",8);
}

export function HasSizeMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasSize> {
    return class extends Base implements IHasSize
    {
        private _size: ISize = Size.medium;

        get size(): ISize {
            return this._size;
        }

        set size(value:ISize) {
            (<IHasModifiers><any>this).removeModifier(this._size.sizeModifier);
            this._size = value;
            (<IHasModifiers><any>this).addModifier(this._size.sizeModifier);
        }

        weight: number;
    };
}
