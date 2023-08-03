<template>
  <div>
    <button>Add New friend</button>
    <form @submit="submitForm">
      <input type="text" placeholder="Full Name" v-model="newFriendName" />
      <br />
      <input type="email" placeholder="Email" v-model="newFriendEmail" />
      <br />
      <input type="tel" placeholder="Phone Number" v-model="newFriendPhone" />
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  emits: ["submit-friend"],

  name: "NewFriend",
  data() {
    return {
      newFriendName: "",
      newFriendEmail: "",
      newFriendPhone: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      const friendObj = {
        id: this.newFriendName,
        name: this.newFriendName,
        email: this.newFriendEmail,
        phone: this.newFriendPhone,
        isFavorite: false,
      };
      console.log(friendObj);
      this.$emit("submit-friend", friendObj);
      this.newFriendName = "";
      this.newFriendEmail = "";
      this.newFriendPhone = "";
    },
  },
};
</script>
