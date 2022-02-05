<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Your dare response was submitted Successfully</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid fixed>
          <ion-card-header align="center">
            <ion-card-title>Your dare response was submitted Successfully</ion-card-title>
          </ion-card-header>
          <p>Choose what to do next</p>
          <br />
          <ion-button
            fill="outline"
            @click="() => router.push('/game/sub/difficulty')"
          >
            Try another dare</ion-button
          >
          <ion-button fill="outline" @click="() => router.push('/tabs/home')"
            >Go back to homepage</ion-button
          ></ion-grid
        >
      </div></ion-content
    >
  </ion-page>
</template>

 <script>
import { useRouter } from "vue-router";
import {
  IonButton,
  IonPage,
  IonContent,
  IonGrid,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/vue";

export default {
  name: "ExploreContainer",
  props: {
    name: String,
  },
  components: {
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonCardHeader,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle
  },
  setup() {
    const router = useRouter();
    return { router };
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