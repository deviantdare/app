<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Demand Their Submission</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <p align="center">
        By describing the deviant dare for your submissive to perform and
        photograph.
      </p>
      <p align="center">
        We wont show this demand to them unless they first consent to perform
        the dare of your choice.
      </p>
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <ion-card>
              
                <ion-card-header>
                  <ion-card-subtitle>Dare Description</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content
                  ><ion-item><ion-textarea></ion-textarea></ion-item>
                </ion-card-content>
              
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Select dare difficulty</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-radio-group>
                  <ion-item>
                    <ion-label>Titillating</ion-label>
                    <ion-label class="ion-text-wrap">
                      You might have to show some skin, but it wont involve full
                      nudity or sexual acts.
                    </ion-label>
                    <ion-radio slot="start" value="1"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-label>Arousing</ion-label>
                    <ion-label class="ion-text-wrap">
                      Showing off your body is fair game here, but no sexual
                      acts.
                    </ion-label>
                    <ion-radio slot="start" value="2"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-label>Explicit</ion-label>
                    <ion-label class="ion-text-wrap">
                      Acts could contain full nudity and sexual acts. Nothing
                      too gross or painful though.
                    </ion-label>
                    <ion-radio slot="start" value="3"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-label>Edgy</ion-label>
                    <ion-label class="ion-text-wrap">
                      Pushing soft boundaries is ok. There's no telling what
                      this act will involve, but you can manage.
                    </ion-label>
                    <ion-radio slot="start" value="4"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-label>Hardcore</ion-label>
                    <ion-label class="ion-text-wrap">
                      No holds barred. Use this with people you trust to safely
                      approach your limits.
                    </ion-label>
                    <ion-radio slot="start" value="5"></ion-radio>
                  </ion-item>
                </ion-radio-group>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-button expand="full" @click="() => router.push('/game/dom/finish')"
          >Demand</ion-button
        >
      </ion-grid></ion-content
    ></ion-page
  >
</template>

 <script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonPage,
  IonContent,
  IonGrid,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonRow,
  IonCol,
  IonTextarea,
  IonCardSubtitle,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserHomeContainer",
  props: {
    name: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonItem,
    IonPage,
    IonContent,
    IonGrid,
    IonButton,
    IonRadioGroup,
    IonRadio,
    IonLabel,
    IonRow,
    IonCol,
    IonTextarea,
    IonCardSubtitle,
    IonHeader,
    IonToolbar,
    IonTitle,
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
  top: 5%;
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