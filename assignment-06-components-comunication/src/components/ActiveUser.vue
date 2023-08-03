<template>
  <h3>{{ id }} - {{ username }} - {{ age }}</h3>
</template>
<script>
export default {
  name: "active-user",
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  emits: [],
  data() {
    return {
      //   isVissible: false,
      //   friendIsFavorite: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isVissible = !this.isVissible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
