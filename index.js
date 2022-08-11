
function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];


    /* 2 is the max number and 0 is the min number, 1 is part of the calculation*/
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;

    let computerChoice = choices[randomNumber];

    return computerChoice;
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        return "Is a Tie!"
    } else if( playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You Win! Rock beats Scissors"
    } else if( playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "You Lose! Rock beats Scissors"
    } else if( playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "You Lose! Paper beats Rock"
    } else if( playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You Win! Paper beats Rock"
    } else {
        return "Wrong weapon!"
    }

}





function game() {

    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;


    for(let i = 1; i <= 5; i++) {
        
        let userChoice = prompt(`Select your weapon: `).toUpperCase();
        let computerChoice = getComputerChoice().toUpperCase();
        
        let playResult = playRound(userChoice, computerChoice);

        console.log(playResult);

        if(playResult.startsWith("You Win!")) {
            winCount++;
        } else if(playResult.startsWith("You Lose!")) {
            loseCount++;
        } else if(playResult.startsWith("Is a Tie!")) {
            tieCount++;
            i--;
        } else {
            i--;
        }
        console.log(`Wins: ${winCount}`, `Loses: ${loseCount}`, `Tie: ${tieCount}`);
    }



}

game();



