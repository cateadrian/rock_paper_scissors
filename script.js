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
            } else if (computerChoice == "paper"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
            } else if (computerChoice == "scissor"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
            };
            break;
        case "paper":
            if (computerChoice == "rock"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
            } else if (computerChoice == "paper"){
                results.textContent = "Its a tie!";
            } else if (computerChoice == "scissor"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
            };
            break;
        case "scissor":
            if (computerChoice == "rock"){
                results.textContent = `You lose ${computerChoice} beats ${userChoice}.`;
            } else if (computerChoice == "paper"){
                results.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
            } else if (computerChoice == "scissor"){
                results.textContent = "Its a tie!";
            };
            break;
    };
}

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(event){
    let target = event.target;

    switch(target.id){
        case "rockButton":
            playRound("rock", getComputerChoice());
            break;
        case "paperButton":
            playRound("paper", getComputerChoice());
            break;
        case "scissorButton":
            playRound("scissor", getComputerChoice());
            break;
    };
});
