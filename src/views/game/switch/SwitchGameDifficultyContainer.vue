<template>
  <div id="container">
    <strong>Get Started</strong>
    <p>There's a right game for everyone out there</p>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
            <ion-item href="#">
              <ion-icon :icon="wifi"></ion-icon>
              <ion-card-header>
                <ion-card-title>Offer your submission</ion-card-title>
                <ion-card-content
                  ><p>
                    Set your limits and difficulty, then expolore a private
                    moment of submission with a friend or a stranger.
                  </p>
                  <p>
                    The picture of your submissive dare is seen only by them.
                  </p></ion-card-content
                >
              </ion-card-header>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10" >
            <ion-item href="#">
              <ion-icon :icon="wifi"></ion-icon>
              <ion-card-header>
                <ion-card-title>Demand and Dominate</ion-card-title>
                <ion-card-content
                  ><p>
                    Describe your dominant fatasy, then share a link with
                    friends or strangers and find out who is willing to perform
                    your demand before they even know what it is.
                  </p>
                </ion-card-content>
              </ion-card-header>
            </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
            <ion-item href="#">
              <ion-icon :icon="wifi"></ion-icon>
              <ion-card-header>
                <ion-card-title>Compete with a Switch</ion-card-title>
                <ion-card-content
                  ><p>
                    Do you switch between dominanace and submission? Start a
                    switch game with one other friend or stranger and you both
                    get to try and dominate each other.
                  </p></ion-card-content
                >
              </ion-card-header>
            </ion-item>
        </ion-col>
      </ion-row>
  </div>
</template>

 <script>
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
} from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "UserHomeContainer",
  props: {
    name: String,
  },
  components: {
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonItem,
  },
  setup() {
    const router = useRouter();
    return { warning, router };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: relative;
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