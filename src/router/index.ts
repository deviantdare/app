import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import GuestTabs from "../views/guest/GuestTabs.vue";
import TabsPage from "../views/guest/GuestTabs.vue";
import UserTabs from "../views/user/UserTabs.vue"
import GameTabs from "../views/game/GameTabs.vue"

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
        component: () => import("@/views/Tab1Page.vue"),
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
      }
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
      },
      {
        path: "dom/dare",
        component: () => import("@/views/game/dom/DomDare.vue"),
      },
      {
        path: "dom/finish",
        component: () => import("@/views/game/dom/DomFinish.vue"),
      }
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

export default router;
