export const stage = {
  title: {
    type: "title",
  },
  character: {
    type: "character",
    next: "1",
  },
  prelude:
    "A dread shadow stalks the land! Arch-Wizard Valderak, freed from his timeless prison, has come to wreak vengeance on the people of The Four Kingdoms. From his tower deep in the Forest of Poison, he plots a terrible revenge. Four heroes, the greatest from each Kingdom, have been sent to thwart the Arch-Wizard and restore peace to the land.",
  preludea:
    "You are Lady Jayna Falchion, First Knight of the Kingdom of Aquilae! Wielder of the enchanted sword Cutbert and the mighty Shield of Aquilae! Your father, the King of Aquilae, has fallen ill as the evil of Valderak has spread. Only your strength of arms, your purity of heart will save your father and the Kingdom of Aquilae.",
  preludeb:
    "You are Bjorna Giantsdottir, Titan of the Realm of Harthingfjord. By your side is the mighty axe Dreadcleaver, and the horn of Gallerbjurn. Your tribe have been enchanted by Valderak, frozen in time. You are the last and only hope for the Realm of Harthingfjord.",
  preludec:
    "You are Zazzerpan the Scatterbrained, Wizard Third-Class from the Sorcerous Realm of Fizzlesnip. At your fingertips are the powers of the elements, guided by the magic tome Mallifax. The great library of Fizzlesnip has been plundered by Valderak. Only you can save the knowledge of the ancients from being corrupted.",
  preluded:
    "You are Yolo the Magnificent, Sneak-Thief from the endlessly filthy city-state of Groemen-Sloarch. No locked doors, no hidden vaults can stand before you or your clockwork beetle, the Figetywib. You know that the dread wizard Valderak has gathered to him the most powerful artefacts of the Four Kingdoms. You are going to steal a few of them.",

  "1": {
    text:
      " You and your party make your through the Forest of Poison, through foul waters and rotting trees. Before you, rising like a thorn from the putrid mire, stands the dark tower of Valderak. Its arched windows are filled with the green fire of his baleful magics. You step inside the echoing tower. The first of line of Valderak's defenses falls upon you:",
    type: "story",
    next: "2a",
  },

  "2a": {
    text: "the people of the forest, now corrupted by Valderak.",
    type: "story",
    next: "battle1a",
  },
  "2b": {
    text: "a local tribe of Melwunts, their nasty natures amplified by Valderak",
    type: "story",
    next: "battle1b",
  },
  "2c": {
    text: "a group of the Wretched Dead, corpses animated by the magics of Valderak.",
    type: "story",
    next: "battle1c",
  },
  "3a": {
    text: "Defeating the forest folk, you are able to free them from the influence of Valderak.",
    type: "story",
    next: "4a",
  },
  "3b": {
    text: "Defeating the Melwunts, you send them scampering back into the marshes.",
    type: "story",
    next: "4b",
  },
  "3c": {
    text: "Defeating the Wretched Dead, they fall to pieces on the floor, no longer animated by Valderak.",
    type: "story",
    next: "4c",
  },
  "4a": {
    text: "Your foe leaves behind a powerful artefact: The Wand of Azzerthoth, crackling with violet energies [ATTACK UP]",
    type: "story",
    next: "5",
  },
  "4b": {
    text: "Your foe leaves behind a powerful artefact: The Brazen Helm of Caargolos, the demon-mask of a dead god [DEFENSE UP]",
    type: "story",
    next: "5",
  },
  "4c": {
    text: "Your foe leaves behind a powerful artefact: The Philtre of Gnomon - a glass vial filled with moonlight [HEALING]",
    type: "story",
    next: "5",
  },
  "5": {
    text:
      "Hidden in the wreckage you find the key to the upper floors. Ascending the winding stairs your ears pick up a harsh, clanking sound. There is smoke upon the air. You are greeted by three doors - to your left a door of ruby, to your right a door of aquamarine, and between, a door of topaz.",
    type: "story",
    next: "",
    choices: [
      { text: "Proceed Through Ruby Door", action: "6a" },
      { text: "Proceed Through Topaz Door", action: "6b" },
      { text: "Proceed Through Aquamarine Door", action: "6c" },
    ],
  },
  "6a": {
    text:
      " Opening the ruby door to an upper chamber cloaked in scarlet cloth you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of fire.",
    type: "story",
    next: "battle2",
  },
  "6b": {
    text:
      "Opening the topaz door to an upper chamber choked with sand you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of lightning",
    type: "story",
    next: "battle2",
  },
  "6c": {
    text:
      "Opening the aquamarine door to an upper chamber riven with streams you encounter Valderak's lieutenant, an Engine of Chaos, powered by the elemental fury of water",
    type: "story",
    next: "battle2",
  },
  "7a": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of fire",
    type: "story",
    next: "8",
  },
  "7b": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of lightning",
    type: "story",
    next: "8",
  },
  "7c": {
    text: "The Engine of Chaos is destroyed. From its wreckage you pluck the source of its power, a Gem of Annihilation. It pulses with the power of water",
    type: "story",
    next: "8",
  },
  "8": {
    text:
      "Using it you dispel the wards and magics protecting the inner sanctum of Valderak. Entering the lair of the Arch-Wizard, you find him, hunched over his scrying table. He turns and addresses you.",
    type: "story",
    next: "",
  },
  "9a": {
    text:
      "All your efforts are in vain, little one. Aquilae will be the first to fall. Your father is doomed - and you shall live just long enough to see him perish!",
    type: "story",
    next: "10",
  },
  "9b": {
    text:
      "Foolish wretch - your tribe is lost in the seas of time! I may not have been able to best their strength, but now they are somewhere their meagre intellect will not save them. Do you truly think one of you can defeat me? After all your people joined as one, failed?",
    type: "story",
    next: "10",
  },
  "9c": {
    text:
      "You dare to disturb the dread Valderak? For what end? To thwart me in my plans? Foolish dolt - you cannot defeat me! All magic is mine! All magic flows through me!",
    type: "story",
    next: "10",
  },
  "9d": {
    text:
      "Wait. I know you. Didn't you break into my tower before? Yes! you're the one who stole my record collection! You took all my precious, priceless Bob Dylan records!",
    type: "story",
    next: "10",
  },
  "10": {
    text: "With a screech of disgust he conjures his Poison Blade, and with one final curse on the Four Kingdoms, launches himself at you. Battle is joined.",
    type: "story",
    next: "battle3",
  },
  "11a": {
    text:
      "You return to the Kingdom of Aquilae to find the ravages of the dread Arch-Wizard fading from the land. Your father has been restored to health. With the death of his twin brother Valderak, peace now reigns... for about a fortnight until your evil twin sister escapes...",
    type: "story",
    next: "title",
  },
  "11b": {
    text:
      "In your hand you hold the Dispelling Arch, and returning to the Realm of Harthingfjord, you use it to pluck your tribe from the rivers of time. They are safe, but the Arch demands a sacrifice - you find yourself lost in time and space.",
    type: "story",
    next: "title",
  },
  "11c": {
    text:
      "In your hands the great tome Mallifax belches, swollen with the stolen magics of Valderak. But returning to Fizzlesnip, you find it in disarray. You have done your job too well - all magic has been drained from the Four Kingdoms and beyond. The world is saved but Zazzerpan, you're going to have do what your father's always said. Get a real job.",
    type: "story",
    next: "title",
  },
  "11d": {
    text:
      "You make it through the swamp with your sack of stolen artefacts. Resting for the night you look at your swag. Surely it wouldn't hurt to try on the Ring of Destruction? And maybe the Crown of Pain would compliment it... and the Cloak of Daggers too. Your team-mates raise concerns, but you wave them away, accidentally obliterating them. Your hands course with power. The dark reign of Yolo the Magnificent has begun.",
    type: "story",
    next: "title",
  },
  "Game Over": {
    text:
      "All your valour, all your bravery, was for naught. You have been vanquished. It is a dark day for the Four Kingdoms as its greatest champions lie defeated. There will be many more dark days ahead, for now nothing stands in the way of Valderak's final victory. All is lost.",
    type: "story",
  },
  victory: {
    text:
      "With a blood-curdling scream, the magics holding the Arch-Wizard together are sundered for good. In a great rush of cold green fire, the body falls, nothing more than a few rags and bones. The dark tower begins to shudder beneath your feet. Without Valderak to maintain it, it is beginning to sink into the swamp. You fly for the exit, escaping just in time to see the sharp roof sink beneath the waters. The stain on the landscape, the blight on the Four Kingdoms, Valderak the Arch-Wizard is no more.",
    type: "story",
    next: "",
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
  },
};
