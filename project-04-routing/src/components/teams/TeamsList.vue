<template>
  <div>
    <!-- <button @click="navigateToUsers">to users</button> -->
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
  </div>
</template>

<script>
import TeamsItem from "./TeamsItem.vue";

export default {
  components: {
    TeamsItem,
  },
  inject: ["teams"],
  methods: {
    navigateToUsers() {
      this.$router.push("/users");
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
