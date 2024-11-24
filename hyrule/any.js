"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perso_1 = require("./perso");
var enemy_1 = require("./enemy");
var bosse_1 = require("./bosse");
var niveau_et_experience_1 = require("./niveau_et_experience");
var readline = require('readline-sync');
function attaquer(attaqueur, defenseur) {
    var options = ['Dégats de base', 'Coup critique'];
    var answer = readline.keyInSelect(options);
    if (answer === 0) {
        console.log("".concat(attaqueur.name, " attaque ").concat(defenseur.name, " et inflige ").concat(attaqueur.str, " points"));
        defenseur.hp -= attaqueur.str * (defenseur.def / 100);
        console.log("".concat(defenseur.name, " poss\u00E8de ").concat(defenseur.hp, " HP"));
    }
    if (answer === 1) {
        attaqueur.str *= 2;
        console.log("".concat(attaqueur.name, " attaque ").concat(defenseur.name, " et inflige ").concat(attaqueur.str, " points"));
        defenseur.hp -= attaqueur.str * (defenseur.def / 100);
        console.log("".concat(defenseur.name, " poss\u00E8de ").concat(defenseur.hp, " HP"));
    }
}
function soigner(heros) {
    heros.hp /= 2;
    console.log("".concat(heros.name, " recoit des soins de ").concat(heros.hp));
}
function combat(perso, enemy) {
    console.log("combat entre ".concat(perso.name, " et ").concat(enemy.name, " !"));
    console.log("".concat(perso.name, "- HP:").concat(perso.hp, " et STR:").concat(perso.str, " "));
    console.log("".concat(enemy.name, "- HP:").concat(enemy.hp, " et STR:").concat(enemy.str));
    var round = 1;
    while (perso.hp > 0 && enemy.hp > 0) {
        console.log("-------Round ".concat(round, "-------"));
        var options = ['attaquer', 'Se soigner'];
        var answer = readline.keyInSelect(options);
        if (answer === 0) {
            attaquer(perso, enemy);
            if (enemy.hp <= 0) {
                console.log("".concat(perso.name, " \u00E0 gagn\u00E9 le combat"));
                return true;
            }
            attaquer(enemy, perso);
            if (perso.hp <= 0) {
                console.log("".concat(perso.name, " \u00E0 perdu le combat"));
                return false;
            }
        }
        else if (answer === 1) {
            soigner(perso);
        }
        round += 1;
    }
    return false;
}
function level(nbreCombat) {
    var niv = 1;
    var pieces = 0;
    while (niv < nbreCombat) {
        console.log("################LEVEL".concat(niv, "##############"));
        var hero = (0, perso_1.default)();
        var mechant = (0, enemy_1.default)();
        var superMechant = (0, bosse_1.default)();
        var answer = readline.question('Voulez-vous continuer\n');
        if (answer.toUpperCase() === 'O') {
            var victoire = combat(hero, mechant);
            if (victoire) {
                pieces += 1;
                console.log("vous avez gagn\u00E9 une pi\u00E8ce ".concat(pieces));
            }
            if (niv === nbreCombat) {
                combat(hero, superMechant);
                if (victoire) {
                    (0, niveau_et_experience_1.default)(hero);
                    pieces += 1;
                    console.log("vous avez gagn\u00E9 une pi\u00E8ce ".concat(pieces));
                }
            }
        }
        if (answer.toUpperCase() === 'N') {
            console.log('A la prochaine');
            break;
        }
        niv += 1;
    }
}
exports.default = level;
