import { createRouter, createWebHistory } from "@ionic/vue-router";
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import GuestTabs from "../views/guest/GuestTabs.vue";
import TabsPage from "../views/guest/GuestTabs.vue";
import UserTabs from "../views/user/UserTabs.vue";
import GameTabs from "../views/game/GameTabs.vue";
import store from "../store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/guest/welcome",
  },
  {
    path: "/guest/",
    component: GuestTabs,
    children: [
      {
        path: "",
        redirect: "/guest/welcome",
      },
      {
        path: "welcome",
        component: () => import("@/views/guest/GuestWelcome.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/guest/GuestLogin.vue"),
      },
      {
        path: "register",
        component: () => import("@/views/guest/GuestRegister.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/guest/UploadProfilePhoto.vue"),
      },
    ],
  },
  {
    path: "/user/",
    component: UserTabs,
    children: [
      {
        path: "",
        redirect: "/user/home",
      },
      {
        path: "home",
        component: () => import("@/views/user/UserHome.vue"),
        meta: { requiredAuth: true },
      },
    ],
  },
  {
    path: "/admin/",
    component: UserTabs,
    children: [
      {
        path: "",
        redirect: "/admin/dares",
      },
      {
        path: "dares",
        component: () => import("@/views/admin/AdminDares.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "users",
        component: () => import("@/views/admin/AdminUsers.vue"),
        meta: { requiredAuth: true },
      },
    ],
  },
  {
    path: "/game/",
    component: GameTabs,
    children: [
      {
        path: "",
        redirect: "/game/home",
      },
      {
        path: "home",
        component: () => import("@/views/game/GameTypeSelector.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "dare/:id",
        component: () => import("@/views/game/DareView.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "dom/dare",
        component: () => import("@/views/game/dom/DomDare.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "dom/finish",
        component: () => import("@/views/game/dom/DomFinish.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "sub/difficulty",
        component: () => import("@/views/game/sub/SubDifficulty.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "sub/offer",
        component: () => import("@/views/game/sub/SubOffer.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "sub/dare",
        component: () => import("@/views/game/sub/SubDare.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "sub/decline",
        component: () => import("@/views/game/sub/SubDecline.vue"),
        meta: { requiredAuth: true },
      },
      {
        path: "sub/finish",
        component: () => import("@/views/game/sub/SubFinish.vue"),
        meta: { requiredAuth: true },
      },
    ],
  },
  {
    path: "/upload/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/upload/proof",
      },
      {
        path: "proof",
        component: () => import("@/views/guest/UploadProfilePhoto.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function guard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  authData: { userId: string }
) {
  if (to.meta && to.meta.requiredAuth) {
    // console.log(authData.userId);
    if (authData && authData.userId !== "") {
      return next();
    }
    return next({ path: "/guest/login" });
  } else {
    if (authData && authData.userId === "") {
      return next({ path: "/user/home" });
    }
    return next();
  }
}

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    let authData = store.getters["auth/getAuthData"];
    if (authData.userId == "") {
      store.dispatch("auth/loadStorageTokens").then(
        () => {
          authData = store.getters["auth/getAuthData"];
          return guard(to, from, next, authData);
        },
        (error: any) => {
          console.log(error);
          return guard(to, from, next, authData);
        }
      );
    } else {
      return guard(to, from, next, authData);
    }
  }
);

export default router;
