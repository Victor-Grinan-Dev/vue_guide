<template>
  <base-card
    ><h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        name="checkbox"
        id="frontend"
        checked
        @change="setFilter"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        name="checkbox"
        id="backend"
        checked
        @change="setFilter"
      />
      <label for="backend">backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        name="checkbox"
        id="career"
        checked
        @change="setFilter"
      />
      <label for="career">career</label>
    </span>
  </base-card>
</template>
<script>
export default {
  emits: ["change-filters"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
      this.$emit("change-filters", updatedFilters);
    },
  },
};
</script>
<style>
@import "../../styles/coach-filter.css";
</style>
