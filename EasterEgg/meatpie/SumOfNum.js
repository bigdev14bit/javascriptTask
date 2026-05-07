const prompt = require("prompt-sync") ();
let firstNumber = Number(prompt("Enter First Number: "));
let secondNumber = Number(prompt("Enter Second Number: "));

let product = firstNumber * secondNumber;
let sum = firstNumber + secondNumber;

console.log(`Product = ${product} Sum = ${sum}`);
