import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  adminusers: [],
});

const getters = {
  getAllAdminUsers(state: any) {
    return state.adminusers;
  },
};

const actions = {
  async adminFetchUsers({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/user/all"
    );
    commit("saveAllAdminUsers", response.data);
  },
  async adminCreateUser({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/user/new",
      payload
    );
    commit("saveAllAdminUsers", response.data);
  },
  async adminUpdateUser({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/user/update",
      payload
    );
    commit("saveAllAdminUsers", response.data);
  },
  async adminDeleteUser({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/admin/user/delete",
      { id: payload }
    );
    commit("saveAllAdminUsers", response.data);
  },
};

const mutations = {
  saveAllAdminUsers(state: any, payload: any) {
    state.adminusers = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
