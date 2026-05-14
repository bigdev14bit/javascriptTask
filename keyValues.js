const country = {
	"name" : "Nigeria",
	"capital" : "Abuja",
	"population" : "200M"
}

for(let key in country) {
  console.log(`Key ${key} : ${country[key]}`);
}
