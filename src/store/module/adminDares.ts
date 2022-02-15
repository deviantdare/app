import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  admindares: [],
});

const getters = {
  getAllAdminDares(state: any) {
    return state.admindares;
  },
};

const actions = {
  async adminFetchDares({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/all"
    );
    commit("saveAllAdminDares", response.data);
  },
  async adminCreateDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/new",
      payload
    );
    commit("saveAllAdminDares", response.data);
  },
  async adminUpdateDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/update",
      payload
    );
    commit("saveAllAdminDares", response.data);
  },
  async adminDeleteDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/delete",
      { id: payload }
    );
    commit("saveAllAdminDares", response.data);
  },
};

const mutations = {
  saveAllAdminDares(state: any, payload: any) {
    state.admindares = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
