<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailLink">View Details</router-link>
    </div>
  </li>
</template>
<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      return `coaches/${this.id}/contact`;
    },
    coachDetailLink() {
      return `coaches/${this.id}`;
    },
  },
};
</script>
<style scope>
@import "../../styles/coach-item.css";
</style>
