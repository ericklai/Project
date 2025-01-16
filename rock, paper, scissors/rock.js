let choices = ['rock', 'paper', 'scissors']
let player = document.querySelector('#player')
let computer = document.querySelector('#computer')
let display = document.querySelector('#result')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let playerScoreDisplay = document.querySelector('.playerScoreDisplay')
let compScoreDisplay = document.querySelector('.compScoreDisplay')
let playerScore = 0
let compScore = 0

function playGame(playerChoice){
    let compChoice = choices[Math.floor(Math.random()*3)]
    let result = ""

    if(playerChoice === compChoice){
        result = "IT' A TIE!" 
    }
    else{
        switch(playerChoice){
            case "rock":
            result = (compChoice === "scissors") ? "YOU WIN🎉" : "YOU LOSE😭";
            break;
            case "paper":
            result = (compChoice === "rock") ? "YOU WIN🎉" : "YOU LOSE😭";
            break;
            case "scissors":
            result = (compChoice === "paper") ? "YOU WIN🎉" : "YOU LOSE😭";
            break;
        }
    }

    
   player.textContent = `PLAYER: ${playerChoice}`
   computer.textContent = `COMPUTER: ${compChoice}`
   display.textContent = result

   display.classList.remove("green", "red")
   switch(result){
    case "YOU WIN🎉":
        display.classList.add("green");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
        case "YOU LOSE😭":
            display.classList.add("red");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
   }
}


/*
rock.addEventListener('click',function(){
    alert('Your choice is rock')
}
)
paper.addEventListener('click',function(){
    alert('Your choice is paper')
}
)
scissors.addEventListener('click',function(){
    alert('Your choice is scissors')
}
)*/
