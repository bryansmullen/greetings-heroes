// Playable Characters

export class Player {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.maxHealth = health;
  }
}

class Enemy {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.maxHealth = health;
  }
}

export const forestPeople = new Enemy("The Forest People", 45, 350);
export const melwuntTribe = new Enemy("A Tribe Of Melwunts", 35, 400);
export const wretchedDead = new Enemy("The Wretched Dead", 40, 300);
export const engineOfChaos = new Enemy("The Engine Of Chaos", 60, 650);
export const valderak = new Enemy("Valderak", 100, 750);
const bjorna = new Player("Bjorna", 80, 450);
const jayna = new Player("Jayna", 70, 400);
const zazzerpan = new Player("Zazzerpan", 90, 200);
const yolo = new Player("Yolo", 80, 300);

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
