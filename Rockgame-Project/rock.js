function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  const winner = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = winner;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a tie!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  }
  return "Computer wins!";
}