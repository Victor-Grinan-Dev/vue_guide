const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      tasks: [],
      isHidden: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
      this.userInput = "";
    },
    toogleTask() {
      this.isHidden = !this.isHidden;
    },
  },
}).mount("#assignment");
