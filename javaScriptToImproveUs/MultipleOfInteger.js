const prompt = require("prompt-sync") ();
const firstNumber = Number(prompt("Enter A Number: "));

if(firstNumber % 2 === 0) {
  console.log("HiEven");
}

if(firstNumber % 5 === 0) {
  console.log("HiFive");
}
