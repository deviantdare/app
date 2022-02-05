import { Storage } from "@capacitor/storage";
import axios from "axios";
import { jwtDecrypt } from "../../shared/helper";
import { Commit } from "vuex";

const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    tokenExp: "",
    userid: "",
    email: "",
  },
  loginStatus: "",
});

const getters = {
  getLoginStatus(state: any) {
    return state.loginStatus;
  },
  getAuthData(state: any) {
    return state.authData;
  },
};

const actions = {
  async loginUser({ commit }: { commit: Commit }, payload: any) {
    console.log(payload);
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      payload
    );
    if (response.status == 200 || response.status == 201) {
      await Storage.set({
        key: "token",
        value: response.data.token,
      });
      await Storage.set({
        key: "refreshToken",
        value: response.data.refreshToken,
      });
      commit("saveAuthToken", response.data);
      commit("saveLoginStatus", "success");
    } else {
      commit("saveLoginStatus", "failed");
    }
  },
  async logoutUser({ commit }: { commit: Commit }) {
      await Storage.set({
        key: "token",
        value: "",
      });
      await Storage.set({
        key: "refreshToken",
        value: "",
      });
      commit("clearAuthToken");
      commit("saveLoginStatus", "failed");
  },
  async registerUser({ commit }: { commit: Commit }, payload: any) {
    console.log(payload);
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      payload
    );
    if (response.status == 200 || response.status == 201) {
      await Storage.set({
        key: "token",
        value: response.data.token,
      });
      await Storage.set({
        key: "refreshToken",
        value: response.data.refreshToken,
      });
      commit("saveAuthToken", response.data);
      commit("saveLoginStatus", "success");
    } else {
      commit("saveLoginStatus", "failed");
    }
  },
  async loadStorageTokens({ commit }: { commit: Commit }) {
    const token = await await Storage.get({ key: "token" });
    const refreshToken = await await Storage.get({ key: "refreshToken" });
    if (token && refreshToken) {
      const tokenData = {
        token: token.value,
        refreshToken: refreshToken.value,
      };
      commit("saveAuthToken", tokenData);
    }
  },
  async saveTokensToStorage({ commit }: { commit: Commit }, payload: any) {
    await Storage.set({
      key: "token",
      value: payload.token,
    });
    await Storage.set({
      key: "refreshToken",
      value: payload.refreshToken,
    });
    commit("saveTokenData", payload);
  },
};

const mutations = {
  saveAuthToken(state: any, payload: any) {
    const jwtDecodeUserInfo = jwtDecrypt(payload.token);
    const newAuthData = {
      token: payload.token,
      refreshToken: payload.refreshToken,
      tokenExp: jwtDecodeUserInfo.exp,
      userid: jwtDecodeUserInfo.userid,
      email: jwtDecodeUserInfo.email,
    };
    state.authData = newAuthData;
  },
  clearAuthToken(state: any) {
    const newAuthData = {
      token: "",
      refreshToken: "",
      tokenExp: "",
      userid: "",
      email: "",
    };
    state.authData = newAuthData;
  },
  saveLoginStatus(state: any, status: any) {
    state.loginStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
