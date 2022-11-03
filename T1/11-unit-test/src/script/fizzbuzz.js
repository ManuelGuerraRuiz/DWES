function fizzbuz(n){
    let result = '';
     if(n%3 === 0) result += 'fizz';
     if(n%5 === 0) result += 'buzz';
     if(n%15 === 0) result += 'fizzbuzz';
    
     return result || n;
}

export default fizzbuz;