<template>
  <li key="this.">
    <h2>{{ name }} {{ this.friendIsFavorite ? "✅" : "" }}</h2>
    <button v-on:click="toggleDetails">
      {{ isVissible ? "Hide Details" : "Show Details" }}
    </button>
    <span> - </span>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="isVissible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  name: "FriendsComponent",
  data() {
    return {
      isVissible: false,
      // friend: {
      //   id: "321",
      //   name: "Manuel Lorenz",
      //   phone: "01234 5678 991",
      //   email: "manuel@localhost.com",
      // },
      friendIsFavorite: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVissible = !this.isVissible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
  // props: {
  //   details: Object,
  // },
};
</script>

<style></style>
