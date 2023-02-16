let playerPoints = 0;
let computerPoints = 0;

//Get buttons into nodeList
const buttons = document.querySelectorAll('.butt');


//gameloop
function game(){
    startGame();
}


//Create buttons and play rounds if they are clicked
function startGame() {

    //Add event listener for clicking on button and making choice
    //Add event listener for style change on mouseover
    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            
            //Play round using button id as player selection
            playRound(button.id, getComputerChoice());
        });
    
        button.addEventListener('mouseover', () => button.classList.add('moused'));
        button.addEventListener('mouseout', () => button.classList.remove('moused'));
    });
}



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



//Determines who wins the round
function playRound(playerChoice, computerChoice){

    //play a round if no player has 5 points yet
    if (playerPoints < 5 && computerPoints < 5) {
        let winner = null;

        if (playerChoice == "Rock"){
            if (computerChoice == "Rock"){
                winner = "Tie";
            } else if (computerChoice == "Paper"){
                winner = "Computer";
            } else if (computerChoice == "Scissors"){
                winner = "Player";
            }
        } else if (playerChoice == "Paper"){
            if (computerChoice == "Rock"){
                winner = "Player";
            } else if (computerChoice == "Paper"){
                winner = "Tie";
            } else if (computerChoice == "Scissors"){
                winner = "Computer";
            }
        } else if (playerChoice == "Scissors"){
            if (computerChoice == "Rock"){
                winner = "Computer";
            } else if (computerChoice == "Paper"){
                winner = "Player";
            } else if (computerChoice == "Scissors"){
                winner = "Tie";
            }
        }

        //Update choices and winner in scoring section
        const player = document.querySelector('.player-choice');
        const computer = document.querySelector('.computer-choice');
        const roundWinner = document.querySelector('.round-winner');
        
        player.textContent = "Player choice: " + playerChoice;
        computer.textContent = "Computer choice: " + computerChoice;
        roundWinner.textContent = "Winner of round: " + winner;
        
        updateScore(winner);


    //Call final when point limit is reached  
    if (playerPoints == 5 || computerPoints == 5) {
        finalWinner();
        addReset();
    }

    }
    

    return;
}

//creates a reset button when final points reached.
function addReset() {

}


//updates scores and shows in DOM
function updateScore(winner) {
    if (winner === "Player") {
        playerPoints++;
        document.querySelector('.player-score').textContent = `Player Score: ${playerPoints}`;
    } else if (winner === "Computer") {
        computerPoints++;
        document.querySelector('.computer-score').textContent = `Computer Score: ${computerPoints}`;
    }





    return;

}

function finalWinner() {
    if (playerPoints > computerPoints){
        document.querySelector('.final').textContent = "You win!";
    } else if (playerPoints < computerPoints) {
        document.querySelector('.final').textContent = "Computer wins!";
    }

    return;
}



game();