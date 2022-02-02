import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  dares: [],
});

const getters = {
  getAllDares(state: any) {
    return state.dares;
  },
};

const actions = {
  async fetchDares({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.get("http://localhost:3000/dares");
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
  store,
  getters,
  actions,
  mutations,
};
