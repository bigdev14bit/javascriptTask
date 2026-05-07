const prompt = require("prompt-sync") ();
let firstNumber = prompt("Enter First Number: ");
let secondNumber = prompt("Enter Second Number: ");

let temp = firstNumber;

firstNumber = secondNumber;
secondNumber = temp;

console.log(`Swapped ${firstNumber} for secondNumber ${secondNumber}`);
