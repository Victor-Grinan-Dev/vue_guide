<template>
  <h3><span>Normalized counter value:</span>{{ counter }}</h3>
  <h4>(min = 0, max = 100, result final counter * 3 )</h4>
  all comp have access to ther same data and the same function:
  <div>
    <button @click="restart">restart</button>
    <button @click="subsOne">substract 1</button>
    <button @click="addOne">add 1</button>
    <button @click="addFive">add 5</button>
    <button @click="subsFive">substract 5</button>
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizeCounter;
    },
  },
  methods: {
    restart() {
      this.$store.commit("reset");
    },
    addOne() {
      this.$store.commit("increment");
    },
    subsOne() {
      this.$store.commit("decrement");
    },
    addFive() {
      this.$store.commit("increase", { value: 5 });
    },
    subsFive() {
      this.$store.commit("decrease", { value: 5 });
    },
  },
};
</script>
