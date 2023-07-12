const app = Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: "",
    };
  },
  // watch: {
  //   newGoal(val) {
  //     console.log(val);
  //   },
  // },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = "";
    },
  },
});

app.mount("#user-goals");
