
               //0     1      2      3      4      5       6      7     8   9
const mapping = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'PQRS', 'TUV', 'WXYZ', '', '']

Array.prototype.flatMap = function(){ return this.reduce((acc, value) => acc.concat(value), [])}
Array.prototype.without = function(value){ return [...this.slice(0, this.indexOf(value)), ...this.slice(this.indexOf(value) + 1)]}

const numberOfDigitsIn = number => Math.max(0, Math.floor(Math.log10(number)) + 1)


//This module should compute all the possible permutations for a number, which is translated into an array of digits
export default number => {throw new Error('To be implemented')}