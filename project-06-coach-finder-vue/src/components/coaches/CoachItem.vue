<template>
  <base-dialog :show="dialog" title="You must login first" @close="closeDialog">
    <base-button link to="/auth">Login</base-button>
  </base-dialog>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button v-if="isLoggedIn" mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button v-else mode="outline" @click="openDialog"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact"; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id; // /coaches/c1
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
