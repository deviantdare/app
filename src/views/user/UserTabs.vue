<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/user/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/game">
          <ion-icon :icon="gameController" />
          <ion-label>New Dare</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/user/dares">
          <ion-icon :icon="list" />
          <ion-label>My Dares</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/user/settings">
          <ion-icon :icon="person" />
          <ion-label>User Settings</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab5" href="/user/logout">
          <ion-icon :icon="logOut" />
          <ion-label>Logout</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { gameController, home, play, person, list, logOut } from "ionicons/icons";

export default {
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      logOut,
      play,
      gameController,
      list,
      person,
      home,
    };
  },
};
</script>