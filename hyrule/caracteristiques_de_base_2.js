"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var perso_1 = require("./perso");
var fs = require('fs');
var contentclass = fs.readFileSync('../classes.json', 'utf-8');
var jsonClasse = JSON.parse(contentclass);
// console.log(jsonClasse);
function rechercheClass(jsonClasse, id) {
    return (jsonClasse.find(function (Character) { return Character.id === id; }));
    // const cla = jsonClasse.find((Character) => Character.id === id);
    // console.log(cla);
}
var personnage = (0, perso_1.default)();
console.log(personnage);
var readline = require('readline-sync');
function genererClasse() {
    var answer = readline.question('veuillez entrez le numero de classe du personnage dont vous souhaitez voir les options de combat\n');
    var classe = rechercheClass(jsonClasse, answer);
    var Classe = /** @class */ (function () {
        function Classe(id, name, strenghts, weaknesses, attack_type, alignement, rarity) {
            this.id = classe.id;
            this.name = classe.name;
            this.strenghts = classe.strenghts;
            this.weaknesses = classe.weaknesses;
            this.attack_type = classe.attack_type;
            this.alignement = classe.alignement;
            this.rarity = classe.rarity;
        }
        return Classe;
    }());
    var classe1 = new Classe(classe.id, classe.name, classe.strenghts, classe.weaknesses, classe.attack_type, classe.alignement, classe.rarity);
    console.log(classe1);
}
genererClasse();
