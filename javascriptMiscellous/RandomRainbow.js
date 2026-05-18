const rainbows = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// 1. Generate a random index between 0 and the array's length minus 1
let randomNumber = Math.floor(Math.random() * 7) + 1;

// 2. Grab the item at that random slot
let choosenColor = rainbows[randomNumber - 1];

console.log("Number Generator: " + randomNumber);
console.log("Rainbow: " + choosenColor);

