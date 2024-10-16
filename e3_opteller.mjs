// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden




let getal1= await userInput.question('Geef een getal');
let getal2= await userInput.question('Geef nog een getal');

let som= Number(getal1)+ Number(getal2);

console.log('De som van deze getallen is' + som );



process.exit();
