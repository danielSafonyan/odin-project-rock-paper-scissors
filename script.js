const OPTIONS = ['rock', 'paper', 'scissors']

function getComputeChoice() {
    randomNum = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[randomNum]
}

function getUserChoice() {
    while(true) {
        userChoice = prompt("Chose Rock, Paper or Scissors", "scissors");
        userChoice = userChoice.toLowerCase()
        if (OPTIONS.includes(userChoice)) {
            return userChoice
        } else {
            alert("Check your spelling. Available options: Rock, Paper, Scissors")
        }
    }
}

for (let i = 0; i <= 5; i++) {
    console.log(getUserChoice())
}
