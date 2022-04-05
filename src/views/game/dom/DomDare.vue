<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Demand Their Submission</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid fixed>
        <p>
          Describe the deviant dare for your submissive to perform and
          photograph.
        </p>
                <p>
          We wont show this demand to them unless they first consent to perform
          the dare of your choice.
        </p>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>DARE DIFFICULTY</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-radio-group v-model="dare.difficulty">
                  <ion-item>
                    <ion-col size="2">
                      <ion-label>TITILLATING</ion-label>
                    </ion-col>
                    <ion-col>
                      <ion-label class="ion-text-wrap">
                        You might have to show some skin, but it wont involve
                        full nudity or sexual acts.
                      </ion-label>
                    </ion-col>
                    <ion-radio slot="start" value="1"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-col size="2">
                      <ion-label>AROUSING</ion-label>
                    </ion-col>
                    <ion-col>
                      <ion-label class="ion-text-wrap">
                        Showing off your body is fair game here, but no sexual
                        acts.
                      </ion-label>
                    </ion-col>
                    <ion-radio slot="start" value="2"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-col size="2">
                      <ion-label>EXPLICIT</ion-label>
                    </ion-col>
                    <ion-col>
                      <ion-label class="ion-text-wrap">
                        Acts could contain full nudity and sexual acts. Nothing
                        too gross or painful though.
                      </ion-label>
                    </ion-col>
                    <ion-radio slot="start" value="3"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-col size="2">
                      <ion-label>EDGY</ion-label>
                    </ion-col>
                    <ion-col>
                      <ion-label class="ion-text-wrap">
                        Pushing soft boundaries is ok. There's no telling what
                        this act will involve, but you can manage.
                      </ion-label>
                    </ion-col>
                    <ion-radio slot="start" value="4"></ion-radio>
                  </ion-item>
                  <ion-item>
                    <ion-col size="2">
                      <ion-label>HARDCORE</ion-label>
                    </ion-col>
                    <ion-col>
                      <ion-label class="ion-text-wrap">
                        No holds barred. Use this with people you trust to
                        safely approach your limits.
                      </ion-label>
                    </ion-col>
                    <ion-radio slot="start" value="5"></ion-radio>
                  </ion-item>
                </ion-radio-group>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col>
            <ion-card>
              <ion-card-content
                ><ion-item
                  ><ion-textarea
                    v-model="dare.dare"
                    placeholder="DARE DESCRIPTION"
                    rows="6"
                  ></ion-textarea
                ></ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-button expand="full" @click="submit()">Demand</ion-button>
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
      createNewDare: "createNewDare",
    }),
    async submit() {
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
      if (!this.dare.dare) {
        showToast("Dare description seems to be missing", "danger");
      } else if (!this.dare.difficulty) {
        showToast("Dare difficulty seems to be missing", "danger");
      } else {
        await loading.present();
        await this.createNewDare(this.dare);
        // console.log(this.getDareState)
        if (this.getDareState.id) {
          showToast("Dare created successfully", "success");
          loading.dismiss();
          this.$router.push("/game/dom/finish");
        } else {
          loading.dismiss();
          showToast("Failed to create new dare", "danger");
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