import { jsonObject, recherchePerso } from './recup_perso';

export default function genererHero() {
  const min = 1;
  const max = 5;
  const id = Math.floor(Math.random() * (max - min) + min);

  const perso = recherchePerso(jsonObject, id);

  class Personnage {
    id: number;

    name:string;

    hp: number;

    str: number;

    def: number;

    rarity: number;

    classe: number;

    xp: number;

    niveau: number;

    constructor(id: number, name: string, hp: number, str: number, def: number, rarity: number, classe: number, xp: number, niveau:number) {
      this.id = perso.id;
      this.name = perso.name;
      this.hp = perso.hp;
      this.str = perso.str;
      this.def = perso.def;
      this.rarity = perso.rarity;
      this.classe = perso.class;
      this.xp = perso.xp;
      this.niveau = perso.niveau;
    }
  }

  return new Personnage(perso.id, perso.name, perso.hp, perso.str, perso.def, perso.rarity, perso.class, perso.xp, perso.niveau);
}
