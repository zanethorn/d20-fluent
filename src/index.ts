/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T12:56:47-04:00
 * @Project: d20-fluent
 * @Filename: index.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T14:00:49-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { app } from 'electron'
import { d20 } from './main'

app.on('ready', () => { d20.run(); });
