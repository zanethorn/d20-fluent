/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:26:43-04:00
 * @Project: d20-fluent
 * @Filename: IClonable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:27:04-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IClonable
{
    clone(): IClonable
}
