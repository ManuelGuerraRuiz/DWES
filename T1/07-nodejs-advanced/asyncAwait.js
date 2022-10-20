import fetch from 'node-fetch';

const machamp = fetch("https://pokeapi.co/api/v2/pokemon/machamp");
const golem = fetch("https://pokeapi.co/api/v2/pokemon/golem");
const alakazam = fetch("https://pokeapi.co/api/v2/pokemon/alakazam");

/*Promise.all([machamp, golem, alakazam])
    .then(responses =>{
        responses.forEach(i => {
            i.json().then(pokemon => {
                console.log(pokemon.name);
            })
        });
    });*/
      
    const responses = await Promise.all([machamp, golem, alakazam])

    const array = responses.map(async r =>{
        const pokemon =  await r.json();
        return pokemon.name;

    });

    const resultado = await Promise.all(array);

    console.log(resultado);
    

  
    
      
