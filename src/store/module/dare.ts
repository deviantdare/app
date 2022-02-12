import jwtInterceptor from "../../shared/jwtInterceptor";
import { Commit } from "vuex";

const state = () => ({
  dareData: {
    id: "",
    owner: "",
    taker: "",
    status: "",
    type: "",
    description: "",
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
    return state.dareData;
  },
};

const actions = {
  async fetchDare({ commit }: { commit: Commit }, id: string) {
    const response = await jwtInterceptor.get(
      "http://localhost:3000/dare/" + id
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
  async finishDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/finish",
      payload
    );
    commit("saveDare", response.data);
  },
  async declineDare({ commit }: { commit: Commit }, payload: any) {
    const response = await jwtInterceptor.post(
      "http://localhost:3000/dare/decline",
      payload
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
    const newDareData = {
      id: payload.id,
      owner: payload.owner,
      taker: payload.taker,
      status: payload.status,
      type: payload.type,
      description: payload.description,
      difficulty: payload.difficulty,
      proof: payload.proof,
      reply: payload.reply,
      winner: payload.winner,
      ownerRate: payload.ownerRate,
      takerRate: payload.takerRate,
      gesture: payload.gesture,
    };
    state.dareData = newDareData
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
