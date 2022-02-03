<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Get Started</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid fixed>
          <p align="center">There's a right game for everyone out there</p>
          <ion-row router-link="/game/sub/difficulty">
            <ion-card>
              <ion-card-header>
                <ion-card-title align="center" color="primary"
                  >OFFER YOUR SUBMISSION</ion-card-title
                >
                <ion-card-content
                  ><p>
                    Set your limits and difficulty, then expolore a private
                    moment of submission with a friend or a stranger. The
                    picture of your submissive dare is seen only by them.
                  </p></ion-card-content
                >
              </ion-card-header>
            </ion-card>
          </ion-row>
          <ion-row router-link="/game/dom/dare">
            <ion-card>
              <ion-card-header>
                <ion-card-title align="center" color="primary"
                  >DEMAND AND DOMINATE</ion-card-title
                >
                <ion-card-content
                  ><p>
                    Describe your dominant fatasy, then share a link with
                    friends or strangers and find out who is willing to perform
                    your demand before they even know what it is.
                  </p>
                </ion-card-content>
              </ion-card-header>
            </ion-card>
          </ion-row>
          <ion-row router-link="/game/switch/difficulty">
            <ion-card>
              <ion-card-header>
                <ion-card-title align="center" color="primary"
                  >COMPETE WITH A SWITCH</ion-card-title
                >
                <ion-card-content
                  ><p>
                    Do you switch between dominanace and submission? Start a
                    switch game with one other friend or stranger and you both
                    get to try and dominate each other.
                  </p></ion-card-content
                >
              </ion-card-header>
            </ion-card>
          </ion-row>
        </ion-grid>
      </div></ion-content
    ></ion-page
  >
</template>

 <script>
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { warning, wifi } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserHomeContainer",
  props: {
    name: String,
  },
  components: {
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return { warning, wifi };
  },
});
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