import { createStore } from "vuex";
import AuthModule from "./module/auth";
import DaresModule from "./module/dares";
import NotificationsModule from "./module/notifications"
import DareModule from "./module/dare"
import GameModule from "./module/game"
import DareDataModule from "./module/dareData"
import MyProfileModule from "./module/myProfile"
import UserProfileModule from "./module/userProfile"

const store = createStore({
  modules: {
    auth: AuthModule,
    dares: DaresModule,
    notifications: NotificationsModule,
    dare: DareModule,
    game: GameModule,
    daredata: DareDataModule,
    myprofile: MyProfileModule,
    userprofile: UserProfileModule
  },
});

export default store;
