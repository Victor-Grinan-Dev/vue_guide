<template>
  <p>Asyncronous (click and wait)</p>

  <!--
  <button @click="restart">restart</button>
  <button @click="subsOne">substract 1</button>
  <button @click="addOne">add 1</button>
  <button @click="addFive">add 5</button>
  <button @click="subsFive">substract 5</button>
-->

  <button @click="restart">restart</button>
  <button @click="addOne">add 1</button>
  <button @click="decrement">substract 1</button>
  <button @click="increase({ value: 5 })">add 5</button>
  <button @click="decrease({ value: 5 })">substract 5</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // restart() {
    //   this.$store.dispatch("reset");
    // },
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    // subsOne() {
    //   this.$store.dispatch("decrement");
    // },
    // addFive() {
    //   this.$store.dispatch("increase", { value: 5 });
    // },
    // subsFive() {
    //   this.$store.dispatch("decrease", { value: 5 });
    // },
    // ...mapActions(["reset", "increment", "decrement", "increase", "decrease"]),

    /* YOU CAN CHANGE THE NAME  */
    ...mapActions({
      restart: "counter/reset",
      addOne: "counter/increment",
      decrement: "counter/decrement",
      increase: "counter/increase",
      decrease: "counter/decrease",
    }),
  },
};
</script>
