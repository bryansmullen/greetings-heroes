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

export const forestPeople = new Enemy("The Forest People", 35, 350);
export const melwuntTribe = new Enemy("A Tribe Of Melwunts", 25, 400);
export const wretchedDead = new Enemy("The Wretched Dead", 30, 300);
export const engineOfChaos = new Enemy("The Engine Of Chaos", 60, 650);
export const valderak = new Enemy("Valderak", 100, 750);
const bjorna = new Player("Bjorna", 80, 1000);
const jayna = new Player("Jayna", 70, 800);
const zazzerpan = new Player("Zazzerpan", 90, 300);
const yolo = new Player("Yolo", 100, 500);

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
