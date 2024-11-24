"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recup_perso_1 = require("./recup_perso");
function genererHero() {
    var min = 1;
    var max = 5;
    var id = Math.floor(Math.random() * (max - min) + min);
    var perso = (0, recup_perso_1.recherchePerso)(recup_perso_1.jsonObject, id);
    var Personnage = /** @class */ (function () {
        function Personnage(id, name, hp, str, def, rarity, classe, xp, niveau) {
            this.id = perso.id;
            this.name = perso.name;
            this.hp = perso.hp;
            this.str = perso.str;
            this.def = perso.def;
            this.rarity = perso.rarity;
            this.classe = perso.class;
            this.xp = perso.xp;
            this.niveau = perso.niveau;
        }
        return Personnage;
    }());
    return new Personnage(perso.id, perso.name, perso.hp, perso.str, perso.def, perso.rarity, perso.class, perso.xp, perso.niveau);
}
exports.default = genererHero;
