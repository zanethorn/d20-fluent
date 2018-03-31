/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T13:14:16-04:00
 * @Project: d20-fluent
 * @Filename: Speed.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T20:13:16-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */


import { Score } from "../Score";
import { ICanMove } from "./ICanMove";
import { IScore } from "../IScore";
import { Constructor } from "../../../Constructor";
import { IHasScores } from "../IHasScores";
import { Direction } from "./Direction";

class Speed
    extends Score
{
    constructor(public readonly parent: ICanMove)
    {
        super("speed", parent)
    }
}

export type SpeedFactory = (parent: ICanMove) => IScore;

export var DefaultSpeedFactory: SpeedFactory = (parent: ICanMove)  => {
    return new Speed(parent);
}

export function CanMoveMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<ICanMove> {
    return class extends Base implements ICanMove
    {
        readonly speed: IScore = DefaultSpeedFactory(<ICanMove><any>this);

        move(d: Direction): void {
            throw new Error("Method not implemented.");
        }
    };
}
