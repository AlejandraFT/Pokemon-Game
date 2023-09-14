<template>
  <pokemon-game-vue/>
</template>

<script>

import PokemonGameVue from './pages/PokemonGame.vue'

export default {
  name: 'App',
  components: {
    PokemonGameVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
