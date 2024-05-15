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

result = document.querySelector(".result");

function playRound(humanChoice, computerChoice) {
  if(humanScore==5 || computerScore==5){
    fs = document.createElement("p");
    fs.textContent = `Final Scores: \n 
    Human Score: ${humanScore}  Computer Score: ${computerScore}\n Reset Score`;
    result.appendChild(fs);
    humanScore=0;
    computerScore=0;
    // rock.remove();
    // paper.remove();
    // scissors.remove();


  }
  
  // console.log(
  //   `User choice: ${humanChoice}, Computer choice: ${computerChoice}`
  // );
  // span1 = document.createElement("span");
  // span1.textContent = humanChoice;
  // result.appendChild(span1);
  // span2 = document.createElement("span");
  // span2.textContent = computerChoice;
  // br=document.create('br');
  // result.appendChild(br);
  // result.appendChild(span2);

  input=document.createElement("p");
  input.textContent=`User Choice: ${humanChoice}    Computer Choice: ${computerChoice}`;
  result.appendChild(input);

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    p = document.createElement("p");
    p.textContent = "It's a tie";
    result.appendChild(p);
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    // hs = document.createElement("span");
    // hs.textContent = `Human Score:${humanScore}`;
    // cs = document.createElement("span");
    // cs.textContent = `Computer Score:${computerScore}`;
    scores=document.createElement("p");
    scores.textContent = `Human Score:${humanScore}   Computer Score:${computerScore}  `;
    result.appendChild(p1);
    // result.appendChild(hs);
    // result.appendChild(cs);
    result.appendChild(scores);
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    p = document.createElement("p");
    p.textContent = "Computer Wins";
    result.appendChild(p);
    computerScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    p = document.createElement("p");
    p.textContent = "Computer Wins";
    result.appendChild(p);
    computerScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    p = document.createElement("p");
    p.textContent = "Computer Wins";
    result.appendChild(p);
    computerScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    p = document.createElement("p");
    p.textContent = "User Wins";
    result.appendChild(p);
    humanScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    p = document.createElement("p");
    p.textContent = "User Wins";
    result.appendChild(p);
    humanScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    p = document.createElement("p");
    p.textContent = "User Wins";
    result.appendChild(p);
    humanScore++;
    p1 = document.createElement("p");
    p1.textContent = "Scores";
    hs = document.createElement("span");
    hs.textContent = `Human Score:${humanScore}`;
    cs = document.createElement("span");
    cs.textContent = `Computer Score:${computerScore}`;
    result.appendChild(p1);
    result.appendChild(hs);
    result.appendChild(cs);
  }
}

rock = document.querySelector(".rock");
paper = document.querySelector(".paper");
scissors = document.querySelector(".scissors");

// function playGame(){
    rock.addEventListener("click", () => {
      playRound("rock", getComputerChoice());
    });
    paper.addEventListener("click", () => {
      playRound("paper", getComputerChoice());
    });
    scissors.addEventListener("click", () => {
      playRound("scissors", getComputerChoice());
    });
  // }
  // while (humanScore < 5 && computerScore < 5) {
  //   playGame();
  // }
    





// function playGame() {
//   for (let index = 0; index < 5; index++) {
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//   }
//   console.log(`User score: ${humanScore}, computerScore: ${computerScore}`);
//   if(humanScore > computerScore) {
//     console.log("You beat computer");
//   }
//   else if(humanScore < computerScore){
//     console.log("Computer beat you");
//   }
//   else{
//     console.log("It's a tie.New Game??");
//     // playGame();
//   }
// }

// playGame();



// function pick(choice) {
//   // if(choice==null||undefined||NaN) alert("Please enter VALID INPUT");
//   if (choice == 1) {
//     return "rock";
//   } else if (choice == 2) {
//     return "paper";
//   } else if (choice == 3) {
//     return "scissors";
//   } else if (choice == 0) {
//     return "ExitGame";
//   } else {
//     return "Invalid Input";
//   }
// }
// function getComputerChoice() {
//   let randomNumber = Math.floor(Math.random() * 3 + 1);
//   // console.log(randomNumber);
//   return pick(randomNumber);
// }

// function getHumanChoice() {
//   let userChoice = parseInt(
//     prompt(
//       "Hit 1 for rock:\n Hit 2 for paper:\n Hit 3 for scissors \n Hit 0 to exit\n Please Enter your choice"
//     )
//   );
//   console.log(userChoice);
//   return pick(userChoice);
// }

// // function game(){
// //     let compChoice=computerChoice();
// //     let userChoice=humanChoice();
// //     let humanChoice=pick(userChoice);
// //     if(humanChoice=="0") return -1;
// //     let computerChoice=pick(compChoice);
// //
// //     return 0;

// // }

// // while(true){
// //     let val=game();
// //     if(val===-1) break;
// // }

// let humanScore = 0;
// let computerScore = 0; 

// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   computerChoice = computerChoice.toLowerCase();
//   console.log(
//     `User choice: ${humanChoice}, Computer choice: ${computerChoice}`
//   );
//   if (humanChoice == computerChoice) {
//     console.log("It's a tie");
//   } else if (humanChoice == "rock" && computerChoice == "paper") {
//     console.log("Computer wins");
//     computerScore++;
//   } else if (humanChoice == "paper" && computerChoice == "scissors") {
//     console.log("Computer wins");
//     computerScore++;
//   } else if (humanChoice == "scissors" && computerChoice == "rock") {
//     console.log("Computer wins");
//     computerScore++;
//   } else if (humanChoice == "paper" && computerChoice == "rock") {
//     console.log("User wins");
//     humanScore++;
//   } else if (humanChoice == "scissors" && computerChoice == "paper") {
//     console.log("User wins");
//     humanScore++;
//   } else if (humanChoice == "rock" && computerChoice == "scissors") {
//     console.log("User wins");
//     humanScore++;
//   }
// }

// function playGame() {
//   for (let index = 0; index < 5; index++) {
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice, computerChoice);
//   }
//   console.log(`User score: ${humanScore}, computerScore: ${computerScore}`);
//   if(humanScore > computerScore) {
//     console.log("You beat computer");
//   }
//   else if(humanScore < computerScore){
//     console.log("Computer beat you");
//   }
//   else{
//     console.log("It's a tie.New Game??");
//     // playGame();
//   }
// }

// playGame();