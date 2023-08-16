import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import productsModule from "./modules/Products";
import cartModule from "./modules/cart";

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },

  actions: actions,

  getters: getters,

  mutations: mutations,
});

export default store;
