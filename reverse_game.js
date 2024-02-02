"use strict";

let min = 1;
let max = 100;
let currentGuess;
let guessList;

window.addEventListener("load", start);

function start() {
    console.log("Javascript running.");
    guessList = document.querySelector(".guesslist");
    document.querySelector("#startButton").addEventListener("click", startGuessing);
    document.querySelector("#resetButton").addEventListener("click", resetGame);
    document.querySelector("#too-low-btn").addEventListener("click", guessIsTooLow);
    document.querySelector("#correct-btn").addEventListener("click", guessIsCorrect);
    document.querySelector("#too-high-btn").addEventListener("click", guessIsTooHigh);

    document.querySelector("#player-action").style.display = "none";
    document.querySelector("#resetButton").style.display = "none";
}

function startGuessing() {
    currentGuess = makeInitialGuess();
    updateGuessList(`Is it ${currentGuess}?`);
    document.querySelector("#player-action").style.display = "block";
    document.querySelector("#startButton").style.display = "none";
}
//Binary search algorithm
function makeInitialGuess() {
    return Math.floor((min + max) / 2);
}

function updateGuessList(message) {
    guessList.innerHTML = message;
}

function guessIsCorrect() {
    updateGuessList(`M'kay! Your number is ${currentGuess}!`);
    document.querySelector("#player-action").style.display = "none";
    document.querySelector("#resetButton").style.display = "block";
}

function guessIsTooHigh() {
    max = currentGuess - 1;
    currentGuess = makeInitialGuess();
    updateGuessList(`Is it ${currentGuess}?`);
}

function guessIsTooLow() {
    min = currentGuess + 1;
    currentGuess = makeInitialGuess();
    updateGuessList(`Is it ${currentGuess}?`);
}
//reset everything back to the beginning including min and max
function resetGame() {
    min = 1;
    max = 100;
    document.querySelector("#startButton").style.display = "block";
    document.querySelector("#player-action").style.display = "none";
    document.querySelector("#resetButton").style.display = "none";
    guessList.innerHTML = "";
}
