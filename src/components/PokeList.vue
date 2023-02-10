<template>
  <ul v-if="pokemonsList.length">
    <li v-for="(pokemon, index) in pokemonsList.sort((a, b) => a.order - b.order)" v-bind:key="index">
      <img :src="pokemon.image" :alt="pokemon.name" />
      <div class="profile">
        <h2>{{ pokemon.name }}</h2>
        <div class="stats">
          <p style="text-shadow: 0px 0px 1px #19a119bd">HP: {{ pokemon.hp }}</p>
          <p style="text-shadow: 0px 0px 1px #ff0000">ATTACK: {{ pokemon.attack }}</p>
          <p style="text-shadow: 0px 0px 1px #7c7cffb3">DEFENSE: {{ pokemon.defense }}</p>
          <p style="text-shadow: 0px 0px 1px #f0b100">SPEED: {{ pokemon.speed }}</p>
          <p style="text-shadow: 0px 0px 1px #e254e2">SPECIAL ATTACK: {{ pokemon["special-attack"] }}</p>
          <p style="text-shadow: 0px 0px 1px mediumblue">SPECIAL DEFENSE: {{ pokemon["special-defense"] }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      pokemonsList: this.pokemons,
    };
  },
  props: {
    pokemons: Array,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px 12px;
  padding-bottom: 40px;
}

li {
  min-width: 220px;
  height: 320px;
  border: 2px solid red;
  border-radius: 8px;
  padding: 20px 0;
  box-shadow: 0px 0px 10px 2px red;
  background-color: white;
  transition: 0.5s;
  animation: show_right ease 1s;
  display: flex;
  flex-direction: column;
}

li:hover {
  box-shadow: 0px 0px 14px 2px red;
  scale: 1.01;
}
.profile {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}
.profile h2 {
  padding: 4px 0;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  box-shadow: 0px 0px 10px gray;
}
.profile .stats {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stats {
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
.profile h2::first-letter {
  text-transform: capitalize;
}

li img {
  width: 100%;
  height: 50%;
}

@media (min-width: 520px) {
  ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    width: calc(90% / 2);
  }
}

@media (min-width: 780px) {
  li {
    width: calc(90% / 3);
  }
}
@keyframes show_right {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
