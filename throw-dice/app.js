// Generate a random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1;

// Create a new image element
let diceImage = document.createElement("img");

if (diceRoll == 1) {
    diceImage.src = "./images/dice1.png"
} else if (diceRoll == 2) {
    diceImage.src = "./images/dice2.png"
} else if (diceRoll.valueOf == 3) {
    diceImage.src = "./images/dice3.png"
} else if (diceRoll.valueOf == 4) {
    diceImage.src = "./images/dice4.png"
} else if (diceRoll.valueOf == 5) {
    diceImage.src = "./images/dice5.png"
} else if (diceRoll.valueOf == 6)
    diceImage.src = "./images/dice6.png"


// Add the image element to the dice div
document.getElementById("dice").appendChild(diceImage);

console.log(diceRoll);