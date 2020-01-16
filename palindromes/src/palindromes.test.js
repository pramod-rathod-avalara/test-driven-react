const palindromes = require('./palindromes');

describe('palindromes() ', ()=> {

    it('Correctly identifies one word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
    });

});
