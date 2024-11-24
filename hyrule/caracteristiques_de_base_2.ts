import genererHero from './perso';

const fs = require('fs');

const contentclass = fs.readFileSync('../classes.json', 'utf-8');
const jsonClasse = JSON.parse(contentclass);

// console.log(jsonClasse);

function rechercheClass(jsonClasse, id: Number) {
  return (jsonClasse.find((Character) => Character.id === id));
  // const cla = jsonClasse.find((Character) => Character.id === id);
  // console.log(cla);
}

const personnage = genererHero();
console.log(personnage);

const readline = require('readline-sync');

function genererClasse() {
  const answer: number = readline.question('veuillez entrez le numero de classe du personnage dont vous souhaitez voir les options de combat\n');
  const classe = rechercheClass(jsonClasse, answer);
  class Classe {
    id: number;

    name: string;

    strenghts: Array<number>;

    weaknesses: Array<number>;

    attack_type: string;

    alignement: string;

    rarity: number;

    constructor( id: number, name: string, strenghts: Array<number>, weaknesses: Array<number>, attack_type: string, alignement: string, rarity: number) {
      this.id = classe.id;
      this.name = classe.name;
      this.strenghts = classe.strenghts;
      this.weaknesses = classe.weaknesses;
      this.attack_type = classe.attack_type;
      this.alignement = classe.alignement;
      this.rarity = classe.rarity;
    }
  }

  const classe1 = new Classe(classe.id, classe.name, classe.strenghts, classe.weaknesses, classe.attack_type, classe.alignement, classe.rarity );

  console.log(classe1);
}

genererClasse();
