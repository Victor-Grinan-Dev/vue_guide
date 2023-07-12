const app = Vue.createApp({
  data() {
    return {
      htmlCode: "<span>There is html here</span>",
      courseGoal: "Learn Vue",
      courseGoalA: "Get to learn Vue by doing",
      courseGoalB: "Master Vue in 4 weeks",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      if (Math.random() < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    randomNumber() {
      return Math.ceil(Math.random() * 12);
    },
  },
}).mount("#user-goal");
