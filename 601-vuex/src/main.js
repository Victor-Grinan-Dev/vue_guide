import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    reset(state) {
      state.counter = 0;
    },
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    decrease(state, payload) {
      state.counter = state.counter - payload.value;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount("#app");
