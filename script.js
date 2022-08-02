const OPTIONS = ['rock', 'paper', 'scissors']

function getComputeChoice() {
    randomNum = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[randomNum]
}

for (let i = 1; i <= 30; i++) {
    console.log(getComputeChoice());
  }
