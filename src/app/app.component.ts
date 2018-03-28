/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:59:46-04:00
 * @Project: d20-fluent
 * @Filename: app.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:40:24-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { Component, OnInit } from '@angular/core';
import d20 from '../d20'

@Component({
  selector: 'app-root',
  templateUrl: './app/assets/html/app.component.html',
  styleUrls: []
})
export class AppComponent
    implements OnInit
{
    ngOnInit() {
        d20.initialize();
    }
}
