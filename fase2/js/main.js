// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const compuerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[compuerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
              ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : playerOne === "paper" && computer === "scissors"
                ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                  ? `Player: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                  : `Player: ${playerOne}\nComputer: ${computer}\nPlayer wins!`;
        alert(result);
        playGame = confirm("Play Again");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper, or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time!");
      break;
    }
  }
} else {
  alert("Ok, maybe next time!");
}
