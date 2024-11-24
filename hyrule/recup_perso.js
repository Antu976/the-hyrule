"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rechercheBoss = exports.rechercheEnemy = exports.recherchePerso = exports.persoGanon = exports.ennemiBobo = exports.persoLink = exports.jsonBoss = exports.jsonEnemies = exports.jsonObject = void 0;
var fs = require('fs');
var content = fs.readFileSync('../players.json', 'utf-8');
exports.jsonObject = JSON.parse(content);
var contentEnnemies = fs.readFileSync('../enemies.json', 'utf-8');
exports.jsonEnemies = JSON.parse(contentEnnemies);
var boss = fs.readFileSync('../bosses.json', 'utf-8');
exports.jsonBoss = JSON.parse(boss);
exports.persoLink = exports.jsonObject.find(function (jsonObject) { return jsonObject.id === 1; });
exports.ennemiBobo = exports.jsonEnemies.find(function (jsonEnemies) { return jsonEnemies.id === 12; });
exports.persoGanon = exports.jsonBoss.find(function (jsonBoss) { return jsonBoss.id === 1; });
function recherchePerso(jsonObject, id) {
    return (jsonObject.find(function (Character) { return Character.id === id; }));
    // console.log(perso);
}
exports.recherchePerso = recherchePerso;
function rechercheEnemy(jsonEnemies, id) {
    return (jsonEnemies.find(function (Character) { return Character.id === id; }));
}
exports.rechercheEnemy = rechercheEnemy;
function rechercheBoss(jsonBoss, id) {
    return (jsonBoss.find(function (Character) { return Character.id === id; }));
}
exports.rechercheBoss = rechercheBoss;
// console.log(persoGanon);
// const persoLink = jsonObject.filter((id) => id === 1);
// console.log(persoLink);
// function personnage(personne: Character) {
//   console.log(`${personne.name}`);
// }
// personnage(Link);
// console.log(ennemiBobo);
// console.log(jsonBoss);
// console.log(jsonObject);
// for (const quest of jsonObject) {
//     if(`${quest.id}` === '1'){
//     const persoLink =console.log(`${quest.id} ${quest.name} ${quest.hp} ${quest.str}`);
//     }
// }
