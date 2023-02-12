let choiceArr = ["rock", "paper", "scissor"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = choiceArr[Math.floor(Math.random() * 3)];
    return computerChoice;
}
function getPlayerChoice() {
    let playerChoice = prompt("What do you choose? Rock, Paper, or Scissor?");
    return playerChoice.toLowerCase();
}


function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a DRAW, you both picked Rock!";
        }
        else if(computerSelection == "paper"){
            computerScore += 1;
            return "You Lose! Paper beats Rock!";
        }
        else if(computerSelection == "scissor"){
            playerScore += 1
            return "You Win! Rock beats Scissor!";
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerScore += 1
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection == "paper"){
            return "Its a DRAW! You both picked paper!";
        }
        else if(computerSelection == "scissor"){
            computerScore += 1;
            return "You Lose! Scissor beats Paper";
        }
    }
    else if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissor";
        }
        else if(computerSelection == "paper"){
            playerScore += 1
            return "You Win! Scissor beats paper!";
        }
        else if(computerSelection == "scissor"){
            return "Its a DRAW! You both picked scissor";
        }
    }
    else {
        console.log("Please enter a valid choice");
    }
}
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The score is... player: ${playerScore}, computer: ${computerScore}`);
    }
    if (playerScore < computerScore){
        console.log("wow... you lost to a computer");
    }
    else if (playerScore > computerScore){
        console.log("Yay you won!");
    }
    else {
        console.log("Wow... its a draw.");
    }

}

game();