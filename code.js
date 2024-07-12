
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
        return "Nobody";
    }
    else{
        switch(playerChoice)
        {
            case "Rock":
                switch(computerChoice)
                {
                    case "Paper": computerScore++; return "Computer";
                    case "Scissors": humanScore++; return "Human";
                }
            case "Paper":
                switch(computerChoice)
                {
                    case "Rock": humanScore++; return "Human";
                    case "Scissors": computerScore++; return "Computer";
                }
            case "Scissors":
                switch(computerChoice)
                {
                    case "Rock": computerScore++; return "Computer";
                    case "Paper": humanScore++; return "Human";
                }
        }
        
    }
}

function playRound(pressedButton){

    let playerChoice = pressedButton;
    let computerChoice = getComputerChoice();
    let currentResult = calculateRound(playerChoice, computerChoice);

    const currentRoundResultDisplay = document.querySelector("#currentRoundResult");
    currentRoundResultDisplay.textContent = `${currentResult} won current round!`;

    const humanScoreTabContainer = document.querySelector("#hS");
    const computerScoreTabContainer = document.querySelector("#cS");
    humanScoreTabContainer.textContent = humanScore;
    computerScoreTabContainer.textContent = computerScore;
    if(humanScore === 5 || computerScore === 5)
        {
            controller.abort();
            if(humanScore > computerScore)
            {
                currentRoundResultDisplay.textContent = `Game Over! Player won!`;
            }
            else if(computerScore===humanScore)
            {
                currentRoundResultDisplay.textContent = `Game Over! Draw!`;
            }
            else{
                currentRoundResultDisplay.textContent = `Game Over! Computer won!`;
            }
        }
        

}

const inputButtonContainer = document.querySelector(".inputButtons");
const controller = new AbortController();
inputButtonContainer.addEventListener("click", (e)=>{
    playRound(e.target.textContent);
}, {signal: controller.signal});

let computerScore = 0;
let humanScore = 0;

