/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T11:41:58-04:00
 * @Project: d20-fluent
 * @Filename: app-routing.module.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T12:16:01-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent }   from './intro.component';

import { RulesetComponent } from './inspectors';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'bin/app', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IntroComponent },
    { path: 'inspectors/rulesets', component: RulesetComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
