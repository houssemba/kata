'use strict';

function fizzBuzz (number) {
    let msg = '';
    if (number === 0) {
        return '0';
    }
    if (number % 3 === 0) {
    msg += 'Fizz';
    }
    if (number % 5 === 0) {
    msg += 'Buzz';
    }
    return msg === '' ? number.toString() : msg;;
}

module.exports = fizzBuzz;
