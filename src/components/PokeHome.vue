<template>
  <PokeHeader v-on:search-pokemon="searchPokemonSpecies" />
  <main>
    <div class="container">
      <div class="nothing-message" v-if="pokemons.length <= 0 && !load">Nothing here yet... : (</div>
      <PokeList v-if="pokemons.length" :pokemons="pokemons" />
    </div>
    <PokeLoad v-if="load" />
  </main>
</template>

<script>
import instance from "@/server/axios";
import PokeHeader from "./PokeHeader.vue";
import PokeList from "./PokeList.vue";
import PokeLoad from "./PokeLoad.vue";

import { toast } from "vue3-toastify";

export default {
  components: {
    PokeHeader,
    PokeList,
    PokeLoad,
  },
  data() {
    return {
      pokemonsNames: [],
      pokemons: [],
      load: false,
    };
  },
  methods: {
    async searchPokemonSpecies({ search }) {
      if (search && typeof search === "string") {
        this.load = true;
        this.pokemons = [];
        this.pokemonsNames = [];
        try {
          toast.clearAll();
          const specie = await instance.get(`/pokemon-species/${search.toLowerCase().trim()}`);
          const { data: specieData } = specie;
          const chain = await this.searchPokemonEvoChain(specieData.evolution_chain.url);
          const { data: chainData } = chain;
          this.setPokemonsToSearch(chainData.chain);
        } catch (error) {
          toast.error(error.response.data);
        }
      }
      this.load = false;
    },
    async searchPokemonEvoChain(url) {
      this.load = true;
      try {
        const response = await instance.get(url);
        return response;
      } catch (error) {
        toast.error(error.response.data);
        console.log(error);
      }
      this.load = false;
    },
    chainLoop(evo) {
      this.pokemonsNames.push({
        name: evo.species.name,
      });
    },
    setPokemonsToSearch(chain) {
      this.chainLoop(chain);
      chain.evolves_to.forEach((evo, index, arr) => {
        this.chainLoop(evo);
        if (arr.length) {
          evo.evolves_to.forEach((evo, index, arr) => {
            if (arr.length) {
              this.chainLoop(evo);

              evo.evolves_to.forEach((evo, index, arr) => {
                if (arr.length) {
                  this.chainLoop(evo);

                  evo.evolves_to.forEach((evo, index, arr) => {
                    if (arr.length) {
                      this.chainLoop(evo);
                      console.log(evo.evo.evolves_to.length);
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    async searchPokemonsStats(name) {
      this.load = true;
      try {
        const response = await instance.get(`/pokemon/${name.toLowerCase().trim()}`);
        const { data } = response;

        const pokeInfo = {
          image: data.sprites.other.dream_world.front_default,
          order: data.order,
          name: data.name,
        };

        data.stats.forEach(({ base_stat, stat }) => {
          pokeInfo[`${stat.name}`] = base_stat;
        });

        this.pokemons.push(pokeInfo);
      } catch (error) {
        toast.error(error.response.data);
        console.log(error);
      }
      this.load = false;
    },
  },
  watch: {
    pokemonsNames: {
      handler(val) {
        Object.values(val).forEach(async ({ name }) => {
          await this.searchPokemonsStats(name);
        });
      },
      deep: true,
    },
  },
};
</script>

<style>
main {
  margin-top: 130px;
}

.nothing-message {
  width: 90%;
  font-size: 1.4rem;
  color: #0000005e;
  font-weight: 600;
  text-align: center;
  padding-left: 20px;
  margin-top: 200px;
  animation: show_right ease 1s;
}

@keyframes show_right {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
