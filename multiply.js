console.log('multiply mudule')

const add = require('./add');
const newText = add.value + ' plus jakis nowy tekst'
console.log(newText)

module.exports = {
    value: 'from multiply',
}