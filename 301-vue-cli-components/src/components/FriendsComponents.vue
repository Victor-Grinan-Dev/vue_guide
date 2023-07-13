<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button v-on:click="toggleDetails">
      {{ isVissible ? "Hide Details" : "Show Details" }}
    </button>
    <!-- <button @click="toogleDetails">
      {‌{ isVissible ? 'Hide' : 'Show' }} Details
    </button> -->
    <ul v-if="isVissible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendsComponent",
  data() {
    return {
      isVissible: false,
      friend: {
        id: "321",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isVissible = !this.isVissible;
    },
  },
  props: {
    details: Object,
  },
};
</script>

<style></style>
