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



async function multiplication(firstFactor, secondFactor) {
    return result = firstFactor * secondFactor;
}

function isNumeric(num) {
    return !isNaN(num)
}

async function divide(dividend, divisor) {
    const result = new Promise((resolve, reject) => {
        resolve( dividend / divisor)
    })

    if (divisor != 0) {
        const response = await result;
        return response;
    } else {
        await Promise.reject("divide by zero");
    }
}

async function addition(firstNunmber, secondNumber) {
    const result = new Promise((resolve, reject) => {
        resolve(firstNunmber + secondNumber);
    })
    return result;
}

exports.addition = addition;
exports.substraction = substraction;
exports.multiplication = multiplication;
exports.divide = divide;
exports.isNumeric = isNumeric;

// async function obtenerClientes() {
//     const clientes = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Clientes obtendos...')
//         }, 3000);
//     })
//     const error = true;
//     if (!error) {
//         const respuesta = await clientes;
//         return respuesta
//     } else {
//         await Promise.reject('Hubo un error...')
//     }
// }

// obtenerClientes()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));