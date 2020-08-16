import { drawBattle, drawInstructions, drawCharacter, drawTitle, drawNarrative } from "./drawScreens.js";
import { toggleSound } from "./audio.js";
export const stage = {
  title: {
    type: "title",
    text: "Greetings Heroes",
    audio: "1m03",

    choices: [
      {
        text: "Play Game",
        action: drawNarrative,
        next: "prelude",
      },
      {
        text: "Instructions",
        action: drawInstructions,
        next: "instructions",
      },
      {
        text: "Preferences",
        action: drawTitle,
        next: "preferences",
      },
    ],
  },
  preferences: {
    type: "title",
    text: "Preferences",
    choices: [
      {
        text: "Return To Title",
        action: drawTitle,
        next: "title",
      },
      {
        text: "Sound On",
        action: toggleSound,
      },
    ],
  },
  instructions: {
    type: "instructions",
    text: "Instructions",
    choices: [
      {
        text: "Return To Title",
        action: drawTitle,
        next: "title",
      },
    ],
    paragraphs: [
      "The game is played using only the mouse.",
      "To begin, click on the 'Start Game' button on the main menu. You will be brought to the character selection screen",
      "You may inspect the attributes of each of the characters by hovering over each of them in turn, and when you have decided which character you would like to play as, simply click on them to select, and confirm your choice.",
      "The game will begin, and you may advance through the story by clicking the 'next' button in the story window. When battles commence you may choose from a list of commands - attack, magic, and item.",
      "Once you make your selection your character will take their turn, after which the computer gets a chance to retaliate. Both the player and the computer take it in turns to use a command of their choice until one person wins.",
      "If the player wins, you will progress through the story until you defeat the final enemy.",
    ],
  },
  prelude: {
    text:
      "A dread shadow stalks the land! Arch-Wizard Valderak, freed from his timeless prison, has come to wreak vengeance on the people of The Four Kingdoms. From his tower deep in the Forest of Poison, he plots a terrible revenge. Four heroes, the greatest from each Kingdom, have been sent to thwart the Arch-Wizard and restore peace to the land.",
    choices: [
      {
        text: "Progress To Next Scene",
        action: drawCharacter,
        next: "character",
      },
    ],
    next: "1",
    audio: "1m03",
  },
  character: {
    text: "Choose Your Hero",
    type: "character",
    characters: [
      { name: "jayna", imagePath: "assets/img/jayna.png", action: drawNarrative, next: "preludea" },
      { name: "bjorna", imagePath: "assets/img/bjorna.png", action: drawNarrative, next: "preludeb" },
      { name: "zazzerpan", imagePath: "assets/img/zazzerpan.png", action: drawNarrative, next: "preludec" },
      { name: "yolo", imagePath: "assets/img/yolo.png", action: drawNarrative, next: "preluded" },
    ],
    audio: "1m03",
  },
  preludea: {
    text:
      "You are Lady Jayna Falchion, First Knight of the Kingdom of Aquilae! Wielder of the enchanted sword Cutbert and the mighty Shield of Aquilae! Your father, the King of Aquilae, has fallen ill as the evil of Valderak has spread. Only your strength of arms, your purity of heart will save your father and the Kingdom of Aquilae.",
    choices: [
      {
        text: "Progress To Next Scene",
        action: drawNarrative,
        next: "1",
      },
    ],
    audio: "1m03",
  },
  preludeb: {
    text:
      "You are Bjorna Giantsdottir, Titan of the Realm of Harthingfjord. By your side is the mighty axe Dreadcleaver, and the horn of Gallerbjurn. Your tribe have been enchanted by Valderak, frozen in time. You are the last and only hope for the Realm of Harthingfjord.",
    choices: [
      {
        text: "Progress To Next Scene",
        action: drawNarrative,
        next: "1",
      },
    ],
    audio: "1m03",
  },
  preludec: {
    text:
      "You are Zazzerpan the Scatterbrained, Wizard Third-Class from the Sorcerous Realm of Fizzlesnip. At your fingertips are the powers of the elements, guided by the magic tome Mallifax. The great library of Fizzlesnip has been plundered by Valderak. Only you can save the knowledge of the ancients from being corrupted.",
    choices: [
      {
        text: "Progress To Next Scene",
        action: drawNarrative,
        next: "1",
      },
    ],
    audio: "1m03",
  },
  preluded: {
    text:
      "You are Yolo the Magnificent, Sneak-Thief from the endlessly filthy city-state of Groemen-Sloarch. No locked doors, no hidden vaults can stand before you or your clockwork beetle, the Figetywib. You know that the dread wizard Valderak has gathered to him the most powerful artefacts of the Four Kingdoms. You are going to steal a few of them.",
    choices: [
      {
        text: "Progress To Next Scene",
        action: drawNarrative,
        next: "1",
      },
    ],
    audio: "1m03",
  },

  "1": {
    text:
      "You and your party make your through the Forest of Poison, through foul waters and rotting trees. Before you, rising like a thorn from the putrid mire, stands the dark tower of Valderak. Its arched windows are filled with the green fire of his baleful magics. You step inside the echoing tower. The first of line of Valderak's defenses falls upon you:",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "2a",
      },
    ],
    audio: "1m03",

    type: "story",
    next: "2a",
  },

  "2a": {
    text: "the people of the forest, now corrupted by Valderak.",
    type: "story",
    next: "battle1a",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "battle1a",
      },
    ],
    audio: "1m03",
  },
  "2b": {
    text: "a local tribe of Melwunts, their nasty natures amplified by Valderak",
    type: "story",
    next: "battle1b",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "1b",
      },
    ],
    audio: "1m03",
  },
  "2c": {
    text: "a group of the Wretched Dead, corpses animated by the magics of Valderak.",
    type: "story",
    next: "battle1c",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "1c",
      },
    ],
    audio: "1m03",
  },
  "3a": {
    text: "Defeating the forest folk, you are able to free them from the influence of Valderak.",
    type: "story",
    next: "4a",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "4a",
      },
    ],
    audio: "1m01",
  },
  "3b": {
    text: "Defeating the Melwunts, you send them scampering back into the marshes.",
    type: "story",
    next: "4b",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "4b",
      },
    ],
    audio: "1m01",
  },
  "3c": {
    text: "Defeating the Wretched Dead, they fall to pieces on the floor, no longer animated by Valderak.",
    type: "story",
    next: "4c",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "4c",
      },
    ],
    audio: "1m01",
  },
  "4a": {
    text: "Your foe leaves behind a powerful artefact: The Wand of Azzerthoth, crackling with violet energies [ATTACK UP]",
    type: "story",
    next: "5",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "5",
      },
    ],
    audio: "1m01",
  },
  "4b": {
    text: "Your foe leaves behind a powerful artefact: The Brazen Helm of Caargolos, the demon-mask of a dead god [DEFENSE UP]",
    type: "story",
    next: "5",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "5",
      },
    ],
    audio: "1m01",
  },
  "4c": {
    text: "Your foe leaves behind a powerful artefact: The Philtre of Gnomon - a glass vial filled with moonlight [HEALING]",
    type: "story",
    next: "5",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "5",
      },
    ],
    audio: "1m01",
  },
  "5": {
    text:
      "Hidden in the wreckage you find the key to the upper floors. Ascending the winding stairs your ears pick up a harsh, clanking sound. There is smoke upon the air. You are greeted by three doors - to your left a door of ruby, to your right a door of aquamarine, and between, a door of topaz.",
    type: "story",
    next: "",
    choices: [
      { text: "Proceed Through Ruby Door", action: drawNarrative, next: "6a" },
      { text: "Proceed Through Topaz Door", action: drawNarrative, next: "6b" },
      { text: "Proceed Through Aquamarine Door", action: drawNarrative, next: "6c" },
    ],
    audio: "1m01",
  },
  "6a": {
    text:
      " Opening the ruby door to an upper chamber cloaked in scarlet cloth you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of fire.",
    type: "story",
    next: "battle2",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "battle2",
      },
    ],
    audio: "1m01",
  },
  "6b": {
    text:
      "Opening the topaz door to an upper chamber choked with sand you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of lightning",
    type: "story",
    next: "battle2",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "battle2",
      },
    ],
    audio: "1m01",
  },
  "6c": {
    text:
      "Opening the aquamarine door to an upper chamber riven with streams you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of water",
    type: "story",
    next: "battle2",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "battle2",
      },
    ],
    audio: "1m01",
  },
  "7a": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of fire",
    type: "story",
    next: "8",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "8",
      },
    ],
    audio: "1m01",
  },
  "7b": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of lightning",
    type: "story",
    next: "8",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "8",
      },
    ],
    audio: "1m01",
  },
  "7c": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of water",
    type: "story",
    next: "8",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "8",
      },
    ],
    audio: "1m01",
  },
  "8": {
    text:
      "Using it you dispel the wards and magics protecting the inner sanctum of Valderak. Entering the lair of the Arch-Wizard, you find him, hunched over his scrying table. He turns and addresses you.",
    type: "story",
    next: "",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "9a",
      },
    ],
    audio: "1m01",
  },
  "9a": {
    text:
      "All your efforts are in vain, little one. Aquilae will be the first to fall. Your father is doomed - and you shall live just long enough to see him perish!",
    type: "story",
    next: "10",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "10",
      },
    ],
    audio: "1m01",
  },
  "9b": {
    text:
      "Foolish wretch - your tribe is lost in the seas of time! I may not have been able to best their strength, but now they are somewhere their meagre intellect will not save them. Do you truly think one of you can defeat me? After all your people joined as one, failed?",
    type: "story",
    next: "10",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "10",
      },
    ],
    audio: "1m01",
  },
  "9c": {
    text:
      "You dare to disturb the dread Valderak? For what end? To thwart me in my plans? Foolish dolt - you cannot defeat me! All magic is mine! All magic flows through me!",
    type: "story",
    next: "10",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "10",
      },
    ],
    audio: "1m01",
  },
  "9d": {
    text:
      "Wait. I know you. Didn't you break into my tower before? Yes! you're the one who stole my record collection! You took all my precious, priceless Bob Dylan records!",
    type: "story",
    next: "10",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "10",
      },
    ],
    audio: "1m01",
  },
  "10": {
    text: "With a screech of disgust he conjures his Poison Blade, and with one final curse on the Four Kingdoms, launches himself at you. Battle is joined.",
    type: "story",
    next: "battle3",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawBattle,
        next: "battle3",
      },
    ],
    audio: "1m01",
  },
  victory: {
    text:
      "With a blood-curdling scream, the magics holding the Arch-Wizard together are sundered for good. In a great rush of cold green fire, the body falls, nothing more than a few rags and bones. The dark tower begins to shudder beneath your feet. Without Valderak to maintain it, it is beginning to sink into the swamp. You fly for the exit, escaping just in time to see the sharp roof sink beneath the waters. The stain on the landscape, the blight on the Four Kingdoms, Valderak the Arch-Wizard is no more.",
    type: "story",
    next: "",
    choices: [
      {
        text: "Proceed To Next Scene",
        action: drawNarrative,
        next: "11a",
      },
    ],
    audio: "1m02",
  },
  "11a": {
    text:
      "You return to the Kingdom of Aquilae to find the ravages of the dread Arch-Wizard fading from the land. Your father has been restored to health. With the death of his twin brother Valderak, peace now reigns... for about a fortnight until your evil twin sister escapes...",
    type: "story",
    next: "title",
    choices: [
      {
        text: "Return To Title Screen",
        action: drawTitle,
        next: "title",
      },
    ],
    audio: "1m02",
  },
  "11b": {
    text:
      "In your hand you hold the Dispelling Arch, and returning to the Realm of Harthingfjord, you use it to pluck your tribe from the rivers of time. They are safe, but the Arch demands a sacrifice - you find yourself lost in time and space.",
    type: "story",
    next: "title",
    choices: [
      {
        text: "Return To Title Screen",
        action: drawTitle,
        next: "title",
      },
    ],
    audio: "1m02",
  },
  "11c": {
    text:
      "In your hands the great tome Mallifax belches, swollen with the stolen magics of Valderak. But returning to Fizzlesnip, you find it in disarray. You have done your job too well - all magic has been drained from the Four Kingdoms and beyond. The world is saved but Zazzerpan, you're going to have do what your father's always said. Get a real job.",
    type: "story",
    next: "title",
    choices: [
      {
        text: "Return To Title Screen",
        action: drawTitle,
        next: "title",
      },
    ],
    audio: "1m02",
  },
  "11d": {
    text:
      "You make it through the swamp with your sack of stolen artefacts. Resting for the night you look at your swag. Surely it wouldn't hurt to try on the Ring of Destruction? And maybe the Crown of Pain would compliment it... and the Cloak of Daggers too. Your team-mates raise concerns, but you wave them away, accidentally obliterating them. Your hands course with power. The dark reign of Yolo the Magnificent has begun.",
    type: "story",
    next: "title",
    choices: [
      {
        text: "Return To Title Screen",
        action: drawTitle,
        next: "title",
      },
    ],
    audio: "1m02",
  },
  "Game Over": {
    text:
      "All your valour, all your bravery, was for naught. You have been vanquished. It is a dark day for the Four Kingdoms as its greatest champions lie defeated. There will be many more dark days ahead, for now nothing stands in the way of Valderak's final victory. All is lost.",
    type: "story",
    audio: "1m02",
    choices: [
      {
        text: "Return To Title Screen",
        action: drawTitle,
        next: "title",
      },
    ],
    audio: "1m02",
  },
  battle1a: {
    type: "battle",
    enemy: "The Forest People",
    next: "3a",
    enemyHealth: 100,
    enemyStrengh: 10,
    enemyDefence: 10,
    enemyMagic: 10,
    enemyMagicDefence: 10,
    choices: [
      {
        text: "Progress To Next Screen",
        action: drawNarrative,
        next: "3a",
        id: "progress",
      },
    ],
    audio: "1m04",
  },
  battle1b: {
    type: "battle",
    enemy: "A Tribe Of Melwunts",
    next: "3b",
    enemyHealth: 100,
    enemyStrengh: 10,
    enemyDefence: 10,
    enemyMagic: 10,
    enemyMagicDefence: 10,
    choices: [
      {
        text: "Progress To Next Screen",
        action: drawNarrative,
        next: "3b",
        id: "progress",
      },
    ],
    audio: "1m04",
  },
  battle1c: {
    type: "battle",
    enemy: "The Wretched Dead",
    next: "3c",
    enemyHealth: 100,
    enemyStrengh: 10,
    enemyDefence: 10,
    enemyMagic: 10,
    enemyMagicDefence: 10,
    choices: [
      {
        text: "Progress To Next Screen",
        action: drawNarrative,
        next: "3c",
        id: "progress",
      },
    ],
    audio: "1m01",
  },
  battle2: {
    type: "battle",
    enemy: "Engine Of Chaos",
    next: "",
    enemyHealth: 100,
    enemyStrengh: 10,
    enemyDefence: 10,
    enemyMagic: 10,
    enemyMagicDefence: 10,
    choices: [
      {
        text: "Progress To Next Screen",
        action: drawNarrative,
        next: "7a",
        id: "progress",
      },
    ],
    audio: "1m04",
  },
  battle3: {
    type: "battle",
    enemy: "Valderak",
    next: "victory",
    enemyHealth: 100,
    enemyStrengh: 10,
    enemyDefence: 10,
    enemyMagic: 10,
    enemyMagicDefence: 10,
    choices: [
      {
        text: "Progress To Next Screen",
        action: drawNarrative,
        next: "victory",
        id: "progress",
      },
    ],
    audio: "1m04",
  },
};
