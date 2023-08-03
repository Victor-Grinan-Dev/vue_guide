<template>
  <div>
    <h2>Active user task:</h2>
    <user-data @data-entry="registerUser" />
    <active-user
      v-for="user in users"
      v-bind:key="user.id"
      :id="user.id"
      :username="user.username"
      :age="user.age"
    />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
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
  <div> -->
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
import "./styles/styles.css";

export default {
  name: "App",
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      users: [
        {
          id: "0",
          username: "Victor Grinan",
          age: 39,
        },

        //         {
        //           id: "321",
        //           name: "Manuel Lorenz",
        //           phone: "01234 5678 991",
        //           email: "manuel@localhost.com",
        //           isFavorite: false,
        //         },
        //         {
        //           id: "123",
        //           name: "Julie Jones",
        //           phone: "09876 543 221",
        //           email: "julie@localhost.com",
        //           isFavorite: false,
        //         },
        //         {
        //           id: "213",
        //           name: "Victor Grinan",
        //           phone: "01234 78992",
        //           email: "victor@localhost.com",
        //           isFavorite: false,
        //         },
      ],
    };
  },
  methods: {
    //     toggleFavorite(friendId) {
    //       const identifiedFriend = this.friends.find(
    //         (friend) => friend.id === friendId
    //       );
    //       identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    //     },
    //     addFriend(newFriend) {
    //       this.friends.push(newFriend);
    //       console.log(this.$data);
    //     },
    //     deleteFriend(friendId) {
    //       this.friends = this.friends.filter((friend) => {
    //         return friend.id !== friendId;
    //       });
    //     },
    registerUser(userData) {
      console.log({ ...userData, id: this.users.length });
      this.users.push({ ...userData, id: `${this.users.length}` });
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arqial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul,
li {
  list-style: none;
} */
</style>
