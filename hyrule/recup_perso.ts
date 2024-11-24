import { json } from "stream/consumers";

const fs = require('fs');

const content = fs.readFileSync('../players.json', 'utf-8');
export const jsonObject = JSON.parse(content);

const contentEnnemies = fs.readFileSync('../enemies.json', 'utf-8');
export const jsonEnemies = JSON.parse(contentEnnemies);

const boss = fs.readFileSync('../bosses.json', 'utf-8');
export const jsonBoss = JSON.parse(boss);

export const persoLink = jsonObject.find((jsonObject) => jsonObject.id === 1);
export const ennemiBobo = jsonEnemies.find((jsonEnemies) => jsonEnemies.id === 12);
export const persoGanon = jsonBoss.find((jsonBoss) => jsonBoss.id === 1);

export function recherchePerso(jsonObject, id: Number) {
  return (jsonObject.find((Character) => Character.id === id));
  // console.log(perso);
}

export function rechercheEnemy(jsonEnemies, id: Number) {
  return (jsonEnemies.find((Character) => Character.id === id));
}

export function rechercheBoss(jsonBoss, id: Number) {
  return (jsonBoss.find((Character) => Character.id === id));
}

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
