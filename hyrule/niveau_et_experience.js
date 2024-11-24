"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function monteNiveau(personnage) {
    personnage.niveau += 1;
    personnage.xp = 0;
    console.log("".concat(personnage.name, " monte d'un niveau sup\u00E9rieur le niveau ").concat(personnage.niveau));
    personnage.hp += Math.floor(Math.random() * (50 - 20) + 20);
    personnage.str += Math.floor(Math.random() * (60 - 30) + 30);
}
function gagneXP(personnage) {
    var min = 15;
    var max = 50;
    var xp = Math.floor(Math.random() * (max - min) + min);
    personnage.xp += xp;
    console.log("".concat(personnage.name, " gagane ").concat(xp, " points d'exp\u00E9rience"));
    if (personnage.xp >= 100) {
        monteNiveau(personnage);
    }
}
exports.default = gagneXP;
