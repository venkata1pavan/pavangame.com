const choices = ["rock", "scissor", "paper"];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return choices[randomNumber - 1];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "scissor" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

const playButton = document.getElementById("play-button");
const player1ChoiceImg = document.getElementById("player1-choice");
const player2ChoiceImg = document.getElementById("player2-choice");
const resultText = document.getElementById("result");

playButton.addEventListener("click", function () {
    const player1Choice = choices[Math.floor(Math.random() * 3)];
    const player2Choice = getComputerChoice();

    player1ChoiceImg.setAttribute("src", `${player1Choice}.png`);
    player2ChoiceImg.setAttribute("src", `${player2Choice}.png`);

    const result = determineWinner(player1Choice, player2Choice);
    resultText.textContent = result;
});
