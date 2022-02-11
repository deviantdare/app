import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  dare: [],
});

const getters = {
  getDare(state: any) {
    return state.dare;
  },
};

const actions = {
  async fetchDare({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get(
      "http://localhost:3000/dare/" + id
    );
    commit("saveDare", response.data);
  },
  async updateDare({ commit }: { commit: Commit }, dareData: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/update",
      dareData
    );
    commit("saveDare", response.data);
  },
  async finishDare({ commit }: { commit: Commit }, dareData: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/finish",
      dareData
    );
    commit("saveDare", response.data);
  },
  async declineDare({ commit }: { commit: Commit }, dareData: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/decline",
      dareData
    );
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
