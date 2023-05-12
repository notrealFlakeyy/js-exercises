// Generate a random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1;

// Create a new image element
let diceResult = document.createElement("p");

if (diceRoll == 1) {
    diceResult.innerText = "1"
} else if (diceRoll == 2) {
    diceResult.innerText = "2"
} else if (diceRoll == 3) {
    diceResult.innerText = "3"
} else if (diceRoll == 4) {
    diceResult.innerText = "4"
} else if (diceRoll == 5) {
    diceResult.innerText = "5"
} else if (diceRoll == 6)
    diceResult.innerText = "6"


// Add the image element to the dice div
document.getElementById("dice").appendChild(diceResult);

console.log(diceRoll);