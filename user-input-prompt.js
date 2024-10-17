const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter any: ', (userInput) => {
        console.log('You entered:', userInput);
        rl.close();
    });
}

getUserInput();
console.log(getUserInput());