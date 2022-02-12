<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perform a Deviant Dare</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid fixed>
          <p align="center">
            It's up to you how much you offer, and who you share it with.
          </p>
          <ion-row @click="submit(1)">
            <ion-col>
              <ion-card>
                <ion-card-header align="center">
                  <ion-card-title color="primary">Titillating</ion-card-title>
                </ion-card-header>
                <ion-card-content
                  ><p align="center">
                    You might have to show some skin, but it wont involve full
                    nudity or sexual acts.
                  </p></ion-card-content
                >
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row @click="submit(2)">
            <ion-col>
              <ion-card>
                <ion-card-header align="center">
                  <ion-card-title color="primary">Arousing</ion-card-title>
                </ion-card-header>
                <ion-card-content
                  ><p align="center">
                    Showing off your body is fair game here, but no sexual acts.
                  </p>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row @click="submit(3)">
            <ion-col>
              <ion-card>
                <ion-card-header align="center">
                  <ion-card-title color="primary">Explicit</ion-card-title>
                </ion-card-header>
                <ion-card-content
                  ><p align="center">
                    Acts could contain full nudity and sexual acts.
                  </p>
                  <p align="center">
                    Nothing too gross or painful though.
                  </p></ion-card-content
                >
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row @click="submit(4)">
            <ion-col>
              <ion-card>
                <ion-card-header align="center">
                  <ion-card-title color="primary">Edgy</ion-card-title>
                </ion-card-header>
                <ion-card-content
                  ><p align="center">Pushing soft boundaries is ok.</p>
                  <p align="center">
                    There's no telling what this act will involve, but you can
                    manage.
                  </p></ion-card-content
                >
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row @click="submit(5)">
            <ion-col>
              <ion-card>
                <ion-card-header align="center">
                  <ion-card-title color="primary">Hardcore</ion-card-title>
                </ion-card-header>
                <ion-card-content
                  ><p align="center">No holds barred.</p>
                  <p align="center">
                    Use this with people you trust to safely approach your
                    limits.
                  </p></ion-card-content
                >
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content></ion-page
  >
</template>

 <script>
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonCol,
  IonRow,
  IonGrid,
  IonContent,
  IonPage,
  loadingController,
  toastController,
} from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "UserHomeContainer",
  props: {
    name: String,
  },
  components: {
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonPage,
  },
  data() {
    return {
      dare: {
        difficulty: "",
        dare: "",
        type: "dom",
      },
    };
  },
  computed: {
    ...mapGetters("dare", {
      getDareState: "getDareState",
    }),
  },
  methods: {
    ...mapActions("dare", {
      getNewDare: "getNewDare",
    }),
    async submit(difficulty) {
      const showToast = async function (msg, color) {
        const toast = await toastController.create({
          message: msg,
          position: "top",
          animated: true,
          color: color,
          duration: 2000,
        });
        return toast.present();
      };
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Logging in please wait...",
        duration: this.timeout,
        backdropDismiss: true,
        translucent: true,
      });
      if (!difficulty) {
        showToast("Dare description seems to be missing", "danger");
      } else {
        await loading.present();
        await this.getNewDare(difficulty, "sub");
        console.log(this.getDareState);
        if (this.getDareState.id) {
          showToast("Retrived new dare successfully", "success");
          loading.dismiss();
          this.$router.push("/game/sub/offer");
        } else {
          loading.dismiss();
          showToast("There are no free dares for this category", "danger");
        }
      }
    },
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