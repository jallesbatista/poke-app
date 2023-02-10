<template>
  <PokeHeader v-on:search-pokemon="searchPokemon" />
  <main>
    <div class="container">
      <div class="nothing-message" v-if="pokemons.length <= 0">Nada por enquanto...</div>
    </div>
  </main>
</template>

<script>
import instance from "@/server/axios";
import PokeHeader from "./PokeHeader.vue";
export default {
  components: {
    PokeHeader,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    async searchPokemon({ search }) {
      try {
        const response = await instance.get(`/pokemon/${search.toLowerCase()}`);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
</script>

<style>
main {
  margin-top: 20px;
}
.nothing-message {
  width: 90%;
  font-size: 1.4rem;
  color: #0000005e;
  font-weight: 600;
  text-align: center;
  padding-left: 20px;
  margin-top: 80px;
}
</style>
