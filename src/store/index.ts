import { createStore } from "vuex";
import AuthModule from "./module/auth";
import DaresModule from "./module/dares";

const store = createStore({
  modules: {
    auth: AuthModule,
    dares: DaresModule
  },
});

export default store;
