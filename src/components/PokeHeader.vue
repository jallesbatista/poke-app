<template>
  <header>
    <div class="header-wrapper">
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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 8%);
  transition: 0.5s;
  z-index: 999;
}

header[top-position] {
  background-color: transparent;
  height: 110px;
  justify-content: inherit;
  align-items: inherit;
}
header .header-wrapper {
  background-color: white;
  display: flex;
  box-shadow: 0px 0px 12px black;
  width: 90%;
  transition: 1s;
  margin-top: -100px;
  border-radius: 8px;
  height: 200px;
  max-width: 500px;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 0px 20px;
  z-index: 3;
  transition: 0.5s;
}
header[top-position] .header-wrapper {
  width: 100%;
  border-radius: 0px;
  height: 110px;
  max-width: none;
  padding: 20px 0px;
}

nav {
  height: 100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

header[top-position] nav {
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
  header[top-position] nav {
    flex-direction: row;
    justify-content: space-between;
  }
  header[top-position] nav .input-group {
    max-width: 300px;
  }

  header[top-position] {
    height: 80px;
  }
  header[top-position] .header-wrapper {
    height: 80px;
    padding: 0px;
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

@keyframes show_up {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
