const { test, expect } = require('@jest/globals');

const myInput = require('./asyncCode');
console.log(myInput);

test('the data is "peanut butter"', done => {
    function myData(arg) {
        try {
        expect(arg).toBe('peanut butter');
        done();
    } catch (error) {
        done(error);
    }
    }

    myInput(myData);
});