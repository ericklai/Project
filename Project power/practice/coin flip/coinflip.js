let heads = document.querySelector('#head')     
    let tails = document.querySelector('#tail')

    let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
            }

    let player = ''
    function playGame(playerChoice){
        let compChoice = ''
        if(playerChoice === 'heads'){
            compChoice = 'tails'
        }else if(playerChoice === 'tails'){
            compChoice = 'heads'
        }
        let coin = ''
        let randomNumber = Math.random()
        if(randomNumber > 0 && randomNumber <= 1/2){
            coin = 'heads'   
        }else if(randomNumber >1/2 && randomNumber <=1){
            coin = 'tails'
        }

        let result = ''
        if(playerChoice === coin){
            result = 'You win!'
        }else{
            result = 'You lose'
        }

        if(result === 'You win!'){
            score.wins += 1
        }else{
            score.losses += 1
        }
        localStorage.setItem('score', JSON.stringify(score))

        alert(`Your choice is: ${playerChoice}
Computers choice is: ${compChoice}
Result: ${result}
Coin's face is ${coin}
Your score: ${score.wins}
Computers score: ${score.losses}`)
    }