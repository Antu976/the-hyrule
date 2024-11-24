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

function monteNiveau(personnage :Character) {
  personnage.niveau += 1;
  personnage.xp = 0;
  console.log(`${personnage.name} monte d'un niveau supérieur le niveau ${personnage.niveau}`);
  personnage.hp += Math.floor(Math.random() * (50 - 20) + 20);
  personnage.str += Math.floor(Math.random() * (60 - 30) + 30);
}

export default function gagneXP(personnage :Character) {
  const min = 15;
  const max = 50;
  const xp = Math.floor(Math.random() * (max - min) + min);
  personnage.xp += xp;
  console.log(`${personnage.name} gagane ${xp} points d'expérience`);
  if (personnage.xp >= 100) {
    monteNiveau(personnage);
  }
}
