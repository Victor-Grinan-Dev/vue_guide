<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <change-counter></change-counter>
  </base-container>

  <base-container title="EXTRA COMPONENT">
    <extra-component></extra-component>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ExtraComponent from "./components/ExtraComponent.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ExtraComponent,
    ChangeCounter,
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
