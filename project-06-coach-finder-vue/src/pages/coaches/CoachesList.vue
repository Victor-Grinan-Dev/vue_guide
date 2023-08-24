<template>
  <coach-filter @change-filters="setFilters"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filterdCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
          {{ coach.firstName }}
        </coach-item>
      </ul>
      <h3 v-else>no coaches found</h3></base-card
    >
  </section>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filterdCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      console.log(updatedFilters);
      this.activeFilters = updatedFilters;
    },
  },
};
</script>
<style scoped>
@import "../../styles/coaches-list.css";
</style>
