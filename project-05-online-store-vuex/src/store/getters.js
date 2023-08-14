export default {
  finalCounter(state) {
    return state.counter;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  products(state) {
    return state.products;
  },
  cart(state) {
    return state.cart;
  },
  cartTotal(state) {
    return state.cart.toFixed(2);
  },
};
