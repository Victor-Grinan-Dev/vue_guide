export default {
  requests(state, _, _2, rootGetters) {
    //
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
    // return state.requests;
  },
  hasRequests(_, getters) {
    //this getters is reffering to itself, this file
    return getters.requests && getters.requests.length > 0;
  },
};
