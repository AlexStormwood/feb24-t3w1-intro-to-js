console.log("Iterator stuff is happening!");

let fruitsChoices = [
	"oranges",
	"bananas",
	"mangoes"
];

for (let index = 0; index < fruitsChoices.length; index++) {
	const element = fruitsChoices[index];
	console.log(element);
	break;
}

//   start at 0, until 0 reaches 10, do a thing and increase 0 up by 1 every time we do a thing
for (let i = 0; i < 11; i++) {
	console.log(`This is the ${i} iteration of the loop.`);
}

fruitsChoices.forEach(element => {
	element = element.toLocaleUpperCase();
	console.log(element + " from the forEach loop");
});

console.log(fruitsChoices);

for (const fruit of fruitsChoices) {
	console.log(fruit);
}

// forEach iterates over existing array and returns nothing,
// map iterates over existing array and returns a new array
let fruitsChoicesAllCaps = fruitsChoices.map((whatever) => {
	return whatever.toLocaleUpperCase();
});

console.log(fruitsChoicesAllCaps);
console.log(fruitsChoices);

let nonCitrusFruits = fruitsChoices.filter((fruit) => {
	// if one of these two conditions is true, the fruit is good!
	// fruit != "oranges" || fruit != "lemons"
	// NO!
	// if both of these conditions is true, the fruit is good!
	// fruit != "oranges" && fruit != "lemons"
	// YES! 
	return fruit != "oranges" && fruit != "lemons"
});
console.log(nonCitrusFruits);


let alexsFavouriteFruitIsAvailable = fruitsChoices.includes("mangoes");
console.log("Alex's favourite fruit is available: " + alexsFavouriteFruitIsAvailable);

// while (fruitsChoices.length > 0){
// 	console.log(fruitsChoices);
// }
// // while: check for condition, and THEN do the block of code 
// // doWhile: do the block of code, and THEN check for condition 
// do {
// 	console.log(fruitsChoices);
// } while (condition);