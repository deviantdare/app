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
          <ion-card>
            <ion-card-header align="center">
              <ion-card-title color="primary"
                >{{ getDareState.owner }}
                <ion-card-subtitle
                  >wants you to perform a deviant dare</ion-card-subtitle
                ></ion-card-title
              >
            </ion-card-header>
            <ion-card-content>
              <p>
                Difficulty: <strong>{{ getDareState.difficulty }}</strong>
              </p>
              <ion-button
                expand="full"
                color="success"
                @click="submit('accepted')"
                >Consent</ion-button
              >
              <ion-button expand="full" @click="submit('decline')"
                >Decline</ion-button
              ></ion-card-content
            >
          </ion-card>
          <ion-col align="center"> </ion-col>
        </ion-grid>
      </div> </ion-content
  ></ion-page>
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
  IonGrid,
  IonContent,
  IonPage,
  loadingController,
  toastController,
  IonCardSubtitle,
  IonButton,
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
    IonGrid,
    IonContent,
    IonPage,
    IonCardSubtitle,
    IonButton,
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
    ...mapGetters("game", {
      getDareState: "getDareState",
    }),
  },
  methods: {
    ...mapActions("game", {
      updateDareStatus: "updateDareStatus",
    }),
    async submit(status) {
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
      if (!status) {
        showToast("Dare status seems to be missing", "danger");
      } else {
        await loading.present();
        await this.updateDareStatus({ status, id: this.getDareState.id });
        console.log(this.getDareState);
        if (this.getDareState.taker !== "") {
          showToast("Retrived new dare successfully", "success");
          loading.dismiss();
          this.$router.push("/game/sub/dare");
        } else {
          loading.dismiss();
          showToast("Failed to retrive new dare", "danger");
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