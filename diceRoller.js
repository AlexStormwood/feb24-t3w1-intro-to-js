
console.log("Dice roller file loaded.");



// Is a closure, because rollDice is a function 
console.log(rollDice(20));


// Not a closure, because rollD20 is a const variable 
console.log(rollD20());



/**
 * Function that rolls a dice and the dice size is a parameter 
 * @param {number} diceSize Size of the dice. This is the maximum number that you can roll.
 * @returns {number}
 */
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



/**
 * Function that rolls a dice and the dice is a 6-sided dice 
 * @returns {number}
 */
const rollD6 = () => rollDice(6);

console.log("RollD6 function result is: " + rollD6());


/**
 * Function that rolls a dice and the dice is a 20-sided dice 
 * @returns {number}
 */
const rollD20 = () => {
	// let diceResult = rollDice(20);
	// return diceResult;

	return rollDice(20);
}


let superAwesomeDiceResult = rollD20();

console.log("Super awesome dice result is: " + superAwesomeDiceResult);

// Declare without assignment
let diceResults; 

// let, var, const 

/**
 * Roll two dice and return the highest result. 
 * @returns {number}
 */
function rollD20WithAdvantage(){
	let tempDiceResults = [
		rollD20(),
		rollD20()
	];

	let highestRoll = 0;

	tempDiceResults.forEach((individualResult) => {
		if (highestRoll < individualResult){
			highestRoll = individualResult;
		}
	});
	
	console.log(tempDiceResults);

	return highestRoll;
}



console.log("Rolling 2 D20 with advantage:" + rollD20WithAdvantage());


// console.log("First roll in advantage rolls is: " + diceResults[0]);

// console.log(tempDiceResults);



// let and var can be changed after declaration
var diceResultChangeable = rollD20();
diceResultChangeable = rollD20();

// const cannot be changed after declaration 
const diceResultConstant = rollD20();
diceResultConstant = rollD20();



