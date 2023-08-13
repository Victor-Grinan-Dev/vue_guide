<template>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>

  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <change-counter></change-counter>
  </base-container>

  <base-container title="EXTRA COMPONENT" v-if="isAuth">
    <extra-component></extra-component>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ExtraComponent from "./components/ExtraComponent.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ExtraComponent,
    ChangeCounter,
    UserAuth,
  },
  computed: {
    ...mapGetters(["isAuth"]),
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
