let roundNum = 0;
let userScore = 0;
let computerScore = 0;
//
const rock = {
    repr: 'rock',
    displayRepr: '👊🏻'
}

const paper = {
    repr: 'paper',
    displayRepr: '✋🏻'
}

const scissors = {
    repr: 'scissors',
    displayRepr: '✌🏻'
}

const OPTIONS = [rock, paper, scissors];

function getComputeChoice() {
    randomNum = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[randomNum];
}

function getUserChoice(event) {
    for (let i = 0; i < OPTIONS.length; i++) {
        if (OPTIONS[i].displayRepr === event.target.innerText) {
            return OPTIONS[i]
        };
        
    }
}

const choiceOptions = document.querySelectorAll('.choice-option');
choiceOptions.forEach(addEvent);

function addEvent(choice) {
    choice.addEventListener('click', playRound)
}

function determineWinner(userChoice, computerChoice) {
    let message = "It's a draw.";
    console.log(userChoice, computerChoice)
    if (computerChoice == userChoice) {
        message = "It's a draw.";
    } else if (computerChoice == 'paper' && userChoice == 'rock') {
        message = "Computer wins."
    } else if (computerChoice == 'scissors' && userChoice == 'paper') {
        message = "Computer wins."
    } else if (computerChoice == 'rock' && userChoice == 'scissors') {
        message = "Computer wins."
    } else {
        message = "You win.";
    }
    return message;
}


function playRound(event) {
    roundNum++
    let roundCounter = document.querySelector('.round');
    roundCounter.innerText = roundNum;

    let userChoice = getUserChoice(event)
    let userDisplayedChoice = document.querySelector('.choice.user');
    userDisplayedChoice.innerText = userChoice.displayRepr;

    let computerChoice = getComputeChoice();
    let computerDisplayedChoice = document.querySelector('.choice.computer');
    computerDisplayedChoice.innerText = computerChoice.displayRepr;

    let resultMessagee = determineWinner(userChoice.repr, computerChoice.repr);
    let displayedResultMessage = document.querySelector('section > span');
    displayedResultMessage.innerText = resultMessagee;

    if (resultMessagee === "You win.") {
        userScore++;
        displayedUserScore = document.querySelector(".score.user");
        displayedUserScore.innerText = userScore;
    }
    if (resultMessagee === "Computer wins.") {
        computerScore++;
        displayedComputerrScore = document.querySelector(".score.computer");
        displayedComputerrScore.innerText = computerScore;
    }


    if (userScore === 5 || computerScore === 5) {
        let startOver = prompt("Game over. Do you want to play again? Yes/No.", "Yes")
        startOver = startOver.toLowerCase()
        if (startOver === 'yes') {
            roundNum = 0;
            roundCounter.innerText = roundNum;

            userScore = 0;
            displayedUserScore.innerText = userScore;

            computerScore = 0;
            displayedComputerrScore.innerText = computerScore;
            
            displayedResultMessage.innerText = 'Start a game by chosing rock, paper or scissors';
        } else {
            let html = document.querySelector("body");
            let footer = document.querySelector("footer");
            html.removeChild(footer);
        }
        
    }
}