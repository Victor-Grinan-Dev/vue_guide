<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <FriendsComponents
        name="Manuel Lorenz"
        phone-number="01234 78992"
        email-address="manuel@localhost.com"
        isFavorite="false"
      />
      <FriendsComponents
        name="Julie Jones"
        phone-number="01234 78992"
        email-address="julie@localhost.com"
        isFavorite="false"
      />
      <FriendsComponents
        name="Victor Grinan"
        phone-number="01234 78992"
        email-address="victor@localhost.com"
        isFavorite="false"
      />
    </ul>
  </div>
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
