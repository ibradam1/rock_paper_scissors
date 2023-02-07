
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
function playRound(){

}

function game(){

}

