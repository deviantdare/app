import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const store = () => ({
  dare: {
    id: "",
    owner: "",
    taker: "",
    status: "",
    type: "",
    dare: "",
    difficulty: "",
    proof: "",
    reply: "",
    winner: "",
    ownerRate: "",
    takerRate: "",
    gesture: "",
  },
});

const getters = {
  getDareState(state: any) {
    return state.dare;
  },
};

const actions = {
  async fetchDare({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get(
      "http://localhost:3000/game/" + id
    );
    commit("saveDare", response.data);
  },
  async createNewDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/new",
      payload
    );
    commit("saveDare", response.data);
  },
  async getNewDare({ commit }: { commit: Commit }, difficulty: number) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/offer",
      { difficulty, type: "dom" }
    );
    commit("saveDare", response.data);
  },
  async updateDareStatus({ commit }: { commit: Commit }, data: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/status",
      { id: data.id, status: data.status }
    );
    commit("saveDare", response.data);
  },
};

const mutations = {
  saveDare(state: any, payload: any) {
    state.dare = {
      id: payload.id,
      owner: payload.owner,
      taker: payload.taker,
      status: payload.status,
      type: payload.type,
      dare: payload.dare,
      difficulty: payload.difficulty,
      proof: payload.proof,
      reply: payload.reply,
      winner: "",
      ownerRate: "",
      takerRate: "",
      gesture: "",
    };
  },
};

export default {
  namespaced: true,
  store,
  getters,
  actions,
  mutations,
};
