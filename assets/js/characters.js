// Playable Characters

export class Player {
  constructor(name, strength, defense, magicDefense, health) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.magicDefense = magicDefense;
    this.health = health;
    this.maxHealth = health;
  }
}

class Enemy {
  constructor(name, strength, defense, magicDefense, health) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.magicDefense = magicDefense;
    this.health = health;
    this.maxHealth = health;
  }
}

export const forestPeople = new Enemy("The Forest People", 10, 10, 10, 100);
export const melwuntTribe = new Enemy("A Tribe Of Melwunts", 10, 10, 10, 100);
export const wretchedDead = new Enemy("The Wretched Dead", 10, 10, 10, 100);
export const engineOfChaos = new Enemy("The Engine Of Chaos", 10, 10, 10, 100);
export const valderak = new Enemy("Valderak", 10, 10, 10, 100);
const bjorna = new Player("Bjorna", 10, 10, 10, 100);
const jayna = new Player("Jayna", 10, 10, 10, 100);
const zazzerpan = new Player("Zazzerpan", 10, 10, 10, 100);
const yolo = new Player("Yolo", 10, 10, 10, 100);

export const choosePlayer = function (character) {
  switch (character) {
    case "bjorna":
      return bjorna;
    case "jayna":
      return jayna;
    case "zazzerpan":
      return zazzerpan;
    case "yolo":
      return yolo;
  }
};
