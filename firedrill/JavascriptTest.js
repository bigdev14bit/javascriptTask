const prompt = require("prompt-sync") ();

const name = prompt("Enter Name: ");
const age = Number(prompt("Enter Age: "));

if(age > 100) {
  console.log("Very Old");
} else if(age > 40) {
  console.log("Adult");
} else if(age > 18) {
  console.log("Youth");
} else if(age > 12) {
  console.log("Teenager");
} else {
  console.log("Child");
}

