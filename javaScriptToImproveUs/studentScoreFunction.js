const prompt = require("prompt-sync") ();

function studentScore(score) {
  if(score > 70) {
    return "A";
  } else if(score > 60) {
      return "B";
  } else if(score > 50) {
      return "C";
  } else if(score > 40) {
      return "D";
  } else {
      return "F";
  }
}

let userInput = Number(prompt("Enter Score: "));
let score = studentScore(userInput);
console.log(`Your grade is: ${score});
