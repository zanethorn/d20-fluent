/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:22:33-04:00
 * @Project: d20-fluent
 * @Filename: HasEventsMixin.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:28:58-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { EventHandler } from './EventHandler'
import { IHasEvents } from './IHasEvents'
import { Constructor } from '../Constructor';


export function HasEventsMixin<TBase extends Constructor>(Base: TBase): Constructor<IHasEvents> & TBase {
    return class extends Base implements IHasEvents {
        on(evt:string, handler: EventHandler<any>): void {
            (<any>this)[evt].on(handler);
        }
        off(evt:string, handler: EventHandler<any>): void{
            (<any>this)[evt].off(handler);
        }
    };
}
