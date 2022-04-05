<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          {{ authData.displayname }}
          <ion-avatar
            ><img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          /></ion-avatar>
        </ion-buttons>
        <ion-title>User Home</ion-title>
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
                <ion-label>{{ authData.userId }}</ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-button expand="full" @click="showDares()"
                >Refresh</ion-button
              >
              <ion-card-subtitle>Your dares</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-item v-for="(dare, index) in allDares" :key="index">
                <ion-label>{{ dare.id }}</ion-label>
                <ion-chip
                  outline
                  color="success"
                  v-if="dare.status === 'completed'"
                  >{{ dare.status }}</ion-chip
                >
                <ion-chip
                  outline
                  color="secondary"
                  v-else-if="dare.status === 'accepted'"
                  >{{ dare.status }}</ion-chip
                >
                <ion-chip
                  outline
                  color="danger"
                  v-else-if="dare.status === 'declined'"
                  >{{ dare.status }}</ion-chip
                >
                <ion-chip outline v-else>{{ dare.status }}</ion-chip>
                <ion-label v-if="dare.photos"
                  ><img :src="dare.photos[0].webviewPath"
                /></ion-label>
                <ion-label v-else></ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-grid></div></ion-content
  ></ion-page>
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
    ...mapGetters("dares", {
      allDares: "getAllDares",
    }),
  },
  created() {
    this.showDares();
  },
  methods: {
    ...mapActions("dares", {
      fetchDares: "fetchDares",
    }),
    async showDares() {
      await this.fetchDares();
    },
  },
};
</script>

<style scoped>
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