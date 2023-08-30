let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses :0,
  ties :0 
 };



updateScoreElement();




  function playGame(playerMove){

  const computerMove = pickComputerMove();

  let Result = '';


if ( playerMove === 'Scissors'){

if ( computerMove === 'Rock' ){
    Result ='You lose'
  } else if ( computerMove === 'Paper'){
    Result ='You Win'
  } else if ( computerMove === 'Scissors'){
    Result = 'Tie'
  }
} else if (playerMove === 'Paper'){
  
  if (computerMove === 'Rock'){
    Result = 'You Win'
  } else if (computerMove === 'Paper'){
    Result = 'Tie'
  } else if ( computerMove === 'Scissors'){
    Result = 'You lose'
  }
} else if (playerMove === 'Rock'){

  if ( computerMove === 'Rock' ){
    Result ='Tie'
  } else if ( computerMove === 'Paper'){
    Result ='You lose'
  } else if ( computerMove === 'Scissors'){
    Result = 'You Win'
  }
}

  
if (Result === 'You Win'){
  score.wins += 1;
} else if (Result === 'You lose'){
  score.losses += 1;
}else if (Result ==='Tie'){
  score.ties += 1;
}


  localStorage.setItem('score',JSON.stringify
  (score));

 updateScoreElement();

 document.querySelector('.js-result')
 .innerHTML = Result ;

 document.querySelector('.js-moves')
 .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;     

}

function updateScoreElement(){
  
  document.querySelector('.js-score')
 .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;
}


 function pickComputerMove(){

  const randomNumber = Math.random();
  let computerMove ='';

  if( randomNumber >= 0 && randomNumber < 1/3){
    computerMove ='Rock'
  } else if (randomNumber > 1/3 && randomNumber < 2/3){
    computerMove ='Paper'
  } else if (randomNumber > 2/3 && randomNumber < 1){
    computerMove ='Scissors'
  }

    console.log (computerMove);
    return computerMove;

 }