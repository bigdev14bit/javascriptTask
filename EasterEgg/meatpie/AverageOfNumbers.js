const prompt = require("prompt-sync") ();

let count = 0;

for(let index = 0; index < 3; index++) {
  let userInputs = Number(prompt("Enter Numbers: "));
    count += userInputs;
}
let average = count / 3;
console.log("Sum:",count);
console.log("Average:",average);
