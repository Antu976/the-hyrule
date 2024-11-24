import genererHero from './perso';
import genererEnemi from './enemy';
import genererBoss from './bosse';
import gagneXP from './niveau_et_experience';

interface Character {
  id: number,
  name: string,
  hp: number,
  str: number,
  def: number,
  rarity: number,
  xp: number,
  niveau: number,
}

const readline = require('readline-sync');

function attaquer(attaqueur: Character, defenseur: Character) {
  const options = ['Dégats de base', 'Coup critique'];
  const answer = readline.keyInSelect(options);
  if (answer === 0) {
    console.log(`${attaqueur.name} attaque ${defenseur.name} et inflige ${attaqueur.str} points`);
    defenseur.hp -= attaqueur.str * (defenseur.def / 100);
    console.log(`${defenseur.name} possède ${defenseur.hp} HP`);
  }
  if (answer === 1) {
    attaqueur.str *= 2;
    console.log(`${attaqueur.name} attaque ${defenseur.name} et inflige ${attaqueur.str} points`);
    defenseur.hp -= attaqueur.str * (defenseur.def / 100);
    console.log(`${defenseur.name} possède ${defenseur.hp} HP`);
  }
}

function soigner(heros: Character) {
  heros.hp /= 2;
  console.log(`${heros.name} recoit des soins de ${heros.hp}`);
}

function combat(perso: Character, enemy: Character) {
  console.log(`combat entre ${perso.name} et ${enemy.name} !`);
  console.log(`${perso.name}- HP:${perso.hp} et STR:${perso.str} `);
  console.log(`${enemy.name}- HP:${enemy.hp} et STR:${enemy.str}`);
  let round = 1;
  while (perso.hp > 0 && enemy.hp > 0) {
    console.log(`-------Round ${round}-------`);
    const options = ['attaquer', 'Se soigner'];
    const answer = readline.keyInSelect(options);
    if (answer === 0) {
      attaquer(perso, enemy);
      if (enemy.hp <= 0) {
        console.log(`${perso.name} à gagné le combat`);
        return true;
      }
      attaquer(enemy, perso);
      if (perso.hp <= 0) {
        console.log(`${perso.name} à perdu le combat`);
        return false;
      }
    } else if (answer === 1) {
      soigner(perso);
    }
    round += 1;
  }
  return false;
}

export default function level(nbreCombat: number) {
  let niv = 1;
  let pieces = 0;
  while (niv < nbreCombat) {
    console.log(`################LEVEL${niv}##############`);
    const hero = genererHero();
    const mechant = genererEnemi();
    const superMechant = genererBoss();
    const answer = readline.question('Voulez-vous continuer\n');
    if (answer.toUpperCase() === 'O') {
      const victoire = combat(hero, mechant);
      if (victoire) {
        pieces += 1;
        console.log(`vous avez gagné une pièce ${pieces}`);
      }
      if (niv === nbreCombat) {
        combat(hero, superMechant);
        if (victoire) {
          gagneXP(hero);
          pieces += 1;
          console.log(`vous avez gagné une pièce ${pieces}`);
        }
      }
    } if (answer.toUpperCase() === 'N') {
      console.log('A la prochaine');
      break;
    }
    niv += 1;
  }
}
