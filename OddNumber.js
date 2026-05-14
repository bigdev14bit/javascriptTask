const prompt = require("prompt-sync") ();
let userInput = Number(prompt("Enter A Number: "))

 if(userInput % 2 === 0) {
    console.log(userInput,"is an Even Number");
  } else {
    console.log(userInput,"is a Odd Number");
  }
