const prompt = require("prompt-sync") ();
console.log("ROCK	PAPER		SCISSORS");
console.log("Enter 0, 1, 2 , 0 for Rock, 1 for Paper, 2 for Scissors");
let userInput = prompt("Enter 0, 1, 2: ");
let game = Math.floor(Math.random() * 3);

if(userInput === 0 && game === 0) {
  console.log("DRAWS!!!");  
}
