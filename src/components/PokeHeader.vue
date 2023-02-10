<template>
  <header>
    <div class="container">
      <nav>
        <h1>PokeSearch</h1>
        <div class="input-group">
          <input class="input-default" type="text" v-model="search" name="name" />
          <button class="btn-primary btn-search" type="button" v-on:click="searchPokemon">
            <img :src="searchIcon" alt="Lupe" />
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import searchIcon from "@/assets/search.svg";

export default {
  data() {
    return {
      search: "",
      searchIcon: searchIcon,
    };
  },
  methods: {
    searchPokemon() {
      this.$emit("search-pokemon", {
        search: this.search,
      });
    },
  },
  watch: {
    search(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  padding: 12px 0;
  background-color: white;
  display: flex;
  box-shadow: 4px 0px 12px black;
}
nav {
  height: 100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.input-group input {
  padding: 12px 60px 12px 6px;
  background-color: #b30000;
  color: white;
  font-weight: 500;
}
h1 {
  font-weight: 700;
  font-size: 1.5rem;
  color: #b30000;
}
@media (min-width: 425px) {
  header {
    padding: 20px 0;
  }
  nav {
    flex-direction: row;
  }
  nav .input-group {
    max-width: 220px;
  }
}
</style>
