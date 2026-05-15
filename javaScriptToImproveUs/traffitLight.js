const prompt = require("prompt-sync") ();
const userInput = prompt("Enter A Color(RED, YELLOW, GREEN): ");

let cleanUserInput = userInput.toLowerCase();
if(cleanUserInput === "red") {
  console.log("\n==S.T.O.P==");
} else if(cleanUserInput === "yellow") {
    console.log("\n==g.e.t r.e.a.d.y==");
} else if(cleanUserInput === "green") {
    console.log("\n==g.o==");
} else {
    console.log("\nInvalid input");
}
