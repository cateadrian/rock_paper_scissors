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

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    switch(humanChoice){
        case "rock":
            if (computerChoice == "rock"){
                console.log("Its a tie!");
                return;
            } else if (computerChoice == "paper"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                return "computer";
            } else if (computerChoice == "scissor"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                return "human";
            };
        case "paper":
            if (computerChoice == "rock"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                return "human";
            } else if (computerChoice == "paper"){
                console.log("Its a tie!");
                return;
            } else if (computerChoice == "scissor"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                return "computer";
            };
        case "scissor":
            if (computerChoice == "rock"){
                console.log(`You lose ${computerChoice} beats ${humanChoice}.`);
                return "computer";
            } else if (computerChoice == "paper"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                return "human";
            } else if (computerChoice == "scissor"){
                console.log("Its a tie!");
                return;
            };
    };
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let winner = playRound(getHumanChoice(), getComputerChoice());
        switch (winner){
            case "human":
                humanScore++;
                break;
            case "computer":
                humanScore++;
                break;
            case "computer":
                computerScore++;
                break;
            default:
                break;
        };
    };

    if(humanScore > computerScore){
        console.log("Congratulations! You win!");
        console.log(`Player score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (humanScore < computerScore){
        console.log("Sorry, you lose! Please play again.");
        console.log(`Player score: ${humanScore}.`);
        console.log(`Computer score: ${computerScore}`);
    } else {
        console.log("Its a tie!");
        console.log(`Player score: ${humanScore}.`);
        console.log(`Computer score: ${computerScore}`);
    };
}


