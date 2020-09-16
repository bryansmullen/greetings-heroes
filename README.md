# Greetings Heroes

[View the live project here](https://bryansmullen.github.io/greetings-heroes/)

![Banner Image](wireframes/design-assets/../mockups/greetings-heroes-mockup.jpg)

**Greetings Heroes** is an application which allows users to play a fun interactive role playing game.

## Contents

- [Greetings Heroes](#greetings-heroes)

  - [Contents](#contents)
  - [Project Background](#project-background)
  - [UX Design](#ux-design)
    - [Goals](#goals)
    - [User Stories](#user-stories)
  - [Featuresgit](#featuresgit)
    - [StartStopPause](#startstoppause)
    - [ChooseAction](#chooseaction)
    - [HUD](#hud)
    - [AdvanceStory](#advancestory)
    - [CharacterSelect](#characterselect)
    - [InspectCharacter](#inspectcharacter)
    - [GameResult](#gameresult)
    - [Game](#game)
    - [Story](#story)
    - [Wireframes](#wireframes)
    - [Color Palette](#color-palette)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Iconography](#iconography)
    - [Prototype](#prototype)
  - [Credits](#credits)

    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

## Project Background

This project is being completed as part of a Full Stack Developer Diploma award. This forms the basis for the developer's second milestone project. As such it will be completed within a set of guidelines as to which technologies to use.

While the core focus of the project is to be submitted as the summative assessment for the student developers course, it is also hoped that the resource itself, and the brand created for it can be developed over time into something that can be of value to the wider community.

[BACK TO CONTENTS](#Contents)

---

## UX Design

### Goals

Design phase goals:

- Identify user profile
- Generate user stories
- Create wireframe
- Develop a brand identity
- Create high fidelity prototype

The website is conceived as a resource for to extend the existing brand of Greetings Heroes. Typically Greetings Heroes is a fun, interactive, live, role-playing story-telling workshop where children are encouraged to explore their creative writing skills. However this resource is hoped to provide an additional opportunity to be incorprated into this workflow which would allow children to play with their created characters after their story is completed.

Therefore the user profile for this application is children between the ages of 9 and 14, who have completed a series of Greetings Heroes workshops already and have created characters and a narrative during these workshops.

### User Stories

- As a user I should be able to start, pause, and stop the game at will
- As a user I should be able to choose whether to attack, use a spell, or use an item during each turn
- As a user I should be able to inspect both my remaining health and magic points, as well as what items I have available
- As a user I should be able to see read the narrative at my own pace and advance it when I am ready
- As a user I should be able to choose my character from a list of four at the beginning of the game
- As a user I should be able to inspect the attributes of each available character
- As a user I should receive feedback when I win a battle, complete the game, or fail
- As a user I should be able to progress to three separate battles in order to win the game
- As a user I should be able to read story narrative before and after each battle
- As a user I should be able to read instructions about how to play the game

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

### Wireframes

Wireframes are generated to accomodate the majority of user stories. Still to be implemented are #StartStopPause, #AdvanceStory, #InspectCharacter.

Once the user stories are completed, [wireframes](https://xd.adobe.com/view/c7beac65-48a1-4dbd-a945-279ed1bd52ec-92ed/) are generated to form the layout of the website which allow the target user to achieve their goals. The wireframes are generated to accommodate three different screen sizes in a responsive layout:

- MacBook Pro (2019)
- iPad Pro (12.9")
- iPhone X

### Color Palette

Next, the brand is designed. This involves the creation of a logo, compiling of a [color palette](https://color.adobe.com/Greetings-Heroes-color-theme-15326853), and selection of appropriate [font choices](https://use.typekit.net/twt4nji.css).

The colors palette chosen for the brand consist mainly of deep reds. The reds represent the the excitement, danger, and courage that are qualities that a hero must possess. Additionally purple is used as a highlight colour, representing magic and imagination.

Initial hues were selected based on these representations of the brand, and then fine tuned using [Adobe Color Picker](https://color.adobe.com/create) to select a colour palette that would complement itself, and to ensure accessibility for persons with difficulty discerning colours.

### Typography

[Gothicus Roman](https://fonts.adobe.com/fonts/gothicus) is selected as the primary typeface for the major headings because of its ancient, gothic qualities which lend itself well to fantasy. [Courier Prime](https://fonts.adobe.com/fonts/courier-prime) is chosen to complement it through the body text, because of its clarity and legibility, but additionally because Courier is the standard font for screenplays, and since the nature of this project is that children would have created this world themselves, that they would experience seeing their story typed out on the screen in front of them.

### Imagery

[Freepik](http://www.freepik.com) was used for the main title image. As such the following code must be included to conform with their free licensing agreement. `<a href="">Designed by freepic.diller / Freepik</a>`

### Iconography

[Material Io](https://material.io/resources/icons) was used to source basic icons for sound on/off, information, and exit application. Additionally icons for LinkedIn and Github were sourced from their respective official websites.

### Prototype

With these decisions in place, a high fidelity [prototype](https://xd.adobe.com/view/b053e336-3558-410b-bda6-40c7af002eba-e500/) is created drawing together all strands of the design to show what the developed project will look like. Decisions such as placement of content, sizing of images, application of colour and typography palettes are taken at this point.

## Features

In this section, I will mention all of the languages, frameworks, libraries, and any other tools that I have used to construct this project.

### Features Left To implemented

- There is potential to increase the complexity of the battle sequences by adding a third 'special' command for each character.
- The items dropped by both enemy 1 and enemy 2 could influence the final battle
- Complexity of the battles could be scaled up by interaction of additional attributes - defence, magic defence, luck etc

## Technologies Used

In this section, I will mention all of the languages, frameworks, libraries, and any other tools that I have used to construct this project.

### Languages

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) is used to render the content of the website.
- [CSS](https://www.w3.org/Style/CSS/#specs) is used to style the content of the website.
- [SCSS](https://sass-lang.com/documentation) is used to generate the CSS, by means of a SASS compiler.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) is used to create interactivity with the website.

### Other Tools

- [Adobe XD](https://www.adobe.com/ie/products/xd.html) is used to construct both wireframes and prototypes.
- [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html) and [Adobe Illustrator](https://www.adobe.com/ie/products/illustrator.html) are used to create design assets.
- [Visual Studio Code](https://code.visualstudio.com/) is the main IDE used by the developer for this project.
- [Adobe Fonts](https://fonts.adobe.com/) is used to select and serve the fonts used in this project.
- [Adobe Color](https://www.adobe.com/ie/products/color.html) is used to select the colour palette used in this project.
- [Git](https://git-scm.com/) is used for version control in this project. Throughout the project, a Develop branch has been added to the project to allow work to continue on the website without breaking the functioning version on the Master branch.
- [Github](https://github.com/) is used as a remote repository for the site, as well as for deployment of the final version.
- [Dorico](https://new.steinberg.net/dorico/) is used to generate the initial MIDI data from the compositions.
- [Studio One](https://www.presonus.com/products/Studio-One) is used to generate the final audio files for the score.

[BACK TO CONTENTS](#Contents)

## Testing

### Validation

All HTML and CSS in this project is validated by using the W3C Markup Validation Service and the W3C CSS Validation Service.

HTML Validated without errors on 16 Sept 2020

CSS Validated without errors on 16 Sept 2020

### Linting

All javascript was passed through the ESLint plugin for VSCode to ensure compliance with best practices

### Modelled Device Testing

To test the layout on multiple devices, Google Chrome DevTools is used to simulate the size of multiple devices and screen ratios. Screen responsiveness has been noted to ensure the correct screen ratio was delivered, links are tested by clicking through, images are checked to ensure they displayed correctly on all devices, and the website as a whole is checked to ensure everything renders as expected. Any faults or issues were noted in the Device Testing Chart

The following device dimensions are tested:

- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5/SE
- iPhone 6,7,8
- iPhone 6,7,8 Plus
- iPhone X
- iPad
- iPad Pro
- Laptop 1024px
- Laptop L 1440px
- 4k -2560px

### Automated Cross Browser Testing

To test the layout on multiple browsers, browserstack is used to screenshot how the layout will render on several different versions of major browsers, on the more up-to-date operating systems. These screenshots are then inspected and the results are once again documented in the Browser Automated Testing Chart. The following browsers are tested:

- Mac OSX Catalina Safari 71
- Mac OSX Catalina Firefox 80
- Mac OSX Catalina Chrome 85
- Mac OSX Catalina Opera 70
- Mac OSX Catalina Edge 85
- Windows 10 Edge 85
- Windows 10 IE 11
- Windows 10 Firefox 80
- Windows 10 Chrome 85

### Manual Cross Browser Testing

To complement the above results the website is also tested manually on up-to-date browsers available on the developer's machine. The results are once again documented in the Browser Manual Testing Chart

The following browsers are tested:

- Mac OS Catalina Brave Version 1.8.96
- Mac OS Catalina Safari Firefox 76.0.1 (64-bit)
- iOS 13.3.1 iPad Pro Safari
- iOS 13.4.1 iPhone Safari
- Windows 10 Microsoft Edge 44.18362.387.0
- Windows 10 Google Chrome 81.0.4044.138 (Official Build) (64 Bit)

### Testing Insights/Known Issues

- Some unexpected results re default rendering of progress bars on firefox and safari
- Safari has unexpected results for for margins/padding on character screen
- Internet Explorer, as expected, breaks everything
- Some inconsistent font size issues on tablet
- Mute button only affects bg music, not sfx

## Deployment

This project is deployed on Github Pages, which can be accessed at [Greetings Heroes Github Repo](https://github.com/bryansmullen/greetings-heroes) or [Greetings Heroes Deployed Version](https://bryansmullen.github.io/greetings-heroes/). The deployment is linked to the Master Branch of the repo, and will automatically update the deployment when any changes are committed to this branch of the remote repository.

### Deploying on Github Pages

The following procedure was followed to deploy on Github Pages.

1. Navigate to the [Github Repo](https://github.com/bryansmullen/greetings-heroes)
2. Select the **Settings** tab
3. Scroll down to the **Github Pages** section
4. Under the **Source** dropdown, select **Master Branch**
5. Under **Theme,** click **Change Theme** and then click the **Select Theme** button

### Differences between deployed version and development version

For this project feature branches were used for each new feature, which were merged back into the master branch using pull requests. At the time of publishing outstanding feature branches are pruned.

The process for updating the project in future will be to create a clone from the master branch and make all necessary changes locally. Once ready to commit one should pull down any new changes from the master branch again, ensure there are no merge conflicts, and then create a pull request which will be approved or rejected in due course.

### Cloning a local version

To clone this project locally, complete the following steps:

1. Open a new Command-Line Editor on your computer
2. Navigate to the folder you wish to create the local copy of this repo using the `cd` command. e.g. `cd my_directory`
3. Clone the remote repository using the git clone command. `git clone https://github.com/bryansmullen/greetings-heroes`
4. Open the newly created **greetings-heroes** directory in your favourite IDE.

[BACK TO CONTENTS](#Contents)

## Credits

### Content

- Game developed and produced by [Bryan Mullen](https://www.linkedin.com/in/bryansmullen/).
- All narrative content copyright of [Graham Tugwell](https://www.linkedin.com/in/graham-tugwell-21597234/), [Dave Rudden](http://daverudden.com//), and Bryan Mullen unless otherwise stated. All rights reserved.
- Music composed & arranged by [Carmel Whelan](https://www.linkedin.com/in/carmel-whelan-704b0b4b/?originalSubdomain=ie). Recordings produced by Bryan Mullen and Carmel Whelan.
- Character Artwork designed by [Dearbháil Clarke](https://www.linkedin.com/in/dearbh%C3%A1il-clarke-113279101/).

### Media

Main title image sourced from [Freepik](http://www.freepik.com).
Attack and heal SFX licenced from [Envato](https://envato.com/)

### Acknowledgements

I received inspiration for this project from two games from my childhood:

- [Final Fantasy VII](https://en.wikipedia.org/wiki/Final_Fantasy_VII)
- [Indiana Jones and the Last Crusade](https://en.wikipedia.org/wiki/Indiana_Jones_and_the_Last_Crusade:_The_Graphic_Adventure)

Special thanks to Sammy, Scott, Kevin and all the Code Institute tutors for their continued guidance and support!

I received much advice, coaching and steering towards good development practice on this project from my Code Institute mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/).

[BACK TO TOP](#Greetings-Heroes)
