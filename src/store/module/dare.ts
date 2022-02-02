import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  notifications: [],
});

const getters = {
  getDare(state: any) {
    return state.dare;
  },
};

const actions = {
  async fetchDare({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get("http://localhost:3000/dare/" + id);
    commit("saveDare", response.data);
  },
};

const mutations = {
  saveDare(state: any, payload: any) {
    state.dare = payload;
  },
};

export default {
  namespaced: true,
  store,
  getters,
  actions,
  mutations,
};
