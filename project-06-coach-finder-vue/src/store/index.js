import { createStore } from "vuex";
import coaches from "./modules/coaches/index";
import requests from "./modules/requests/index";
const store = createStore({
  modules: {
    coaches,
    requests,
  },
  state() {},
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
