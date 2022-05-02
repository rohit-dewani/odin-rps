let yourScore = 0;
let computerScore = 0;
let result = '';

let allPlayerInputs = document.querySelectorAll('button[class^=player-input]');

for (let i = 0; i < allPlayerInputs.length; i++) {
    allPlayerInputs[i].addEventListener('click', function() {
        game(this.innerHTML);
    })
}

function getComputerChoice() {
    const INPUT = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*3);
    return INPUT[randomIndex];
}

function game(playerChoice){

    let computerChoice = getComputerChoice();

    switch(playerChoice){
        
        case 'Rock':
            switch(computerChoice){
                case 'Rock': result = 'Tie!'; break;
                case 'Paper': result = 'You loose!';
                                computerScore += 1;
                                break;
                case 'Scissors': result = 'You Win!!';
                                yourScore += 1;
                                break;
            }
            break;

        case 'Paper':
            switch(computerChoice){
                case 'Rock': result = 'You Win!!';
                                yourScore += 1;
                                break;
                case 'Paper': result = 'Tie!'; break;
                case 'Scissors': result = 'You Loose!';
                                computerScore += 1;
                                break;
            }
            break;

        case 'Scissors':
            switch(computerChoice){
                case 'Rock': result = 'You Loose!';
                                computerScore += 1;
                                break;
                case 'Paper': result = 'You Win!!';
                                yourScore += 1;
                                break;
                case 'Scissors': result = 'Tie!'; break;
            }
            break;

    }

    document.getElementById('player-score').innerHTML = yourScore;
    document.getElementById('player-choice').innerHTML = playerChoice;
    document.getElementById('computer-score').innerHTML = computerScore;
    document.getElementById('computer-choice').innerHTML = computerChoice;

    if(yourScore == 5){
        gameOver('won');
    }
    if(computerScore == 5){
        gameOver('lost');
    }

}

function gameOver(gameState){
    
    if(gameState == 'won'){
        let text = "You won \n Do you wanna play again?"
        if(confirm(text) == true){
            window.location.reload();
        }
        else {
            window.history.back();
        }
    }

    else {
        let text = "You lost \n Do you wanna play again?"
        if(confirm(text) == true){
            window.location.reload();
        }
        else {
            window.history.back();
        }
    }

}