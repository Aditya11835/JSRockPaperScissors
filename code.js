
function getComputerChoice(){
    let computerHand = Math.floor(Math.random()*3);
    switch(computerHand)
    {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function calculateRound(playerChoice, computerChoice)
{
    if(playerChoice === computerChoice)
    {
        return "Tie";
    }
    else{
        
    }
}

function playRound(pressedButton){
    let playerChoice = pressedButton;
    let computerChoice = getComputerChoice();
    let currentResult = calculateRound(playerChoice, computerChoice);
}

const inputButtonContainer = document.querySelector(".inputButtons");
inputButtonContainer.addEventListener("click", (e)=>{
    playRound(e.target.textContent);
});

let computerScore = 0;
let humanScore = 0;

