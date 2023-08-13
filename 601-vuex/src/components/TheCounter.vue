<template>
  <!--<h3><span>Final counter Value: </span>{{ counter }}</h3>-->
  <h3><span>Final counter Value: </span>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter() {
    // return this.$store.getters["counter/finalCounter"];
    // },
    // ...mapGetters("finalCounter"),//without namespace
    ...mapGetters("counter", ["finalCounter"]), //with namespace
  },
};
</script>
