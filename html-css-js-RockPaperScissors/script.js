let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  // This is how to get the item  saved in local storage
  localStorage.getItem('score'); //type the name inside of the ()

  updateScoreElement();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'you lose';
      } else if (computerMove === 'paper') {
        result = 'you win';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'you win';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'you lose';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'you lose';
      } else if (computerMove === 'scissors') {
        result = 'you win';
      }
    }

    if (result === 'you win') {
      score.wins += 1;
    } else if (result === 'you lose') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
    // How to save to local storage
    localStorage.setItem('score', JSON.stringify(score)); //local storage only support strings

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = `You ${result}`

    document.querySelector(".js-moves").innerHTML = `You 
  <img class="move-img" src="Images/${playerMove}-emoji.png">
  <img class="move-img" src="Images/${computerMove}-emoji.png">
  Computer`
  }

  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  }


  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
      computerMove = 'scissors';
    }
    console.log(computerMove);

    return computerMove;  
  }
