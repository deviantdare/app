import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  userprofile: [],
});

const getters = {
  getUserProfile(state: any) {
    return state.userprofile;
  },
};

const actions = {
  async fetchUserProfile({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get("http://localhost:3000/profile/" + id);
    commit("saveUserProfile", response.data);
  },
};

const mutations = {
  saveUserProfile(state: any, payload: any) {
    state.userprofile = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
