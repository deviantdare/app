import { Storage } from "@capacitor/storage";
import axios from "axios";
import { jwtDecrypt } from "../../shared/helper";
import { Commit } from "vuex";

const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    tokenExp: "",
    userId: "",
    userName: "",
  },
  loginStatus: "success",
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
        key: "access_token",
        value: response.data.access_token,
      });
      await Storage.set({
        key: "refresh_token",
        value: response.data.refresh_token,
      });
      commit("saveAuthToken", response.data);
      commit("saveLoginStatus", "success");
    } else {
      commit("saveLoginStatus", "failed");
    }
  },
  async registerUser({ commit }: { commit: Commit }, payload: any) {
    console.log(payload);
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      payload
    );
    if (response.status == 200 || response.status == 201) {
      await Storage.set({
        key: "access_token",
        value: response.data.access_token,
      });
      await Storage.set({
        key: "refresh_token",
        value: response.data.refresh_token,
      });
      commit("saveAuthToken", response.data);
      commit("saveLoginStatus", "success");
    } else {
      commit("saveLoginStatus", "failed");
    }
  },
  async loadStorageTokens({ commit }: { commit: Commit }) {
    const access_token = await await Storage.get({ key: "access_token" });
    const refresh_token = await await Storage.get({ key: "refresh_token" });
    if (access_token && refresh_token) {
      const tokenData = {
        access_token: access_token.value,
        refresh_token: refresh_token.value,
      };
      commit("saveAuthToken", tokenData);
    }
  },
  async saveTokensToStorage({ commit }: { commit: Commit }, payload: any) {
    await Storage.set({
      key: "access_token",
      value: payload.access_token,
    });
    await Storage.set({
      key: "refresh_token",
      value: payload.refresh_token,
    });
    commit("saveTokenData", payload);
  },
};

const mutations = {
  saveAuthToken(state: any, payload: any) {
    const jwtDecodeUserInfo = jwtDecrypt(payload.access_token);
    const newAuthData = {
      token: payload.access_token,
      refreshToken: payload.refresh_token,
      tokenExp: jwtDecodeUserInfo.exp,
      userId: jwtDecodeUserInfo.sub,
      userName: jwtDecodeUserInfo.username,
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
