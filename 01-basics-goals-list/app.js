const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});
window.onload(app.mount("#app"));
