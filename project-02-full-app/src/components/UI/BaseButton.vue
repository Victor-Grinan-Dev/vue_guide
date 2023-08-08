<template>
  <button :type="type" :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: ["type", "mode"],
  inject: [],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  text-transform: capitalize;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

.danger {
  background-color: #571600;
  color: white;
  border: none;
}

.danger:hover,
.danger:active {
  background-color: #dd3700;
}
.static,
.static:hover,
.static:focus {
  background-color: #640032;
  color: white;
  border: none;
  cursor: default;
}
</style>
