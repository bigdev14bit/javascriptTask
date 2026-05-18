console.log("Simple JS Calc")

const prompt = require("prompt-sync");

const firstNumber = Number(prompt("Enter First Number: "));
const operator = prompt("Enter Operator(+, -, *, /, **, %, //): ");
const secondNumber = Number(prompt("Enter Second Number: "));

if(operator === "+") {
  let result = firstNumber + secondNumber;
  console.log("Result: ", result);
} else if(operator === "*") {
  let result = firstNumber * secondNumber;
  console.log("Result: ", result);
} else if(operator === "-") {
  let result = firstNumber - secondNumber;
  console.log("Result: ", result);
} else if(operator === "/") {
    if secondNumber === 0;
    console.log("Error division by zero");
     } else {
      console.log("Result: ", firstNumber / secondNumber);
} else if(operator === "**") {
  let result = firstNumber ** secondNumber;
  console.log("Result: ", result);
} else if(operator === "%") {
  let result = firstNumber % secondNumber;
  console.log("Result: ", result);
} else {
  console.log("Invalid inputs, enter 1 + 2");
}
