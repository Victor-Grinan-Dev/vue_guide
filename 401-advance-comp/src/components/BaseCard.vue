<template>
  <div class="base-card">
    <header class="base-card__header" v-if="$slots.header">
      <slot name="header">
        <!-- <h2>Default</h2> -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [],
  mounted() {
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
.base-card {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.base-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
