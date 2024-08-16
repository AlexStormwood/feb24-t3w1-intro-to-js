
console.log("Dice roller file loaded.");

// Function that rolls a dice and the dice size is a parameter 
// generic dice roller function 
function rollDice(diceSize = 6){
	console.log("Dice rolling function has been called with a dice size of " + diceSize);

	// generate random number between 0 and 1 
	// multiply number by dice size so that it's between 0 and diceSize
	//			multiplied number is between 0 and (diceSize -1)
	//			eg. diceSize of 20 is 0-19 
	// round the diceResult down to nearest whole number 
	// add one to prevent it from being 0 
	// diceResult is now anything between 1 and 20 inclusive 

	let diceResult = Math.random() * diceSize;

	let floorDiceResult = Math.floor(diceResult) + 1;
	let ceilDiceResult = Math.ceil(diceResult);

	// console.log(floorDiceResult, ceilDiceResult);
	return floorDiceResult;
}

// rollDice(); // diceSize is 6
// rollDice(20); // diceSize is 20 
// rollDice(10000); // diceSize is 10000


// Function that rolls a dice and the dice is a 6-sided dice 
// specific dice roller function that calls the generic function 
const rollD6 = () => rollDice(6);

console.log("RollD6 function result is: " + rollD6());

// Function that rolls a dice and the dice is a 20-sided dice 
// specific dice roller function that calls the generic function 
const rollD20 = () => {
	// let diceResult = rollDice(20);
	// return diceResult;

	return rollDice(20);
}


let superAwesomeDiceResult = rollD20();

console.log("Super awesome dice result is: " + superAwesomeDiceResult);



function rollD20WithAdvantage(){
	let diceResults = [
		rollD20(),
		rollD20()
	];

	let highestRoll = 0;

	diceResults.forEach((individualResult) => {
		if (highestRoll < individualResult){
			highestRoll = individualResult;
		}
	});
	
	console.log(diceResults);

	return highestRoll;
}

console.log("Rolling 2 D20 with advantage:" + rollD20WithAdvantage());
