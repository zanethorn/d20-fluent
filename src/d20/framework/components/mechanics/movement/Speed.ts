/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T13:14:16-04:00
 * @Project: d20-fluent
 * @Filename: Speed.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:29:41-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */


import { Score } from "../Score";
import { ICanMove } from "./ICanMove";
import { IScore } from "../IScore";
import { Constructor } from "../../../Constructor";

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

export function CanMoveMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        readonly speed: IScore = DefaultSpeedFactory(<ICanMove><any>this);
    };
}
