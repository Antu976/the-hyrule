"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recup_perso_1 = require("./recup_perso");
function genererEnemi() {
    var min = 1;
    var max = 12;
    var id = Math.floor(Math.random() * (max - min) + min);
    var enemy = (0, recup_perso_1.rechercheEnemy)(recup_perso_1.jsonEnemies, id);
    var Enemy = /** @class */ (function () {
        function Enemy(id, name, hp, str, def, rarity, xp, niveau) {
            this.id = enemy.id;
            this.name = enemy.name;
            this.hp = enemy.hp;
            this.str = enemy.str;
            this.def = enemy.def;
            this.rarity = enemy.rarity;
            this.xp = enemy.xp;
            this.niveau = enemy.niveau;
        }
        return Enemy;
    }());
    return new Enemy(enemy.id, enemy.name, enemy.hp, enemy.str, enemy.def, enemy.rarity, enemy.xp, enemy.niveau);
}
exports.default = genererEnemi;
