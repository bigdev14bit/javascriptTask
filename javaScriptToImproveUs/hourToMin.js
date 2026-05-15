const prompt = require("prompt-sync") ();

function hourToMinute(hour) {
  return hour * 60;
}

let userInput = Number(prompt("Enter A Hour: "));
console.log("Minute is :",hourToMinute(userInput));
