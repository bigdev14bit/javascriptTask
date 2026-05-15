const prompt = require("prompt-sync") ();

function sumOfTwoNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
let firstNumber = Number(prompt("Enter FirstNumber: "));
let secondNumber = Number(prompt("Enter Second Number: "));

let result = sumOfTwoNumber(firstNumber, secondNumber);
console.log("Sum :",result);
