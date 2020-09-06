import { preferences } from "./preferences.js";
/**
 * Plays Audio In the Browser.
 *
 * This function takes one argument - the cue name of the track to be played. The cue should exist in the assets/audio/ directory and be in .mp3 format
 *
 * @param {string}   string      The audio cue to be played, formatted as .mp3
 *
 */
export const audio = function (cue) {
  let currentlyPlaying = document.querySelector("audio");
  if (currentlyPlaying) {
    currentlyPlaying.remove();
  }
  let newTrack = document.createElement("audio");
  newTrack.classList.add("audio");
  newTrack.loop = true;
  newTrack.src = `assets/audio/${cue}.mp3`;
  newTrack.play();
  document.body.appendChild(newTrack);
};

const soundIcon = document.getElementById("toggle-sound");

export const toggleSound = function () {
  const audioElement = document.querySelector("audio");
  if (preferences.volumeOn) {
    audioElement.muted = true;
    preferences.volumeOn = false;
    console.dir(audioElement);
  } else {
    audioElement.muted = false;
    preferences.volumeOn = true;
    console.dir(audioElement);
  }
};
