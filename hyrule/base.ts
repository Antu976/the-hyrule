import { persoLink, ennemiBobo, persoGanon } from './recup_perso';

interface Character {
  id: number,
  name: string,
  hp: number,
  str: number,
}

const Link: Character = {
  id: persoLink.id,
  name: persoLink.name,
  hp: persoLink.hp,
  str: persoLink.str,
};

const Boboklin: Character = {
  id: ennemiBobo.id,
  name: ennemiBobo.name,
  hp: ennemiBobo.hp,
  str: ennemiBobo.str,
};

const Ganon: Character = {
  id: persoGanon.id,
  name: persoGanon.name,
  hp: persoGanon.hp,
  str: persoGanon.str,
};

function attaquer(attaqueur: Character, defenseur: Character) {
  console.log(`${attaqueur.name} attaque ${defenseur.name} et inflige ${attaqueur.str} points`);
  defenseur.hp -= attaqueur.str;
  console.log(`${defenseur.name} possède ${defenseur.hp} HP`);
}

function soigner(hero: Character) {
  hero.hp /= 2;
  console.log(`${hero.name} recoit des soins de ${hero.hp}`);
}

const readline = require('readline-sync');

function combat(perso: Character, enemy: Character) {
  console.log(`combat entre ${Link.name} et ${Boboklin.name} !`);
  console.log(`${Link.name}- HP:${Link.hp} et STR:${Link.str} `);
  console.log(`${Boboklin.name}- HP:${Boboklin.hp} et STR:${Boboklin.str}\n`);
  let round = 1;
  while (perso.hp > 0 && enemy.hp > 0) {
    console.log(`-------Round ${round}-------`);
    const options = ['attaquer', 'Se soigner'];
    const answer = readline.keyInSelect(options);
    if (answer === 0) {
      attaquer(perso, enemy);
      if (enemy.hp <= 0) {
        console.log(`${perso.name} à gagné le combat`);
        break;
      }
      attaquer(enemy, perso);
      if (perso.hp <= 0) {
        console.log(`${perso.name} à perdu le combat`);
        break;
      }
    } else if (answer === 1) {
      soigner(perso);
    }
    round += 1;
  }
}

function level() {
  let niv = 1;
  while (niv <= 10) {
    Boboklin.hp = 25;
    Link.hp = 60;
    console.log(`################LEVEL${niv}##############`);
    const answer = readline.question('Voulez-vous continuer\n');
    if (answer.toUpperCase() === 'O') {
      combat(Link, Boboklin);
      if (niv === 10) {
        combat(Link, Ganon);
      }
    } if (answer.toUpperCase() === 'N') {
      console.log('A la prochaine');
      break;
    }
    niv += 1;
  }
}

export default { level };
