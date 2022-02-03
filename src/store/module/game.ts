import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  game: [],
});

const getters = {
  getGame(state: any) {
    return state.game;
  },
};

const actions = {
  async fetchGame({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get("http://localhost:3000/game/" + id);
    commit("saveGame", response.data);
  },
};

const mutations = {
  saveGame(state: any, payload: any) {
    state.game = payload;
  },
};

export default {
  namespaced: true,
  store,
  getters,
  actions,
  mutations,
};
