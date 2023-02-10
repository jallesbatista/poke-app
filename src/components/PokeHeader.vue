<template>
  <header>
    <div class="container">
      <nav>
        <a href="#"
          ><img :src="require('@/assets/logo.png')" alt="Logo" />
          <h1>PokeSearch</h1></a
        >
        <form class="input-group">
          <input placeholder="Search pokemon..." class="input-default" type="text" v-model="search" name="name" />
          <button class="btn-primary btn-search" type="submit" v-on:click.prevent="searchPokemon">
            <img :src="searchIcon" alt="Lupe" />
          </button>
        </form>
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
  watch: {},
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 12px 0;
  background-color: white;
  display: flex;
  box-shadow: 0px 0px 12px black;
  animation: show_up 1s ease;
  z-index: 3;
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
nav a img {
  width: 32px;
}
nav a {
  display: flex;
  align-items: center;
}
.input-group input {
  padding: 12px 60px 12px 6px;
  background-color: #b30000;
  color: white;
  font-weight: 500;
  border: 2px solid #b30000;
  transition: 0.5s;
}
.input-group input:focus {
  background-color: #e60000;
}
.input-group input::placeholder {
  color: white;
  font-weight: 400;
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

@keyframes show_up {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
