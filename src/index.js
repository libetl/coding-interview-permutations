
               //0     1      2      3      4      5       6      7     8   9
const mapping = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'PQRS', 'TUV', 'WXYZ', '', '']

Array.prototype.flatMap = function(){ return this.reduce((acc, value) => acc.concat(value), [])}
Array.prototype.without = function(value){ return [...this.slice(0, this.indexOf(value)), ...this.slice(this.indexOf(value) + 1)]}

const numberOfDigitsIn = number => Math.max(0, Math.floor(Math.log10(number)) + 1)


               const numberRec = (digits, n) => {
                   if (n === 0) {
                       return [];
                   }
                   if (n === 1) {
                       return mapping[digits[0]].split('');
                   }
                   const array = mapping[digits[n-1]].split('');
                   const result = [];
                   for (const e of array) {
                       result.push([e].concat(numberRec(digits, n-1)).join(''));
                   }
                   return result;
               }

//This module should compute all the possible permutations for a number, which is translated into an array of digits
export default number => {
    const digits = [];
    const str = `${number}`;
    for (let i = 0; i < str.length; i++) {
        const digit = Number.parseInt(str[i]);
        if (mapping[digit] !== '')
            digits.push(str[i]);
    }
    return numberRec(digits, digits.length);

}