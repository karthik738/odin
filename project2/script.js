function pick(choice) {
  // if(choice==null||undefined||NaN) alert("Please enter VALID INPUT");
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice == 3) {
    return "scissors";
  } else if (choice == 0) {
    return "ExitGame";
  } else {
    return "Invalid Input";
  }
}
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  // console.log(randomNumber);
  return pick(randomNumber);
}

function getHumanChoice() {
  let userChoice = parseInt(
    prompt(
      "Hit 1 for rock:\n Hit 2 for paper:\n Hit 3 for scissors \n Hit 0 to exit\n Please Enter your choice"
    )
  );
  console.log(userChoice);
  return pick(userChoice);
}

// function game(){
//     let compChoice=computerChoice();
//     let userChoice=humanChoice();
//     let humanChoice=pick(userChoice);
//     if(humanChoice=="0") return -1;
//     let computerChoice=pick(compChoice);
//
//     return 0;

// }

// while(true){
//     let val=game();
//     if(val===-1) break;
// }

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  console.log(
    `User choice: ${humanChoice}, Computer choice: ${computerChoice}`
  );
  if (humanChoice == computerChoice) {
    console.log("It's a tie");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("User wins");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("User wins");
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("User wins");
    humanScore++;
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`User score: ${humanScore}, computerScore: ${computerScore}`);
  if(humanScore > computerScore) {
    console.log("You beat computer");
  }
  else if(humanScore < computerScore){
    console.log("Computer beat you");
  }
  else{
    console.log("It's a tie.New Game??");
    // playGame();
  }
}

playGame();