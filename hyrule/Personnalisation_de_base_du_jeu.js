"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var any_1 = require("./any");
var readline = require('readline-sync');
function persoBaseJeu() {
    console.log('Bienvenue dans votre univers que souhaitez-vous');
    var option2 = ['Nouvelle partie', 'Quitter la partie'];
    var answer2 = readline.keyInSelect(option2);
    if (answer2 === 0) {
        var option3 = ['Normal', 'Difficile', 'Insensé'];
        var answer3 = readline.keyInSelect(option3, 'Choissisez votre niveau de difficulté?');
        var nbreCombat = ['10', '20 combats', '50 combats', '100combats'];
        var answerComb = readline.keyInSelect(nbreCombat, 'Choisissez le nombre de combats');
        var combat = 0;
        if (answerComb === 0) {
            combat = 10;
        }
        if (answerComb === 1) {
            combat = 20;
        }
        if (answerComb === 2) {
            combat = 50;
        }
        if (answerComb === 3) {
            combat = 100;
        }
        if (answer3 === 1) {
            (0, any_1.default)(combat);
        }
        if (answer3 === 0) {
            (0, any_1.default)(combat);
        }
        if (answer3 === 1) {
            (0, any_1.default)(combat);
        }
        if (answer3 === 2) {
            (0, any_1.default)(combat);
        }
    }
    if (answer2 === 1) {
        console.log('Aurevoir');
    }
}
exports.default = persoBaseJeu;
