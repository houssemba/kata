'use strict';

const Hello = require('../lib/hello');

describe('#Hello', function () {
    let hello;

    before(function () {
        hello = new Hello();
    });

    it('should return hello', function () {
        expect(hello.sayHello()).to.equal('Hello world !');
    });
});
