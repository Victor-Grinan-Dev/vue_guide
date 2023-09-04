// import API_KEY from "../../../ENV/fakeENV";
import { AUTH_SIGNUP_ENDPOINT } from "../../../ENV/fakeENV";
import { AUTH_SIGNIN_ENDPOINT } from "../../../ENV/fakeENV";

export default {
  async signin(context, payload) {
    const response = await fetch(
      `${AUTH_SIGNIN_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`, //${context.rootGetters.token}
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

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.token,
      userId: responseData.userId,
      expiresIn: responseData.expiresIn,
    });
  },

  async signup(context, payload) {
    const response = await fetch(
      `${AUTH_SIGNUP_ENDPOINT}AIzaSyDQQW0nJeyW47JZg9tF8SCqPEHRPM-T5k4`,
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

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.token,
      userId: responseData.userId,
      expiresIn: responseData.expiresIn,
    });
  },
};
