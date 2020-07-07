class Character {
  constructor(classType, health, mana, strength) {
    this.classType = classType;
    this.health = health;
    this.magic = mana;
    this.strength = strength;
  }
}

export class Player extends Character {
  constructor(classType, health, mana, strength, speed) {
    super(classType, health, mana, strength);
    this.speed = speed;
  }
}

export class Enemy extends Character {
  constructor(classType, health, strength, agility) {
    super(classType, health, 0, strength);
    this.agility = agility;
  }
}
