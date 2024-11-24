import level from './any';

const readline = require('readline-sync');

export default function persoBaseJeu() {
  console.log('Bienvenue dans votre univers que souhaitez-vous');
  const option2 = ['Nouvelle partie', 'Quitter la partie'];
  const answer2 = readline.keyInSelect(option2);
  if (answer2 === 0) {
    const option3 = ['Normal', 'Difficile', 'Insensé'];
    const answer3 = readline.keyInSelect(option3, 'Choissisez votre niveau de difficulté?');
    const nbreCombat = ['10', '20 combats', '50 combats', '100combats'];
    const answerComb = readline.keyInSelect(nbreCombat, 'Choisissez le nombre de combats');
    let combat = 0;
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
      level(combat);
    }
    if (answer3 === 0) {
      level(combat);
    }
    if (answer3 === 1) {
      level(combat);
    }
    if (answer3 === 2) {
      level(combat);
    }
  }
  if (answer2 === 1) {
    console.log('Aurevoir');
  }
}
