"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recup_perso_1 = require("./recup_perso");
function genererBoss() {
    var min = 1;
    var max = 7;
    var id = Math.floor(Math.random() * (max - min) + min);
    var boss = (0, recup_perso_1.rechercheBoss)(recup_perso_1.jsonBoss, id);
    var Boss = /** @class */ (function () {
        function Boss(id, name, hp, str, def, rarity, xp, niveau) {
            this.id = boss.id;
            this.name = boss.name;
            this.hp = boss.hp;
            this.str = boss.str;
            this.def = boss.def;
            this.rarity = boss.rarity;
            this.xp = boss.xp;
            this.niveau = boss.niveau;
        }
        return Boss;
    }());
    return new Boss(boss.id, boss.name, boss.hp, boss.str, boss.def, boss.rarity, boss.xp, boss.niveau);
}
exports.default = genererBoss;
