import { jsonEnemies, rechercheEnemy } from './recup_perso';

export default function genererEnemi() {
  const min = 1;
  const max = 12;
  const id = Math.floor(Math.random() * (max - min) + min);

  const enemy = rechercheEnemy(jsonEnemies, id);

  class Enemy {
    id: number;

    name:string;

    hp: number;

    str: number;

    def: number;

    rarity: number;

    xp: number;

    niveau: number;

    constructor(id: number, name: string, hp: number, str: number, def: number, rarity: number, xp: number, niveau:number) {
      this.id = enemy.id;
      this.name = enemy.name;
      this.hp = enemy.hp;
      this.str = enemy.str;
      this.def = enemy.def;
      this.rarity = enemy.rarity;
      this.xp = enemy.xp;
      this.niveau = enemy.niveau;
    }
  }

  return new Enemy(enemy.id, enemy.name, enemy.hp, enemy.str, enemy.def, enemy.rarity, enemy.xp, enemy.niveau);
}
