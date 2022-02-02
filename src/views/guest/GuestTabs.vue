<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/guest/welcome">
          <ion-icon :icon="home" />
          <ion-label>Welcome</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/guest/login">
          <ion-icon :icon="enter" />
          <ion-label>Login</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/guest/register">
          <ion-icon :icon="add" />
          <ion-label>Register</ion-label>
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
import { add, home, enter } from "ionicons/icons";

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
      enter,
      add,
      home,
    };
  },
};
</script>