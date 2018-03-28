/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T11:44:35-04:00
 * @Project: d20-fluent
 * @Filename: intro.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:31:39-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './app/assets/html/intro.component.html',
  styleUrls: []
})
export class IntroComponent implements OnInit {

    title = 'd20 Engine';
    constructor() { }

    ngOnInit() {
    }

}
