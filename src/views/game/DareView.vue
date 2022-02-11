<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dare View</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dare View</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Dare Details</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>Dare ID:</ion-label>
                <ion-label>{{ this.$route.params.id }}</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Owner Name:</ion-label>
                <ion-label>{{ authData.email }}</ion-label>
              </ion-item>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Here is your dare</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>{{ dare }}</ion-label>
              </ion-item>
                            <ion-button expand="full" @click="showDareData()">Refresh</ion-button>
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
    ...mapGetters("dare", {
      dare: "getDare",
    }),
  },
  created() {
    this.showDare();
  },
  methods: {
    ...mapActions("daredata", {
      fetchDare: "fetchDare",
    }),
    async showDare() {
      await this.fetchDare(this.$route.params.id);
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