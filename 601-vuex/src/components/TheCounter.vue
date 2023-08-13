<template>
  <h3><span>Final counter Value: </span>{{ counter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>
