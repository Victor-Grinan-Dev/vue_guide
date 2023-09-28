const app = Vue.createApp({
  data() {
    return {
      name: "Roberto",
      age: 40,
      cat_image: "./ca.jpeg",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
