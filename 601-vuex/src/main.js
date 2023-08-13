import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    //ALOWS ASYNCRONOUS FUNCTIONS:
    reset(context) {
      setTimeout(() => {
        context.commit("reset", 0);
      }, 1000);
    },

    increment(context) {
      setTimeout(() => {
        context.commit("increment", 1);
      }, 1000);
    },

    increase(context, payload) {
      setTimeout(() => {
        context.commit("increase", payload);
      }, 1000);
    },
    decrement(context) {
      setTimeout(() => {
        context.commit("decrement", 1);
      }, 1000);
    },

    decrease(context, payload) {
      setTimeout(() => {
        context.commit("decrease", payload);
      }, 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizeCounter(_, getters) {
      const finalCounter = getters.finalCounter * 3;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },

  mutations: {
    //DO NOT DO ASYNCRONOUS FUNCTIONS HERE! ...use action instead for that.
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
