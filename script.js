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

function playRound(userChoice, computerChoice){
    let results = document.querySelector("#results");

    switch(userChoice){
        case "rock":
            if (computerChoice == "rock"){
                results.textContent = "Its a tie!";
                return "tie";
            } else if (computerChoice == "paper"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
                return "computer";
            } else if (computerChoice == "scissor"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
                return "user";
            };
        case "paper":
            if (computerChoice == "rock"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
                return "user";
            } else if (computerChoice == "paper"){
                results.textContent = "Its a tie!";
                return "tie";
            } else if (computerChoice == "scissor"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
                return "computer";
            };
        case "scissor":
            if (computerChoice == "rock"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
                return "computer";
            } else if (computerChoice == "paper"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
                return "user";
            } else if (computerChoice == "scissor"){
                results.textContent = "Its a tie!";
                return "tie";
            };
    };
}

let userScore = 0;
let computerScore = 0;
let winner;

let buttons = document.querySelector("#buttons");

let score = document.querySelector("#score");
score.textContent = `User: ${userScore} --- Computer: ${computerScore}`;

buttons.addEventListener("click", function(event){
    let target = event.target;

    switch(target.id){
        case "rockButton":
            winner = playRound("rock", getComputerChoice());
            break;
        case "paperButton":
            winner = playRound("paper", getComputerChoice());
            break;
        case "scissorButton":
            winner = playRound("scissor", getComputerChoice());
            break;
    };

    if (winner === "user"){
        userScore++;
    } else if(winner === "computer"){
        computerScore++;
    };

    score.textContent = `User: ${userScore} --- Computer: ${computerScore}`;
});



