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
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  /* supported props types: 
        String
        Number
        Boolean
        Array
        Object
        Date
        Function
        Symbol
 */
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // default: "0",
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
      default: false,
    },
  },
  name: "FriendsComponent",
  data() {
    return {
      isVissible: false,
      friendIsFavorite: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVissible = !this.isVissible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite");
    },
  },
};
</script>

<style></style>
