const prompt = require("prompt-sync") ();

function greetUser(name) {
  return name;
}
let userInput = prompt("Enter Name: ");
console.log("Hello",userInput);
