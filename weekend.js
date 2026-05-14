const prompt = require("prompt-sync") ();
const weekDays = prompt("Enter WeekDays: ");

switch(weekDays.toLowerCase()) {
	case "monday":
	case "tuesday":
	case "wednesday":
	case "thursDay":
	case "friday":
		console.log(weekDays,"is a W-E-E-K-D-A-Y");
		break;
	case "saturday":
	case "sunday":
		console.log(weekDays,"is W-E-E-K-E-N-D-S");
		break;
	default:
		console.log("Invalid inputs, Enter a valid day");
}
