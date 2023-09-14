<template>
    <h1>¿Quién es este pokémon?</h1>

    <pokemon-picture :pokemonId="4" :showPokemon="false" />

    <pokemon-options />

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonRamdon from '@/helpers/getPokemonRamdon'

console.log( getPokemonRamdon() );

export default {
    components:{
        PokemonPicture,
        PokemonOptions
    }
}
</script>

<style>

</style>