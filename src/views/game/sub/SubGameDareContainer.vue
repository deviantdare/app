<template>
  <div id="container">
    <strong>Demand Their Submission</strong>
    <p>
      By describing the deviant dare for your submissive to perform and
      photograph.
    </p>
    <p>
      We wont show this demand to them unless they first consent to perform the
      dare of your choice.
    </p>
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-item>
          <ion-card-header>
            <ion-card-subtitle>Upload your Proof</ion-card-subtitle>
          </ion-card-header>
          <ion-input
            ref="image"
            name="image"
            accept=".jpeg, .png, .jpg"
            type="file"
          ></ion-input>
        </ion-item>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col size="10">
          <ion-item>
            <ion-icon :icon="wifi"></ion-icon>
            <ion-card-header>
              <ion-card-subtitle>Dare Response (Optional)</ion-card-subtitle>
              <ion-card-content
                ><ion-textarea></ion-textarea>
              </ion-card-content>
            </ion-card-header>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-button fill="outline" @click="() => router.push('/game/sub/finish')"
        >Submit</ion-button
      >
      <ion-button fill="outline" @click="() => router.push('/game/sub/decline')"
        >Decline</ion-button
      >
    </ion-grid>
    <br />
    <br />
  </div>
</template>

 <script>
import { IonCardContent, IonCardHeader, IonIcon, IonItem } from "@ionic/vue";
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