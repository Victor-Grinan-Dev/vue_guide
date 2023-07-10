const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert!!!");
    },
    confirmText() {
      this.confirmedText = this.text;
      this.text = "";
    },
  },
}).mount("#assignment");
