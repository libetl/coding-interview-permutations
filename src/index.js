
               //0     1      2      3      4      5       6      7     8   9
const mapping = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'PQRS', 'TUV', 'WXYZ', '', '']

Array.prototype.flatMap = function(){ return this.reduce((acc, value) => acc.concat(value), [])}
Array.prototype.without = function(value){ return [...this.slice(0, this.indexOf(value)), ...this.slice(this.indexOf(value) + 1)]}
Array.prototype.withoutArrayContaining = function(value){ return this.without(this.find(array => array.includes(value)))}
const numberOfDigitsIn = number => Math.max(0, Math.floor(Math.log10(number)) + 1)

const rangeOfLetters = number => number.toString().split('').map(digit => mapping[digit].split(''))

const permutations = (arraysOfLetters, length, prefix = []) => !length ? [prefix.join('')] :
    arraysOfLetters.map(arrayOfLetter => arrayOfLetter.map(
        elem => permutations( arraysOfLetters.withoutArrayContaining(elem),  length - 1, [...prefix, elem])
            .flatMap()).flatMap()).flatMap()


export default number => permutations(rangeOfLetters(number), numberOfDigitsIn(number)).filter(result => result)