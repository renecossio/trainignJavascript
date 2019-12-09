const calculator = require('./calculatorFunctions');
const hola2 = require("./holamundo");


// const rl = readline.createInterface(process.stdin, process.stdout);
var rl = require("readline-sync");

// function promptInput(prompt, handler) {
//     rl.question(prompt, input => {
//         if (handler(input) !== false) {
//             promptInput(prompt, handler);
//         }
//         else {
//             rl.close();
//         }
//     });
// }

// console.log('Select an option:');
// console.log('1 for adtition : ');
// console.log('2 for substraction  ');
// console.log('0 by exit ');
// promptInput('Option> ', input => {
//     switch (input) {
//         case '1':
//             console.log('Addition ');
//             var firstNumber = rl.question("insert first number");
//             var secondNumber = rl.question("insert second number");
//             var result = calculator.addition(firstNumber, secondNumber);
//             console.log("The result is: " + result);
//             break;
//         case '2':
//             console.log('substraction');
//             break;
//         case '0':
//             return false;
//     }
// });


// console.log("write number ");
// var secondNumber = rl.question();

// // const secondNumber = text.toString().trim()
// var result = calculator.isNumeric(secondNumber);
// console.log("the result is " + result);

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function (line) {
    switch (line) {
        case '1':
            console.log('Addition ');
            var firstNumber = rl.question("insert first number");
            var secondNumber = rl.question("insert second number");
            var result = calculator.addition(firstNumber, secondNumber);
            console.log("The result is: " + result);
            break;
        case '2':
            console.log('substraction');
            break;
        case "00":
            return rl.close();
        // if (line === "00") 
    }
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});