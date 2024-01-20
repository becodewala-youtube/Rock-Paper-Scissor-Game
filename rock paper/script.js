const choices = document.querySelectorAll('.choices button');
const result = document.querySelector('.result p');

let playerChoice;
let computerChoice;

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame() {
  playerChoice = this.id;
  computerChoice = getComputerChoice();
  const winner = getWinner();
  result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner() {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
             playerChoice === 'paper' && computerChoice === 'rock' ||
             playerChoice === 'scissors' && computerChoice === 'paper') {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
