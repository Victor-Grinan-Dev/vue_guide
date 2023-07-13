<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <FriendsComponents key="a" />
  <FriendsComponents key="b" />
  <FriendsComponents key="c" />
</template>

<script>
import FriendsComponents from "./components/FriendsComponents.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import "./styles/styles.css";
export default {
  name: "App",
  components: {
    // HelloWorld,
    FriendsComponents,
  },
  data() {
    return {
      friends: [
        {
          id: "321",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "123",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul,
li {
  list-style: none;
}
</style>
