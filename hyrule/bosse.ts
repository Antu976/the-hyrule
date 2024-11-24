import { jsonBoss, rechercheBoss } from './recup_perso';

export default function genererBoss() {
  const min = 1;
  const max = 7;
  const id = Math.floor(Math.random() * (max - min) + min);

  const boss = rechercheBoss(jsonBoss, id);

  class Boss {
    id: number;

    name:string;

    hp: number;

    str: number;

    def: number;

    rarity: number;

    xp: number;

    niveau: number;

    constructor(id: number, name: string, hp: number, str: number, def: number, rarity: number, xp: number, niveau:number) {
      this.id = boss.id;
      this.name = boss.name;
      this.hp = boss.hp;
      this.str = boss.str;
      this.def = boss.def;
      this.rarity = boss.rarity;
      this.xp = boss.xp;
      this.niveau = boss.niveau;
    }
  }

  return new Boss(boss.id, boss.name, boss.hp, boss.str, boss.def, boss.rarity, boss.xp, boss.niveau);
}
