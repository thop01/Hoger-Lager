import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

console.log(`

        ( ͡❛ ͜ʖ ͡❛)  : Hello There

        `);

const username = await rl.question('What is your name?  ');  // readline
let credits = username.length * 10;
console.log("your name is " + credits + " credits worth");

console.log("------");
console.log("Game is started");
console.log("------");
let exit = false;
while(credits > 0 && !exit){

    const bankDice = Math.floor(Math.random() * 6) + 1;
    console.log(`The bank throw ${bankDice}`);
    const answer = await rl.question('Do you think u throw higher or lower ( h / l )');
    const yourDice = Math.floor(Math.random() * 6) + 1;
    console.log(`you throw ${yourDice}`);
    if(answer == "l"){
        if(yourDice < bankDice){
            console.log('you win');
            credits = credits + 10;
        }else{
            console.info('you lose');
            credits = credits - 10; 
        }
    }else  if(answer == "h"){
        if(yourDice > bankDice){
            console.log('you win');
            credits = credits + 10;
        }else{
            console.error('you lose');
            credits = credits - 10; 
        }
    }

    showStatus();
    let playAgain;
    if(credits > 0){
        playAgain = await rl.question('do you like to play again? (Y/n)');
    }
    if(playAgain == "n"){
        exit = true;
    }
}


function showStatus(){
    console.log(`
        ||| Your name ${username}
        ||| Your current credits ${credits}
    `);
}

function throwDice(){
    
}

rl.close();