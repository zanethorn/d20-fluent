/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:59:46-04:00
 * @Project: d20-fluent
 * @Filename: app.module.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T11:12:42-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
