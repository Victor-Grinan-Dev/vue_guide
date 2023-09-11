
import { AUTH_SIGNUP_ENDPOINT } from "../../../ENV/fakeENV";
import { AUTH_SIGNIN_ENDPOINT } from "../../../ENV/fakeENV";

export default {
  async signin(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signin" });

    // const response = await fetch(
    //   `${AUTH_SIGNIN_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`, //${context.rootGetters.token}
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );

    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(response.message || "Failed to authenticate");
    //   throw error;
    // }
    // context.commit("setUser", {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   expiresIn: responseData.expiresIn,
    // });
  },

  async signup(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signup" });
    // const response = await fetch(
    //   `${AUTH_SIGNUP_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   }
    // );

    // const responseData = await response.json();
    // if (!response.ok) {
    //   const error = new Error(response.message || "Failed to authenticate");
    //   throw error;
    // }

    // context.commit("setUser", {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   expiresIn: responseData.expiresIn,
    // });
  },

  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      expiresIn: null,
    });
  },

async auth(context, payload){
  const mode = payload.mode; 
  let url = `${AUTH_SIGNIN_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`;
  if (mode === 'signup'){
    url = `${AUTH_SIGNUP_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`;
    }
const response = await fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(response.message || "Failed to authenticate");
      throw error;
    }
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      expiresIn: responseData.expiresIn,
    });
}
};
