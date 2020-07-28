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

export class Enemy {
  constructor(name, strength, defense, magicDefense, health) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.magicDefense = magicDefense;
    this.health = health;
    this.maxHealth = health;
  }
}
