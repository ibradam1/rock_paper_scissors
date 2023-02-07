
//Generates random choice for computer
function getComputerChoice(){
    
    let choice;

    //Generate a random number from 0 to 2
    let number = Math.floor(Math.random() * 3);

    //Assign each number to corresping choice: 0=Rock, 1=Paper, 2=Scissors
    switch (number){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    
    //Return computer's choice as a string
    return choice;
}

getPlayerChoice();
//Inputs player's choice
function getPlayerChoice(){
    let choice = undefined;

    //Gets player choice and repeats if choice is not valid
    while (!(choice === "Rock" || choice === "Paper" || choice === "Scissors" || false)){
    //prompt for the player's choice
        choice = prompt("Choose Rock, Paper, or Scissors: ");
        

        //convert the player's choice to lowercase, then capitalize the first letter.
        choice = choice.toLowerCase();
        choice = ((choice.substring(0, 1)).toUpperCase()) + (choice.slice(1));
        
    }
        console.log(choice);


    return choice;
    
}


//Determines who wins the round
function playRound(playerChoice, computerChoice){
    let winner = null;

    if (playerChoice == "Rock"){
        if (computerChoice == "Rock"){
            console.log("Tie!");
        } else if (computerChoice == "Paper"){
            winner = "Computer"
        } else if (computerChoice == "Scissors"){
            winner = "Player";
        }
    } else if (playerChoice == "Paper"){
        if (computerChoice == "Rock"){
            winner = "Player";
        } else if (computerChoice == "Paper"){
            console.log("Tie!");
        } else if (computerChoice == "Scissors"){
            winner = "Computer";
        }
    } else if (playerChoice == "Scissors"){
        if (computerChoice == "Rock"){
            winner = "Computer";
        } else if (computerChoice == "Paper"){
            winner = "Player";
        } else if (computerChoice == "Scissors"){
            console.log("Tie!");
        }
    }

    return winner;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winningPlayer;
    

    console.log("ROCK PAPER SCISSORS GAME:")

    //Play 5 rounds and increment winner's score.
    for (int i = 0; i < 5; i++){
        winningPlayer = playRound(getPlayerChoice(), getComputerChoice());
        if (winningPlayer === "Player"){
            playerScore++;
        } else if (winningPlayer === "Computer"){
            computerScore++;
        }
    }

    //Decide winner with higher score
    if (playerScore > computerScore){
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!")
    }




}

