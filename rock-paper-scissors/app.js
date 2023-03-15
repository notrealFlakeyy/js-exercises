// Listen for button clicks
document.getElementById('rock').addEventListener('click', playGame);
document.getElementById('paper').addEventListener('click', playGame);
document.getElementById('scissors').addEventListener('click', playGame);

function playGame(event) {
    // Get player's choice
    var playerChoice = event.target.id;

    // Get computer's choice
    var computerChoice = getComputerChoice();

    // Determine winner
    var result = determineWinner(playerChoice, computerChoice);

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
}

function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}