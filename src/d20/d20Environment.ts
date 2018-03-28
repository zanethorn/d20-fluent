/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:40:13-04:00
 * @Project: d20-fluent
 * @Filename: d20Environment.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T08:47:44-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework, DefaultFramework } from './framework';
import { IRuleset, ComponentFactory } from './framework/components';

export class d20Environment {

    private static _instance: d20Environment;

    framework: Id20Framework;

    private constructor() {
        this.framework = new DefaultFramework();
        this.framework.initializer();
    }

    get ruleset(): ComponentFactory<IRuleset> {
        return this.framework.ruleset;
    }

    public static get instance(): d20Environment {
        if (!this._instance){
            this._instance = new this();
        }
        return this._instance;
    }
}
