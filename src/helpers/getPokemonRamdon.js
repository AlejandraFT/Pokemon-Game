
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) );
    return pokemonsArr.map( (_ , index) => index + 1 );
}


const getPokemonRamdon = () =>{
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 );
    getPokemonsNames( mixPokemons.splice(0, 4) );
}

const getPokemonsNames = ( pokemons = [] ) =>{
    console.log(pokemons);
}

export default getPokemonRamdon;