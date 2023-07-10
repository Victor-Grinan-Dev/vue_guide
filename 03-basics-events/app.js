const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      textInput: "",
      text: "",
      confirmedText: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    subs() {
      this.counter--;
    },
    add5(number) {
      this.counter = this.counter + number;
    },
    subs5(number) {
      this.counter = this.counter - number;
    },
    setInput(event, arg) {
      this.textInput = event.target.value + " " + arg;
    },
    setText(event) {
      this.text = event.target.value;
    },
    confirmText() {
      this.confirmedText = this.text;
    },
    submitForm() {},
  },
});

app.mount("#events");
