import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index";

// import { API_KEY } from "../ENV/fakeENV.js";

const store = createStore({
  // state() {
  //   return {
  //     token: API_KEY,
  //   };
  // },
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
  // getters: {
  //   token(state) {
  //     return state.token;
  //   },
  // },
});

export default store;
