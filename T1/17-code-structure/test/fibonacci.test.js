const { myFibonacci } = require('../src/controllers/fibonacci');

test('Los 12 números deberían ser: [1,2,3,5,8,13,21,34,55,89,144]', () => {
    expect(myFibonacci(12)).toStrictEqual([1,2,3,5,8,13,21,34,55,89,144]);
});