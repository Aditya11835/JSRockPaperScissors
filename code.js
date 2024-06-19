
function getComputerChoice(){
    let computerHand = Math.floor(Math.random()*3);
    switch(computerHand)
    {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(){
    let humanHand = prompt("Enter Rock, Papers, or Scissors", "Rock, Paper, or Scissors?");
    humanHand = humanHand.toUpperCase();
    switch(humanHand)
    {
        case "ROCK": return "Rock";
        case "PAPER": return "Paper";
        case "SCISSORS": return "Scissors";
        default: return "INVALID";
    }
}

function playSingleRound(){
    alert("Enter your choice.")
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if(humanChoice === computerChoice)
        {
            console.log("TIE!");
            console.log("No change in score.");
        }
    else if(humanChoice === "Rock")
        {
            if(computerChoice === "Paper")
                {
                    console.log("Paper beats Rock! Computer scores!");
                    computerScore++;
                }
            else{
                console.log("Rock beats Scissors! Player wins!");
                humanScore++;
            }
        }
    else if(humanChoice === "Paper")
        {
            if(computerChoice === "Rock")
                {                     
                    console.log("Paper beats Rock! Player scores!");
                    humanScore++;
                }
            else{
                    console.log("Scissors beat Rock! Computer wins!");
                    computerScore++;    
                }
        }
    else if(humanChoice === "Scissors")
        {
            if(computerChoice === "Paper")
                {
                    console.log("Scissors beat Paper! Player scores!");
                    humanScore++;
                }
            else{
                    console.log("Rock beats Scissors! Player wins!");
                    computerScore++;
                }
        }

    console.log("Player Score = " + humanScore);
    console.log("Computer Score = " + computerScore);
}

function playGame(){
    
    for(i = 0; i<5; i++)
        {
            playSingleRound();
        }
    if(humanScore === computerScore)
        {
            console.log("Score Tied.");
        }
    else if(humanScore > computerScore)
        {
            console.log("Player wins!");
        }
    else{
            console.log("Computer wins!");
    }

    console.log("Player Score = " + humanScore);
    console.log("Computer Score = " + computerScore);

}

let humanScore = 0;
let computerScore = 0;
playGame();


