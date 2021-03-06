import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  dares: [],
});

const getters = {
  getAllDares(state: any) {
    return state.dares;
  },
};

const actions = {
  async fetchDares({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.get("http://localhost:3000/user/dares");
    commit("saveAllDares", response.data);
  },
};

const mutations = {
  saveAllDares(state: any, payload: any) {
    state.dares = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
