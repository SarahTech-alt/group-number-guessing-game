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

app.post('/guesses', (req,res) => {
  console.log('in PST /guesses');
  const numberToGuess = 5;
  if (playerOneGuess == numberToGuess){
    res.send('Player One Won!');
  }
  else {
    res.send('Not a winner');
  }
})


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

