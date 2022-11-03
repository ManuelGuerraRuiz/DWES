import test from 'ava';

import fizzbuz from '../../src/script/fizzbuzz';

test('Fizzbuzz = 1', t =>{
    const result = fizzbuz(1);
    t.is(result,1);
});

test('Fizzbuzz = 2', t =>{
    const result = fizzbuz(1);
    t.is(result,2);
});
