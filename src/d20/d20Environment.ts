/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:40:13-04:00
 * @Project: d20-fluent
 * @Filename: d20Environment.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T20:00:26-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework, DefaultFramework } from './framework';
import {
    IRulebook,
    IRule,
} from './framework/components';
import { RuleBinder } from './framework/components/Rule';
import { RulebookBinder } from './framework/components/Rulebook';
import { ICreature } from './framework/components/creatures';

export class d20Environment {

    private static _instance: d20Environment;

    framework: Id20Framework;

    private constructor() {
    }

    get rule(): RuleBinder {
        return this.framework.rule;
    }

    get rulebook(): RulebookBinder {
        return this.framework.rulebook;
    }


    get include(): (path:string) => Promise<any> {
        return this.framework.include;
    }

    get creature(): (type:string, map?: any) => ICreature {
        return this.framework.creature;
    }

    initialize(): void {
        console.log('Environment is initializing.')
        this.framework.initialize();
    }

    dispose(): void {

    }

    public static get instance(): d20Environment {
        if (!this._instance){
            console.log("Creating D20 runtime environment");
            this._instance = new this();
        }
        if (!this._instance.framework) {
            this._instance.framework = new DefaultFramework();
        }
        return this._instance;
    }
}
