const app = Vue.createApp({
  data() {
    return {
      boxes: {
        A: false,
        B: false,
        C: false,
      },
    };
  },
  computed: {
    boxAClasses() {
      return {
        active: this.boxes.A,
      };
    },
  },
  methods: {
    selectBox(box) {
      this.boxes[box] = !this.boxes[box];
    },
  },
}).mount("#styling");
