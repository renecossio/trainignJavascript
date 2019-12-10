
async function addition(firstNunmber, secondNumber) {
    var result = firstNunmber + secondNumber;
    return result;
}

async function substraction(firstNunmber, secondNumber) {
    try {
        if (firstNunmber > secondNumber) {
            var result = firstNunmber - secondNumber;
        }
    } catch (error) {
        result = error;
    }
    return result;
}

async function divide(dividend, divisor) {
    if (divisor != 0) {
        return result = dividend / divisor;
    } else {
        return ("divide by zero");
    }
}

async function multiplication(firstFactor, secondFactor) {
    return result = firstFactor * secondFactor;
}

async function isNumeric(num) {
    return !isNaN(num)
}

exports.addition = addition;
exports.substraction = substraction;
exports.multiplication = multiplication;
exports.divide = divide;
exports.isNumeric = isNumeric;

