/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T10:13:32-04:00
 * @Project: d20-fluent
 * @Filename: main.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T16:06:18-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { environment } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
