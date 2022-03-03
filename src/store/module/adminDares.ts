import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  admindares: [],
  admindare: [],
});

const getters = {
  getAllAdminDares(state: any) {
    return state.admindares;
  },
  getAdminDare(state: any) {
    return state.admindare;
  },
};

const actions = {
  async adminFetchDares({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/all"
    );
    commit("saveAllAdminDares", response.data);
  },
  async adminFetchDare({ commit }: { commit: Commit }, id: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/dare/view",
      { id }
    );
    commit("saveAdminDare", response.data);
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
  saveAdminDare(state: any, payload: any) {
    state.admindare = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
