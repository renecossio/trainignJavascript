
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
    if (divisor != 0) {
        return result = dividend / divisor;
    } else {
        return ("divide by zero");
    }
}

function multiplication(firstFactor, secondFactor) {
    return result = firstFactor * secondFactor;
}

function isNumeric(num) {
    return !isNaN(num)
}

exports.addition = addition;
exports.substraction = substraction;
exports.multiplication = multiplication;
exports.divide = divide;
exports.isNumeric = isNumeric;

