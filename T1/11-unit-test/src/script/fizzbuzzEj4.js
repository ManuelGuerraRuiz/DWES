function fizzBuzz(n, condition){
    let opcion = '';
    Object.entries(condition).forEach(([num, t]) => {
        if(n % num === 0) opcion += t;
    });

    return opcion || n;
}

export default fizzBuzz;