const calculator = require('./calculatorFunctions');
var rl = require("readline-sync");

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function (line) {
//     switch (line) {
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
//         case "00":
//             return rl.close();
//     }
//     rl.prompt();
// }).on('close', function () {
//     process.exit(0);
// });

calculator.addition(22, 33)
    .then(response => console.log("The result of the adition is      " + response));

calculator.substraction(99, 80)
    .then(response => console.log("The result of the substraction is " + response));

calculator.divide(100, 0)
    .then(response => console.log("The result of the divide is       " + response))
    .catch(error => console.log(error));

calculator.multiplication(10, 12)
    .then(response => console.log("The result of the multiplication is " + response));
