const person = {
	name: "Chloe",
	age: 22,
	nationality: "London",
	isStudent: true,
	hubbies: ["Skating", "hiking", "kayaking", "reading"],
};

console.log(person.name + " is saying HI");
console.log(`My name is ${person.name}. And i'm from ${person.nationality} i love ${person.hubbies[0]}`);

const myPlaylist = [
	{artistName: "Rema", album: "Rave 'n Rose", songTitle: "Divine"},
        {artistName: "Ruger", album: "BlownBoyRu", songTitle: "BlownBoy"},
	{artistName: "Rema", album: "Rave 'n Rose", songTitle: "Runaway"}
];

console.log(`I love ${myPlaylist[0].artistName}`);
