const fizzBuzz = require('./app');

describe('fizzBuzz()', () => {

    it('returns "FizzBuzz" for multiples of 3 and 5', ()=>{
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

});