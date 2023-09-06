<template>
  <header class="the-header">
    <nav>
      <router-link to="/"><h1>Find a Coach</h1></router-link>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn && isCoach">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-if="!isLoggedIn"><router-link to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
};
</script>
<style scoped>
@import "../../styles/header.css";
</style>
