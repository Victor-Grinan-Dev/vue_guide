import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
const counterModule = {
  //namespaced true force all the app to use namespace specifications to access the state
  //the name spece is the name that you give in the store.module. in this case "counter"
  namespaced: true,
  //the state of each modules are local, you cant access auth from here
  //you might need the rootState if you want to acces it with context... try to group your state in need.
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    //ALOWS ASYNCRONOUS FUNCTIONS:
    reset(context) {
      console.log(context); // in context is commit, dispatcth, getters and state.
      //in case you need extra functionalities that involve those data pieces.
      //Do not manipulate the state from here plz.

      console.log(context.getters.finalCounter);
      console.log(context.getters.normalizeCounter);

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
};
// const authModule = {};
const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isAuth: false,
    };
  },
  actions: {
    //auth
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },

  mutations: {
    //DO NOT DO ASYNCRONOUS FUNCTIONS HERE! ...use action instead for that.
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
