import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  daredata: [],
});

const getters = {
  getDareData(state: any) {
    return state.daredata;
  },
};

const actions = {
  async fetchDareData({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get("http://localhost:3000/dare/" + id);
    commit("saveDareData", response.data);
  },
};

const mutations = {
  saveDareData(state: any, payload: any) {
    state.daredata = payload;
  },
};

export default {
  namespaced: true,
  store,
  getters,
  actions,
  mutations,
};
