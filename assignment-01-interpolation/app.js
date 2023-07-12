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

  //  <!-- 3) Output your age + 5 -->
  //  <!-- 4) Output a random number (0 to 1) -->
  //    <!-- 5) Display some image you found via Google -->
  //  <!-- 6) Prepopulate the input field with your name via the "value" attribute -->
}).mount("#assignment");
