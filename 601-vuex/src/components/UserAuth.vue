<template>
  <button @click="login" v-if="!isAuth">login</button>
  <button @click="logout" v-if="isAuth">logout</button>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["login", "logout"]),
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(["isAuth"]),
  },
};
</script>
