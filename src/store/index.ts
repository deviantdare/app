import { createStore } from "vuex";
import AuthModule from "./module/auth";
import DaresModule from "./module/dares";
import NotificationsModule from "./module/notifications";
import DareModule from "./module/dare";
import AdminDaresModule from "./module/adminDares";
import AdminUsersModule from "./module/adminUsers";
import MyProfileModule from "./module/myProfile";
import UserProfileModule from "./module/userProfile";

const store = createStore({
  modules: {
    auth: AuthModule,
    dares: DaresModule,
    admindares: AdminDaresModule,
    adminusers: AdminUsersModule,
    notifications: NotificationsModule,
    dare: DareModule,
    myprofile: MyProfileModule,
    userprofile: UserProfileModule,
  },
});

export default store;
