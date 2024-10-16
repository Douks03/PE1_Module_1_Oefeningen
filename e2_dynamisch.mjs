// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let name= await userInput.question("wat is je Naam?");
let age= await userInput.question("wat is je leeftijd?");
let favoriteGame= await userInput.question("wat is je favoriete game?");



console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
