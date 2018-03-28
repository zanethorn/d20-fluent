/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T08:59:46-04:00
 * @Project: d20-fluent
 * @Filename: app.module.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:37:34-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit  } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { IntroComponent } from './intro.component';
import { AppRoutingModule } from './app-routing.module';

import { RulesetComponent } from './inspectors';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        IntroComponent,
        RulesetComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{

    constructor() { }


}
