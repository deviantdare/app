<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perform your Deviant Dare</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid fixed>
          <ion-card class="ion-justify-content-center">
            <ion-card-header align="center">
              <ion-card-title color="primary"
                >test
                <ion-card-subtitle
                  >wants you to perform a deviant dare</ion-card-subtitle
                ></ion-card-title
              >
            </ion-card-header>
            <ion-card-content align="left"> sadasda </ion-card-content>
          </ion-card>
          <ion-card class="ion-justify-content-center">
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
          </ion-card>
          <ion-card class="ion-justify-content-center">
            <ion-col size="10">
              <ion-item>
                <ion-card-header>
                  <ion-card-subtitle
                    >Dare Response (Optional)</ion-card-subtitle
                  >
                  <ion-card-content
                    ><ion-textarea></ion-textarea>
                  </ion-card-content>
                </ion-card-header>
              </ion-item>
            </ion-col>
          </ion-card>
          <ion-button
            expand="full"
            color="success"
            @click="() => router.push('/game/sub/finish')"
            >Submit</ion-button
          >
          <ion-button
            expand="full"
            @click="() => router.push('/game/sub/decline')"
            >Decline</ion-button
          >
        </ion-grid>
      </div></ion-content
    ></ion-page
  >
</template>

 <script>
import {
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonPage,
  IonContent,
  IonGrid,
  IonButton,
  IonCol,
  IonTextarea,
  IonInput,
  IonCard,
  IonCardTitle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardSubtitle,
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
    IonItem,
    IonPage,
    IonContent,
    IonGrid,
    IonButton,
    IonCol,
    IonTextarea,
    IonInput,
    IonCard,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCardSubtitle,
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