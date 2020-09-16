// This file declares the differnet classes of screens to expect to render, and the attributes they should have

export class Story {
  constructor(text, type, next, choices, audio) {
    this.text = text;
    this.type = type;
    this.next = next;
    this.choices = choices;
    this.audio = audio;
  }
}
export class Title {
  constructor(text, type, choices, audio) {
    this.text = text;
    this.type = type;
    this.choices = choices;
    this.audio = audio;
  }
}
export class Instructions {
  constructor(text, type, choices, paragraphs) {
    this.text = text;
    this.type = type;
    this.choices = choices;
    this.paragraphs = paragraphs;
  }
}
export class Character {
  constructor(text, type, next, characters, audio) {
    this.text = text;
    this.type = type;
    this.next = next;
    this.characters = characters;
    this.audio = audio;
  }
}
export class Battle {
  constructor(type, enemy, next, choices, audio) {
    this.type = type;
    this.enemy = enemy;
    this.next = next;
    this.choice = choices;
    this.audio = audio;
  }
}
