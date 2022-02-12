import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  myprofile: [],
});

const getters = {
  getMyProfile(state: any) {
    return state.myprofile;
  },
};

const actions = {
  async fetchMyProfile({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get("http://localhost:3000/profile/" + id);
    commit("saveMyProfile", response.data);
  },
};

const mutations = {
  saveMyProfile(state: any, payload: any) {
    state.myprofile = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
