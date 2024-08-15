let someMessage = "Bananas!";

if (someMessage) {
	console.log("Conditional log");
}


if (someMessage == "oranges"){
	console.log("We have oranges!");
}

let someNumberMessage = 10;

if (someNumberMessage === 10){
	console.log("We have 10 of the things!");
}

if (someNumberMessage >= 5){
	console.log("Number is greater than 5");
}


let someCoolMessage = (someMessage == "oranges") ? 
someMessage.substring(0, 2).toLocaleUpperCase()
: 
"Default message here";

//									"Bananas!" ."Ba"           ."BA"

console.log(someCoolMessage);


if (someMessage == "oranges") {
	let someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase() + "inside the if statement";
	console.log(someCoolMessage);
} else {
	// let keyword is for local scope 
	let someCoolMessage = "Default message here inside the else statement";
	console.log(someCoolMessage, someCoolMessage, someCoolMessage);
}

console.log("someCoolMessage is now: " + someCoolMessage);



let fruitChoices = ["oranges", "bananas", "mangoes"];

let fruitChoicesAsObject = {
	oranges: "orange",
	bananas: "bananas",
	mangoes: "mangoes"
}

let fruit = fruitChoicesAsObject.bananas;

switch (fruit) {
	case fruitChoicesAsObject.bananas:
		
		break;
	case fruitChoicesAsObject.oranges:
		
		break;
	default:
		break;
}


someMessage = "bananas";
switch (someMessage){
	case "oranges":
	console.log("We have oranges")
	break;
	case "bananas":
	console.log("We have bananas")
	break;
	case "mangoes":
	console.log("We have mangoes")
	break;
	default:
		console.log("We have some exotic fruit!")
	break;
}

someCoolMessage = false;

let someShortCircuitLogicValue = someMessage && someCoolMessage && "super cool short circuit logic string";

console.log(someShortCircuitLogicValue);



someMessage = "";
//								false				""			null 
let someOrCircuitLogicValue = someCoolMessage || someMessage ||  null;

console.log(someOrCircuitLogicValue);




let newUser = {
	username: "something",
	bio: ""
}


console.log("Saving newUser to Database, doing all pre-save checks now...");

let userToSave = {
	username: newUser.username,
	bio: newUser.bio || "Default bio here"
}

console.log("Pretend we've written this to the database:");
console.log(userToSave);



