exports.add = (a, b) => {
    return a + b
}
exports.minus = (a, b) => {
    return a - b
}
exports.multiply = (a, b) => {
    return a * b
}
exports.divide = (a, b) => {
    return a / b
}
exports.reminder = (a, b) => {
    return a % b
}




// si no le pones el exports.funcName, abajo se exportan
/*
    const add = (a, b) => {
        return a + b
    }
    const minus = (a, b) => {
        return a - b
    }

    module.exports = { add, minus, multiply, divide, reminder }
*/