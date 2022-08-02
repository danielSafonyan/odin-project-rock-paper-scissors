const OPTIONS = ['rock', 'paper', 'scissors']

function getComputeChoice() {
    randomNum = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[randomNum];
}

function getUserChoice() {
    while(true) {
        userChoice = prompt("Chose Rock, Paper or Scissors", "scissors");
        userChoice = userChoice.toLowerCase();
        if (OPTIONS.includes(userChoice)) {
            return userChoice;
        } else {
            alert("Check your spelling. Available options: Rock, Paper, Scissors");
        }
    }
}

function playRound() {
    computerChoice = getComputeChoice();
    userChoice = getUserChoice()

    if (computerChoice == userChoice) {
        alert(`Computer has chosen ${computerChoice}. You have chosen ${userChoice}. It's a draw.`)
    } else if (computerChoice == 'paper' && userChoice == 'rock') {
        alert(`Computer has chosen ${computerChoice}. You have chosen ${userChoice}. Computer wins.`)
    } else if (computerChoice == 'scissors' && userChoice == 'paper') {
        alert(`Computer has chosen ${computerChoice}. You have chosen ${userChoice}. Computer wins.`)
    } else if (computerChoice == 'rock' && userChoice == 'scissors') {
        alert(`Computer has chosen ${computerChoice}. You have chosen ${userChoice}. Computer wins.`)
    } else {
        alert(`Computer has chosen ${computerChoice}. You have chosen ${userChoice}. You win.`)
    }
}

for (let i = 0; i < 10; i++) {
    playRound()
}
