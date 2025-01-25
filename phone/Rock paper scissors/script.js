let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0, 
    losses: 0,
    ties: 0 
  }
  //alert(score.wins)
 let result = ''
function playGame(playerChoice) { 
 pickComp()
  //rock 
  if(playerChoice === 'rock'){
    if(compChoice === 'rock'){
      result = 'Tie'
    } else if (compChoice === 'paper') {
      result = 'You lose'
    } else if (compChoice === 'scissors') {
      result = 'You win'
    }
    //paper
  } else if (playerChoice === 'paper') {
    if(compChoice === 'rock'){
      result = 'You win'
    } else if (compChoice === 'paper') {
      result = 'Tie'
    } else if (compChoice === 'scissors') {
      result = 'You lose'
    }
    //scissors 
  }else if (playerChoice === 'scissors') {
    if(compChoice === 'rock'){
      result = 'You lose'
    } else if (compChoice === 'paper') {
      result = 'You win'
    } else if (compChoice === 'scissors') {
      result = 'Tie'
    }
  }
  //alert(result)
  //scores
  if(result === 'You win'){
    score.wins += 1
  } else if (result === 'You lose') {
    score.losses += 1
  } else if (result === 'Tie') {
    score.ties += 1
  }
  
  localStorage.setItem('score', JSON.stringify(score))
  
  let player = document.querySelector('#player').textContent = playerChoice
  let comp = document.querySelector('#comp').textContent = compChoice
  let wins = document.querySelector('#wins').textContent = score.wins
  let losses = document.querySelector('#losses').textContent = score.losses
  let ties = document.querySelector('#ties').textContent = score.ties;
  
 /* alert(`You chose: ${playerChoice}
Computer chose: ${compChoice}
Results: ${result}
Wins: ${score.wins}
Losses: ${score.losses}
Ties: ${score.ties}`)*/
}
 let compChoice = ''
  //console.log(playerChoice)
  function pickComp(){
  let randomNum = Math.random()
 
  
  if(randomNum > 0 && randomNum <= 1/3){
    compChoice = 'rock'
  } else if (randomNum > 1/3 && randomNum<= 2/3) {
    compChoice = 'paper'
  } else if (randomNum > 2/3 && randomNum< 1) {
    compChoice = 'scissors'
  }
  return
}

function resetScore(){
  if(confirm('Do you want to reset the game?')){
    score.wins = 0
    score.losses = 0
    score.ties = 0
    wins.textContent = 0
    losses.textContent = 0
    ties.textContent = 0
    player.textContent = ''
    comp.textContent = ''
    localStorage.removeItem('score')
    alert('Scores have been reset!')
  }else{
    alert(' You cancelled')
  }
 
  
}