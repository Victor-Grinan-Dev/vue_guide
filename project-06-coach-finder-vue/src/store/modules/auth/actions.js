
import { AUTH_SIGNUP_ENDPOINT } from "../../../ENV/fakeENV";
import { AUTH_SIGNIN_ENDPOINT } from "../../../ENV/fakeENV";

export default {
  async signin(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signin" });
  },

  async signup(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signup" });
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

    localStorage.setItem('coachesToken', responseData.idToken);
    localStorage.setItem('coachesUserId', responseData.localId);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      expiresIn: responseData.expiresIn,
    });
  },
  tryLogin(context){
    const token = localStorage.getItem('coachesToken');
    const userId = localStorage.getItem('coachesUserId');

    if (token && userId){
      context.commit('setUser', {
        token: token,
        userId: userId,
        expiresIn: null,
      })
    }

  },
  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      expiresIn: null,
    });
  },
};
