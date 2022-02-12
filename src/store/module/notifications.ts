import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  notifications: [],
});

const getters = {
  getAllDares(state: any) {
    return state.notifications;
  },
};

const actions = {
  async fetchNotifications({ commit }: { commit: Commit }) {
    const response = await jwtInterceptor.get("http://localhost:3000/dares");
    commit("saveAllNotifications", response.data);
  },
};

const mutations = {
  saveAllNotifications(state: any, payload: any) {
    state.notifications = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
