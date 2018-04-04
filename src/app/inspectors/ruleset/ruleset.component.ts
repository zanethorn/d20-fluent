/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T11:54:51-04:00
 * @Project: d20-fluent
 * @Filename: ruleset.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T20:20:43-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Component, OnInit } from '@angular/core';
import { IRulebook, IRule } from '../../../d20/framework/components'
import d20 from '../../../d20'

@Component({
  selector: 'inspect-ruleset',
  templateUrl: './ruleset.component.html',
  styleUrls: []
})
export class RulesetComponent implements OnInit {

    rulebooks: IRulebook[] = [];

    constructor() { }

    ngOnInit() {
        //this.rulebooks = d20.framework.rulebooks;
    }

}
