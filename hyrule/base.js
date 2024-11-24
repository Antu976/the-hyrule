"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recup_perso_1 = require("./recup_perso");
var Link = {
    id: recup_perso_1.persoLink.id,
    name: recup_perso_1.persoLink.name,
    hp: recup_perso_1.persoLink.hp,
    str: recup_perso_1.persoLink.str,
};
var Boboklin = {
    id: recup_perso_1.ennemiBobo.id,
    name: recup_perso_1.ennemiBobo.name,
    hp: recup_perso_1.ennemiBobo.hp,
    str: recup_perso_1.ennemiBobo.str,
};
var Ganon = {
    id: recup_perso_1.persoGanon.id,
    name: recup_perso_1.persoGanon.name,
    hp: recup_perso_1.persoGanon.hp,
    str: recup_perso_1.persoGanon.str,
};
function attaquer(attaqueur, defenseur) {
    console.log("".concat(attaqueur.name, " attaque ").concat(defenseur.name, " et inflige ").concat(attaqueur.str, " points"));
    defenseur.hp -= attaqueur.str;
    console.log("".concat(defenseur.name, " poss\u00E8de ").concat(defenseur.hp, " HP"));
}
function soigner(hero) {
    hero.hp /= 2;
    console.log("".concat(hero.name, " recoit des soins de ").concat(hero.hp));
}
var readline = require('readline-sync');
function combat(perso, enemy) {
    console.log("combat entre ".concat(Link.name, " et ").concat(Boboklin.name, " !"));
    console.log("".concat(Link.name, "- HP:").concat(Link.hp, " et STR:").concat(Link.str, " "));
    console.log("".concat(Boboklin.name, "- HP:").concat(Boboklin.hp, " et STR:").concat(Boboklin.str, "\n"));
    var round = 1;
    while (perso.hp > 0 && enemy.hp > 0) {
        console.log("-------Round ".concat(round, "-------"));
        var options = ['attaquer', 'Se soigner'];
        var answer = readline.keyInSelect(options);
        if (answer === 0) {
            attaquer(perso, enemy);
            if (enemy.hp <= 0) {
                console.log("".concat(perso.name, " \u00E0 gagn\u00E9 le combat"));
                break;
            }
            attaquer(enemy, perso);
            if (perso.hp <= 0) {
                console.log("".concat(perso.name, " \u00E0 perdu le combat"));
                break;
            }
        }
        else if (answer === 1) {
            soigner(perso);
        }
        round += 1;
    }
}
function level() {
    var niv = 1;
    while (niv <= 10) {
        Boboklin.hp = 25;
        Link.hp = 60;
        console.log("################LEVEL".concat(niv, "##############"));
        var answer = readline.question('Voulez-vous continuer\n');
        if (answer.toUpperCase() === 'O') {
            combat(Link, Boboklin);
            if (niv === 10) {
                combat(Link, Ganon);
            }
        }
        if (answer.toUpperCase() === 'N') {
            console.log('A la prochaine');
            break;
        }
        niv += 1;
    }
}
exports.default = { level: level };
