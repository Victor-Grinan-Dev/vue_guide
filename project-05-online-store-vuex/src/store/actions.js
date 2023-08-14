export default {
  //   addProductToCart(context, payload) {
  //     context.commit("addProductToCart", payload);
  //   },
  //   removeProductFromCart(context, payload) {
  //     context.commit("removeProductFromCart", payload);
  //   },
  //   login(context, payload) {
  //     context.commit("login", payload);
  //   },
  //   logout(context, payload) {
  //     context.commit("logout", payload);
  //   },
  addProductToCart(context, payload) {
    context.commit("addProductToCart", payload);
  },
  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
  login(context, payload) {
    context.commit("login", payload);
  },
  logout(context, payload) {
    context.commit("logout", payload);
  },
};
