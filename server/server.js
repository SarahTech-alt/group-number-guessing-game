const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

function randomNumber( min, max ) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

let playerOneWon;
let currentGuess = [];

app.post('/guesses', (req,res) => {
  console.log('in POST /guesses');
  const guessToCheck = req.body;
  currentGuess.push(guessToCheck);
  const numberToGuess = 5;
  if (guessToCheck.playerOneGuess == numberToGuess){
    //console.log('Player One Won!');
     playerOneWon = 'Player One is the Winner!'
  }
  else {
     playerOneWon = 'Player One is Not the Winner'
  }
  res.send(currentGuess);
});

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

// app.get('/guesses'), (req,res) => {
  
// }
