const app = Vue.createApp({
  data() {
    return {
      users: {
        user1: false,
        user2: false,
      },
      hideParr: false,
      userInput: "",
      parrStatus: "",
      colorInput: "",
    };
  },
  watch: {
    userInput(value) {
      if (value === "user1" || value === "user2") {
        (this.user1 = false), (this.user2 = false), (this.users[value] = true);
      }
    },
  },
  computed: {
    boxAClasses() {
      return {
        active: this.boxes.A,
      };
    },
  },
  methods: {
    toggle() {
      //   this.hideParr = !this.hideParr;
      if (this.parrStatus === "visible") {
        this.parrStatus = "hidden";
      } else {
        this.parrStatus = "visible";
      }
    },
  },
}).mount("#assignment");
