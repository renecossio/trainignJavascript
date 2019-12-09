
function addition(firstNunmber, secondNumber) {
    var result = firstNunmber + secondNumber;
    return result;
}

function substraction(firstNunmber, secondNumber) {
    try {
        if (firstNunmber > secondNumber) {
            var result = firstNunmber - secondNumber;
        }
        return result;
    } catch (error) {
        console.error(error);
    }
}

function divide(dividend, divisor) {
    try {
        if (divisor != 0)
            var result = dividend / divisor;
    } catch (error) {
        console.error(error);
        console.error("divide by zero");
    }
}

function multiplication(firstFactor, secondFactor) {
    var result = firstFactor * secondFactor;
}

function isNumeric(num) {
    return !isNaN(num)
}

exports.addition = addition;
exports.substraction = substraction;
exports.multiplication = multiplication;
exports.divide = divide;
exports.isNumeric = isNumeric;

