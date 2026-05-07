const prompt = require("prompt-sync") ();
const firstNumber = Number(prompt("Enter First Number: "));
const secondNumber = Number(prompt("Enter Second Number: "));

const result = firstNumber * secondNumber;
console.log("Result: ",result);
