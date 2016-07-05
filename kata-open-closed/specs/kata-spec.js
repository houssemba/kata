'use strict';

const kata = require('../lib/kata');

describe('#OpenClosedKata', function () {

    it('should return the number', function () {
        const result = kata(2);
        expect(result).to.equal(2);
    });

    it('should return "Trois" if the number of params is multiple of 3', function () {
        const result = kata(3 * 2);
        expect(result).to.equal('Trois');
    });

    it('should return "Cinq" if the number of params is multiple of 5', function () {
        const result = kata(5 * 2);
        expect(result).to.equal('Cinq');
    });

    it('should return "Sept" if the number of params is multiple of 7', function () {
        const result = kata(7);
        expect(result).to.equal('Sept');
    });

    it('should return "CinqSept" if the number is multiple of 5 and 7', function () {
        const result = kata(5 * 7);
        expect(result).to.equal('CinqSept');
    });

    it('should return "Huit!" if the number equal to 8', function () {
        const result = kata(8);
        expect(result).to.equal('Huit!');
    });

    it('should return "TROISCINQ" if the number is multiple of 3 and 5', function () {
        const result = kata(3 * 5);
        expect(result).to.equal('TROISCINQ');
    });

    it('should return the number if the number is multiple of 3 et 7', function () {
        const result = kata(3 * 7);
        expect(result).to.equal(21);
    });
});
