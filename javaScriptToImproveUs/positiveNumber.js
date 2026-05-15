const prompt = require("prompt-sync") ();

function positiveNumber(number) {
  if(number < 0) {
    return `${number},"is a negative number"`;
  } else if(number > 0){
    return `${number},"is a positive number"`;
  } else {
    return `${number},"is negative"`;
  }
}

let userInput = Number(prompt("Enter A Number: "));
console.log(positiveNumber(userInput));
