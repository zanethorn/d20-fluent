/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:12:03-04:00
 * @Project: d20-fluent
 * @Filename: IHasAlignment.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:12:37-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Alignment } from "./Alignment";

export interface IHasAlignment
{
    alignment: Alignment;
}
