/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T17:47:55-04:00
 * @Project: d20-fluent
 * @Filename: index.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T18:44:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import '../../.';

export const Module =
module("A Sample Dungeon", () => {
    dungeon("Monastery Cellars and Secret Crypts", () => {

        room("Entry Chamber", () => {

            group("Spiders", () => {
                this.isHidden({ dc: 22 });
            });

            thing("Moldy Sacks", () => {

            });

            door(() => {
                this.to('Water Room');
                this.isClosed({ dc: 16 });
            });



        });

        room("Water Room", () => {

        });

        room("Empty Ceremonial Chamber", () =>{

        });
    });

});