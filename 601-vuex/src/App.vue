<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="restart">restart</button>
    <button @click="subsOne">substract 1</button>
    <button @click="addOne">add 1</button>
    <button @click="addFive">add 5</button>
    <button @click="subsFive">substract 5</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
  },

  methods: {
    restart() {
      this.$store.commit("reset");
    },
    addOne() {
      this.$store.commit("increment");
    },
    subsOne() {
      this.$store.commit("decrement");
    },
    addFive() {
      this.$store.commit("increase", { value: 5 });
    },
    subsFive() {
      this.$store.commit("decrease", { value: 5 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
