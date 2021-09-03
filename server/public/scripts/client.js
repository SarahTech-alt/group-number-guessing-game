$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submit-button').on('click', getGuesses);
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

function displayGuesses() {
  $.ajax({
    method: 'GET',
    url: '/guesses'
  }).then(appendResultsToDom).catch(displayError)
  }

function appendResultsToDom(response){
  let valueCounter = 0;
  console.log(valueCounter);

  console.log('Displaying Guesses');
  console.log(response);
  valueCounter++;
  console.log(valueCounter);
  $('#counter-here').append(valueCounter)
  for (const item of response){
    $('#guess-placeholder').append(`<li>${item}</li>`)
  }
}

  
function displayError(){
  alert('Error in GET');
}

function errorPostingGuesses(response) {
  console.log('Something broke!');
}