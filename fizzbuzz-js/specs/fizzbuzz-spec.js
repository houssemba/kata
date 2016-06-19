'use strict';

const fizzBuzz = require('../kata/fizzbuzz');

describe('#FizzBuzz', function () {
    it('should return Fizz if the number is divisible by 3 ', function () {
        let result = fizzBuzz(3);
        expect(result).to.equal('Fizz');
    });

    it('should return Buzz if the number is divisible by 5', function () {
        let result = fizzBuzz(5);
        expect(result).to.equal('Buzz');
    });

    it('should return "0"', function () {
        let result = fizzBuzz(0);
        expect(result).to.equal('0');
    });

    it('should print the number if the number is not divisible by 3 not 5', function () {
        let result = fizzBuzz(8);
        expect(result).to.equal('8');
    });

    it('should return FizzBuzz if the number is divisible by 3 and 5 at the same time', function () {
        let result = fizzBuzz('15');
        expect(result).to.equal('FizzBuzz');
    });
});
