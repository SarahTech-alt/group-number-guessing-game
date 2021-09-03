$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submit-button').on(click, getGuesses);
}

function getGuesses(){
  const playerGuesses = {
    playerOneGuess: $('#player-one-guess').val(),
    playerTwoGuess: $('player-two-guess').val(),
    playerThreeGuess: $('player-three-guess').val(),
  };
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: playerGuesses,
  }).then(displayGuesses).catch(errorPostingGuesses)
}

function displayGuesses(response) {
  console.log('Displaying Guesses');
  console.log(response);
};

function errorPostingGuesses(response) {
  console.log('Something broke!');
  
}