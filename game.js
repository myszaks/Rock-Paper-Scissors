function getComputerChoice(){
    let random = Math.random();
    if (random >= 0.66)
    {
        return "rock";
    }
    else if (random >= 0.33 && random < 0.66)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice(){
    let goodChoice = true;
    let sign = '';
    
    do{
        sign = prompt("Input your choice (rock, paper, scissors)");    
        if( sign.toLowerCase() != "rock" && sign.toLowerCase() != "paper" && sign.toLowerCase() != "scissors")
        {
            return alert("Wrong choice!");
        }
    }while(goodChoice == false)

    return sign.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame(round){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Round " + round);

    function playRound(computerChoice, humanChoice) {
        if (computerChoice == humanChoice)
            {
                return console.log("Draw! Score is human " + humanScore + " computer " + computerScore);
            }
        else if (humanChoice == null)
            {
                computerScore++;
                return console.log("Computer won. Human did not choose. Score is human " + humanScore + " computer " + computerScore);
            }
        else if (computerChoice == "rock" && humanChoice == "paper")
            {
                humanScore++;
                return console.log("Human won. Score is human " + humanScore + " computer " + computerScore);
            }
        else if (computerChoice == "rock" && humanChoice == "scissors")
            {
                computerScore++;
                return console.log("Computer won. Score is human " + humanScore + " computer " + computerScore);
            }
        else if (computerChoice == "paper" && humanChoice == "rock")
            {
                computerScore++;
                return console.log("Computer won. Score is human " + humanScore + " computer " + computerScore);
            }  
        else if (computerChoice == "paper" && humanChoice == "scissors")
            {
                humanScore++;
                return console.log("Human won. Score is human " + humanScore + " computer " + computerScore);
            }  
        else if (computerChoice == "scissors" && humanChoice == "rock")
            {
                humanScore++;
                return console.log("Human won. Score is human " + humanScore + " computer " + computerScore);
            }   
        else if (computerChoice == "scissors" && humanChoice == "paper")
            {
                computerScore++;
                return console.log("Computer won. Score is human " + humanScore + " computer " + computerScore);
            } 
    }
    
    playRound(computerSelection, humanSelection);
}

let roundCount = 1;

function play(){
    do
    {
        playGame(roundCount);
        roundCount++;
    }while(roundCount <= 5)

        if (computerScore > humanScore)
            {
                alert("Computer won the game!");
            }
        else if (computerScore == humanScore)
            {
                alert("Game was drawn!");
            }
        else
            {
                alert("Human won the game!");
            }
}

play();

/*let playAgain = prompt("Play again (yes/no)?")

if (playAgain.toLowerCase() == "yes")
    {
        play();
    }
else 
{
    alert("Thanks for playing.");
}*/