<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li
        v-for="coach in filterdCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach - lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    filterdCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
