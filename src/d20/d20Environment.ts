/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:40:13-04:00
 * @Project: d20-fluent
 * @Filename: d20Environment.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T18:35:36-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework, DefaultFramework } from './framework';
import {
    IRulebook,
    RulebookBinder,
    IRule,
    RuleBinder,
    ComponentFactory
} from './framework/components';

export class d20Environment {

    private static _instance: d20Environment;

    framework: Id20Framework;

    private constructor() {
        this.framework = new DefaultFramework();
    }

    get rule(): RuleBinder {
        return this.framework.rule;
    }

    get rulebook(): RulebookBinder {
        return this.framework.rulebook;
    }


    include(path:string): Promise<any>{
        return this.framework.include(path)
    }

    initialize(): void {
        console.log('Environment is initializing.')
        this.framework.initialize();
    }

    dispose(): void {

    }

    public static get instance(): d20Environment {
        if (!this._instance){
            this._instance = new this();
        }
        return this._instance;
    }
}
