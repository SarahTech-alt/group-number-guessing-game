$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submit-button').on(click, getGuesses);
}

function getGuesses(){
  const playerGuesses = {
    playerOneGuess: $('#player-one-guess').val(),
    playerTwoGuess: $('player-two-guess').val(),
    playerThreeGuess: $('player-three-guess')
  }
  
}