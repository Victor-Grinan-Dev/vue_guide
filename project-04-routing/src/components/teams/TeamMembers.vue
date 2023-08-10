<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["users", "teams"],
  //use props instead if you are using the component from another component as embed
  //for that set the props for this path {object} to true: {path: "/#", component: Foo, props:true}
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "Test",
      members: [],
    };
  },

  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId; //params is reffering to the parent router
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members || [];
      const selectedMembers = [];

      for (const member of members) {
        const seletedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(seletedUser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    this.loadTeamMembers(this.$route);
  },
  /** NAVIGATION GUARD */
  // beforeRouterUpdate(to, from, next) {
  //   console.log("before update in teams member cmp");
  //   console.log(to, from);
  //   this.loadTeamMembers(to.params.teamId);
  //   next();
  // },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
