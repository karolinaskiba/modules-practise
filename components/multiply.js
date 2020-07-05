const multiply = (...numbers) => {
    return numbers.reduce((product, factor) => product * factor)
}

// module.exports.description = 'iloczyn to wynik mnożenia przez siebie czynników'
// module.exports.multiply = multiply;

module.exports = {
    multiply,
    description: 'iloczyn to wynik mnożenia przez siebie czynników'
}