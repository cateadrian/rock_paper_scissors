function getComputerChoice(){
    let randomNumber = Math.random().toFixed(2);
    const oneThird = (1/3).toFixed(2);
    const twoThirds = (2/3).toFixed(2);

    if(randomNumber >= 0 && randomNumber < oneThird){
        return "rock";
    } else if(randomNumber >= oneThird && randomNumber < twoThirds){
        return "paper";
    } else {
        return "scissor";
    };
}

function getHumanChoice(){
    const humanChoice = prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();

    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor"){
        return humanChoice;
    } else {
        console.log("Invalid Choice");
    };
}

let humanScore = 0;
let computerScore = 0;