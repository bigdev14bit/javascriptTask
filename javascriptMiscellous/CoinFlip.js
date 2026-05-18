const prompt = require("prompt-sync") ();
let userGuess = prompt("Enter Guess For Coin Flip: ")
let coin = Math.floor(Math.random() * 2);

let result;
if(coin === 0) {
  result = "HEAD";
} else {
  result = "TAIL";
}

console.log("COIN TOSS:",result);

if(userGuess === coin) {
  console.log("YOU WON");
} else {
  console.log("Wrong Guesss");
}
