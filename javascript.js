
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
    console.log(choice);
}

getComputerChoice();
//Inputs player's choice
function getPlayerChoice(){


    //prompt for the player's choice
    //convert the player's choice to lowercase, then capitalize the first letter.
    //if the capitalized player's choice is not Rock, Paper, or Scissors, then promt again (repeat the loop)
    //return the player's choice
    
}

//Determines who wins the round
function playRound(){

}

function game(){

}

