/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T11:54:51-04:00
 * @Project: d20-fluent
 * @Filename: ruleset.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T14:43:08-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Component, OnInit } from '@angular/core';
import { IRuleset } from '../../d20/framework/components'
import d20 from '../../d20'

@Component({
  selector: 'inspect-ruleset',
  templateUrl: './app/assets/html/inspectors/ruleset.component.html',
  styleUrls: []
})
export class RulesetComponent implements OnInit {

    rulesets = <any>[
        // { name:'harpo' },
        // { name:'chico' },
        // { name:'zippo' }
    ];

    constructor() { }

    ngOnInit() {
        console.log("trying to load rulesets");
        for (let c of d20.framework.children) {
            console.log(c);
            this.rulesets.push(c);
        }


    }

}
