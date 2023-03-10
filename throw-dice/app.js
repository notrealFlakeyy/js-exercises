// Generate a random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1;

// Create a new image element
let diceImage = document.createElement("img");

if (diceRoll == 1) {
    diceImage.src = "./images/1.png"
} else if (diceRoll == 2) {
    diceImage.src = "./images/2.png"
} else if (diceRoll.valueOf == 3) {
    diceImage.src = "./images/3.png"
} else if (diceRoll.valueOf == 4) {
    diceImage.src = "./images/4.png"
} else if (diceRoll.valueOf == 5) {
    diceImage.src = "./images/5.png"
} else if (diceRoll.valueOf == 6)
    diceImage.src = "./images/6.png"


// Add the image element to the dice div
document.getElementById("dice").appendChild(diceImage);

console.log(diceRoll);