# Greetings Heroes

[View Live Project Here](###)

**Greetings Heroes** is an application which allows users to play a fun interactive role playing game.

## User Stories

- As a user I should be able to start, pause, and stop the game at will [Feature](#StartStopPause)
- As a user I should be able to choose whether to attack, use a spell, or use an item during each turn [Feature](#ChooseAction)
- As a user I should be able to inspect both my remaining health and magic points, as well as what items I have available [Feature](#HUD)
- As a user I should be able to see read the narrative at my own pace and advance it when I am ready [Feature](AdvanceStory)
- As a user I should be able to choose my character from a list of four at the beginning of the game [Feature](CharacterSelect)
- As a user I should be able to inspect the attributes of each available character [Feature](InspectCharacter)
- As a user I should receive feedback when I win a battle, complete the game, or fail [Feature](GameResult)
- As a user I should be able to progress to three separate battles in order to win the game [Feature](Game)
- As a user I should be able to read story narrative before and after each battle [Feature](Story)

## Features

### StartStopPause

This should allow the user to pause the game at any point, as well as start the game if the game is not already running, and to stop the game if the game is already running.

### ChooseAction

During each turn of a battle the user should be able to choose from a predetermined list of actions they can choose to take, for example "attack", "use magic", or "use item"

### HUD

During battles the users should clearly be able to see relevant information regarding their characters status, including health points and magic points

### AdvanceStory

During exposition of story, the story should be displayed in small blocks at a time rather than in one large block. The user should be able to choose what speed the next block appears by means of a keypress

### CharacterSelect

At the start of each game the user should be presented with a choice of four characters with different strengths and weaknesses to choose from. Once selected, this choice will remain in effect until the game ends

### InspectCharacter

During the character selection process the user should be able to inspect the characters stats to decide which strengths and weaknesses to favour

### GameResult

When the game ends the user should see either a positive or negative message depending on whether they succeeded or failed. Additionally they should see feedback each time they emerge from a battle victorious

### Game

The game proper should consist of a linear path that the character is set on, interspersing exposition of "story blocks" in between battles. There should be a total of three battles. If the player emerges victorious from the third and final battle, they win the game, and if they are defeated at any point they lose

### Story

Story blocks should appear at the start of the game, after the first battle, after the second battle, and after the final battle. They should be displayed on a separate screen, for example a modal to distinguish between action (battles) and exposition (story)
