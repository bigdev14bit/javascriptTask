const prompt = require("prompt-sync") ();
let length = Number(prompt("Enter Length: "));
let width = Number(prompt("Enter Width: "));

let result = 0.5 * length * width;
console.log("Result:",result);
