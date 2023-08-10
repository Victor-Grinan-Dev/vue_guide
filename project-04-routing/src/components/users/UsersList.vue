<template>
  <div>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
    <div>
      this button is mandatory to leave this page.
      <button @click="saveChanges">Save changes</button>
    </div>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push("/teams");
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("@UsersList cmp beforeRouteEnter");
    console.log("-> moving to:", `"${to.path}."`, "from: ", `"${from.path}."`);
    next();
  },
  /**GUARD */
  beforeRouteLeave(to, from, next) {
    console.log("@UsersList cmp beforeRouteLeave");
    console.log("-> moving to:", `"${to.path}."`, "from: ", `"${from.path}."`);

    if (this.changesSaved) {
      next();
    } else {
      const userWantToLeave = confirm(
        "do you want to leave without saving the changes"
      );
      next(userWantToLeave);
    }
  },
  unmounted() {
    console.log("unmounted is called if you leave users");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
