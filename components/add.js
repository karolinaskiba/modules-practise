const addNumbers = (...numbers) => {
    return numbers.reduce((total, current) => total + current);
}
module.exports = addNumbers;