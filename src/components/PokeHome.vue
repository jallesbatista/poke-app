<template>
  <PokeHeader v-on:search-pokemon="searchPokemonSpecies" />
  <main>
    <div class="container">
      <div class="nothing-message" v-if="pokemons.length <= 0">Nada por enquanto...</div>
      <PokeList v-if="pokemons.length" :pokemons="pokemons" />
    </div>
  </main>
</template>

<script>
import instance from "@/server/axios";
import PokeHeader from "./PokeHeader.vue";
import PokeList from "./PokeList.vue";
export default {
  components: {
    PokeHeader,
    PokeList,
  },
  data() {
    return {
      pokemonsNames: [],
      pokemons: [],
    };
  },
  methods: {
    async searchPokemonSpecies({ search }) {
      this.pokemons = [];
      this.pokemonsNames = [];
      if (search && typeof search === "string") {
        try {
          const specie = await instance.get(`/pokemon-species/${search.toLowerCase().trim()}`);
          const { data: specieData } = specie;
          const chain = await this.searchPokemonEvoChain(specieData.evolution_chain.url);
          const { data: chainData } = chain;
          this.setPokemonsToSearch(chainData.chain);
        } catch (error) {
          console.log(error);
          return;
        }
      }
    },
    async searchPokemonEvoChain(url) {
      try {
        const response = await instance.get(url);
        return response;
      } catch (error) {
        console.log(error);
      }
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
        console.log(error);
      }
    },
  },
  watch: {
    pokemonsNames: {
      handler(val) {
        Object.values(val).forEach(({ name }) => {
          this.searchPokemonsStats(name);
        });
      },
      deep: true,
    },
  },
};
</script>

<style>
main {
  margin-top: 120px;
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
