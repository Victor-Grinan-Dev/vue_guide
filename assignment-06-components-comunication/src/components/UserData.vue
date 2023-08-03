<template>
  <form>
    <input type="text" placeholder="Username" v-model="username" />
    <br />
    <input type="number" placeholder="Age" v-model="age" />
    <br />
    <button @click="submitUser">Submit</button>
  </form>
</template>
<script>
export default {
  name: "user-data",
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    submitUser(e) {
      e.preventDefault();
      if (this.username && this.age > 0) {
        const data = {
          username: this.username,
          age: this.age,
        };
        console.log(data);
        this.$emit("data-entry", data);
        this.username = "";
        this.age = 0;
      } else {
        console.log("Incomplete data entry");
      }
    },
  },
};
</script>
