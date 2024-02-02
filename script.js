"use strict";

let guess = "";
let generatedNumber = "";
let numberOfGuesses = 0;
window.addEventListener("load", start);

function start() {
    console.log("Javascript running.")
generatedNumber = generateRandomNumber();
document.querySelector("form").addEventListener("submit", receiveUserInput);
document.querySelector("#resetButton").addEventListener("click", resetGame);
document.querySelector("#resetButton").style.display = "none";

}
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;

}
function receiveUserInput(event) {
    event.preventDefault();

    const form = event.target;
    const value = form.guess.valueAsNumber;
    console.log(value);
    checkGuess(value);
    form.guess.value = "";
}
function checkGuess(guess) {
    if(guess === generatedNumber) {
        guessIsCorrect(guess);
    } else if (guess > generatedNumber) {
        guessIsTooHigh(guess);
    } else {
        guessIsTooLow(guess);
    }
}
function guessIsCorrect(guess) {
    console.log("Correct");
    const list = document.querySelector(".guesslist");
    const html = `<li>You guessed ${guess} - Correct! Congratulations.</li>`;
    list.insertAdjacentHTML("beforeend", html);
    const reset = document.querySelector("#resetButton");
    reset.style.display = "flex";
    document.querySelector("form").style.display = "none";    

}
function guessIsTooHigh(guess) {
    console.log("Too high");
    const list = document.querySelector(".guesslist");
    const html = `<li>You guessed ${guess} - that was too high! Try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}
function guessIsTooLow(guess) {
    const list = document.querySelector(".guesslist");
    const html = `<li>You guessed ${guess} - that was too low! Try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}
// function resetGame() {
//     document.querySelector("form").style.display = "block";    
//     document.querySelector(".guesslist").innerHTML = "";
//     document.querySelector("#resetButton").style.display = "none";
//     generatedNumber = generateRandomNumber();
// }
function resetGame() {

    const inputField = document.querySelector("#guess")
    inputField.value = "";

    document.querySelector(".guesslist").innerHTML = "";
    document.querySelector("#resetButton").style.display = "none";
    document.querySelector("form").style.display = "block";
    generatedNumber = generateRandomNumber();
    document.querySelector("form").classList.add("row g-3")
}
