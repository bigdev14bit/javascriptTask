//for 2 vriables, x and y find twice the value of the sum of the two variables

const prompt = require("prompt-sync") ();

let firstNumber = Number(prompt("Enter First Number: "));
let secondNumber = Number(prompt("Enter Second Number: "));

let sum = firstNumber + secondNumber;
let sumTwice = sum * 2;

console.log("The sum is: ", sum);
console.log("Twice the sum is: ", sumTwice);

//for a certain value, find it's remainder when divided by 10 and add it to it's original value.

//const prompt = require("prompt-sync") ();
let number = Number(prompt("Enter A Number: "));

let remainder = number % 10;
let xReAdd = remainder + number;
console.log("Number = ", number);
console.log("The remainder is: ", remainder);
console.log("The original value is: ", xReAdd);

//for the values x and n, find the resulting value when x is multiplied to its original value n times.

//const prompt = require("prompt-sync") ();

let numberr = 30;

let userInput = Number(prompt("Enter A NUmber: "));

let result = numberr ** userInput;
console.log("Result: ",result);


