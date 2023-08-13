<template>
  <base-container title="Vuex">
    <p>Asyncronous (click and wait)</p>
    <the-counter></the-counter>
    <button @click="restart">restart</button>
    <button @click="subsOne">substract 1</button>
    <button @click="addOne">add 1</button>
    <button @click="addFive">add 5</button>
    <button @click="subsFive">substract 5</button>
  </base-container>
  <base-container title="EXTRA COMPONENT">
    <extra-component></extra-component>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ExtraComponent from "./components/ExtraComponent.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ExtraComponent,
  },

  methods: {
    restart() {
      this.$store.dispatch("reset");
    },
    addOne() {
      this.$store.dispatch("increment");
    },
    subsOne() {
      this.$store.dispatch("decrement");
    },
    addFive() {
      this.$store.dispatch("increase", { value: 5 });
    },
    subsFive() {
      this.$store.dispatch("decrease", { value: 5 });
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
