<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Global Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">User Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Welcome!</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>Owner Name:</ion-label>
                <ion-label>{{ authData.email }}</ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-button expand="full" @click="showAdminDares()"
                >Refresh</ion-button
              >
              <ion-card-subtitle>Here all your dares</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-item v-for="(dare, index) in allAdminDares" :key="index">
                <ion-label>{{ dare }}</ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-grid>
      </div></ion-content
    ></ion-page
  >
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonGrid,
  IonContent,
  IonPage,
  IonCardSubtitle,
} from "@ionic/vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
    IonContent,
    IonPage,
    IonCardSubtitle,
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("admindares", {
      allAdminDares: "getAllAdminDares",
    }),
  },
  created() {
    this.showAdminDares();
  },
  methods: {
    ...mapActions("admindares", {
      adminFetchDares: "adminFetchDares",
    }),
    async showAdminDares() {
      await this.adminFetchDares();
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>