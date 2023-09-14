
import { AUTH_SIGNUP_ENDPOINT } from "../../../ENV/fakeENV";
import { AUTH_SIGNIN_ENDPOINT } from "../../../ENV/fakeENV";

let timer;

export default {
  async signin(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signin" });
  },

  async signup(context, payload) {
    context.dispatch("auth", { ...payload, mode: "signup" });
  },

  async auth(context, payload){
    // console.log('payload in auth', payload) //ok
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

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('coachesToken', responseData.idToken);
    localStorage.setItem('coachesUserId', responseData.localId);
    localStorage.setItem('coachesExpiration', expirationDate);

    timer = setTimeout(function(){
      context.dispatch('logout')
    },expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  tryLogin(context){
    const token = localStorage.getItem('coachesToken');
    const userId = localStorage.getItem('coachesUserId');
    const tokenExpiration = localStorage.getItem('coachesExpiration');
    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn <= 2){
      return;
    }

    timer = setTimeout(function(){
      context.dispatch('autoLogout');
    }, expiresIn)

    if (token && userId){
      context.commit('setUser', {
        token: token,
        userId: userId,
        expiresIn:expiresIn,
      })
    }
  },

  logout(context) {

    localStorage.removeItem('coachesToken');
    localStorage.removeItem('coachesUserId');
    localStorage.removeItem('coachesExpiration');

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },

  autoLogout(context){
    context.commit('logout');
    context.commit('setAutoLogout');

  }
};
