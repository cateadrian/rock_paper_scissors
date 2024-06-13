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

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            if (computerChoice == "rock"){
                console.log("Its a tie!");
            } else if (computerChoice == "paper"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
            } else if (computerChoice == "scissor"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
            };
            break;
        case "paper":
            if (computerChoice == "rock"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
            } else if (computerChoice == "paper"){
                console.log("Its a tie!");
            } else if (computerChoice == "scissor"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
            };
            break;
        case "scissor":
            if (computerChoice == "rock"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
            } else if (computerChoice == "paper"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
            } else if (computerChoice == "scissor"){
                console.log("Its a tie!");
            };
            break;
    };
}


