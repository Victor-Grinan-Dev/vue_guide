const app = Vue.createApp({
  data() {
    return {
      result: 0,
      status: "🤖 Hello, lets play",
      activeBtns: true,
    };
  },
  computed: {
    // result() {
    //     return this.result
    //   },
  },
  watch: {
    result() {
      if (this.result > 0 && this.result < 37) {
        this.status = "🤖 Not there yet";
      } else if (this.result > 37) {
        this.activeBtns = false;
        this.status = "🤖 number is passed already, you loose!!";
        const data = this;
        setTimeout(() => {
          data.result = 0;
          data.status = "🤖 lets play again!";
          data.activeBtns = true;
        }, 5000);
      } else if (this.result === 37) {
        this.status = "🤖 congrats you found the secret number!";
        this.activeBtns = false;
        const data = this;
        setTimeout(() => {
          data.result = 0;
          data.status = "🤖 lets play again!";
          data.activeBtns = true;
        }, 5000);
      }
    },
  },
  methods: {
    add(number) {
      if (this.activeBtns) {
        this.result = this.result + number;
      }
    },
  },
}).mount("#assignment");
