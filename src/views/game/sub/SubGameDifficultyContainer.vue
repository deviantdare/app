<template>
  <div id="container">
    <strong>Perform a Deviant Dare</strong>
    <p>It's up to you how much you offer, and who you share it with.</p>
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item @click="() => router.push('/game/sub/accept')">
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-title>Titillating</ion-card-title>
              <ion-card-content
                ><p>
                  You might have to show some skin, but it wont involve full
                  nudity or sexual acts.
                </p></ion-card-content
              >
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item @click="() => router.push('/game/sub/accept')">
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-title>Arousing</ion-card-title>
              <ion-card-content
                ><p>
                  Showing off your body is fair game here, but no sexual acts.
                </p>
              </ion-card-content>
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item @click="() => router.push('/game/sub/accept')">
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-title>Explicit</ion-card-title>
              <ion-card-content
                ><p>
                  Acts could contain full nudity and sexual acts. Nothing too
                  gross or painful though.
                </p></ion-card-content
              >
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item @click="() => router.push('/game/sub/accept')">
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-title>Edgy</ion-card-title>
              <ion-card-content
                ><p>
                  Pushing soft boundaries is ok. There's no telling what this
                  act will involve, but you can manage.
                </p></ion-card-content
              >
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item @click="() => router.push('/game/sub/accept')">
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-title>Hardcore</ion-card-title>
              <ion-card-content
                ><p>
                  No holds barred. Use this with people you trust to safely
                  approach your limits.
                </p></ion-card-content
              >
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  <br />
  <br />
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
import { useRouter } from "vue-router";

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