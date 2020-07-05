const add = require('./components/add');
const { multiply, description } = require('./components/multiply');

const resultTotal = add(1, 2, 3, 4);
const resultMultiply = multiply(1, 1, 1, 1, 11, 5)

console.log(resultTotal, description, resultMultiply)