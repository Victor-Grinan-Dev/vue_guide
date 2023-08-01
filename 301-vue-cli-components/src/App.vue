<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <new-friend-component @submit-friend="addFriend" />
    <ul>
      <friends-components
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavorite"
        @delete-friend="deleteFriend"
      />
    </ul>
  </div>
</template>

<script>
import FriendsComponents from "./components/FriendsComponents.vue";
import NewFriendComponent from "./components/NewFriend.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import "./styles/styles.css";
export default {
  name: "App",
  components: {
    // HelloWorld,
    FriendsComponents,
    NewFriendComponent,
  },
  data() {
    return {
      friends: [
        {
          id: "321",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: "123",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavorite: false,
        },
        {
          id: "213",
          name: "Victor Grinan",
          phone: "01234 78992",
          email: "victor@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addFriend(newFriend) {
      this.friends.push(newFriend);
      console.log(this.$data);
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter((friend) => {
        return friend.id !== friendId;
      });
    },
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
