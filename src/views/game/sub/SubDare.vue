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
                >{{ getDareState.owner }} has deman
              </ion-card-title>
              <ion-card-subtitle
                >wants you to perform a deviant dare</ion-card-subtitle
              >
            </ion-card-header>
            <ion-card-content align="left">
              {{ getDareState.description }}
            </ion-card-content>
          </ion-card>
          <ion-card class="ion-justify-content-center">
            <ion-card-header>
              <ion-card-title color="primary"
                >Photograph or Upload your proof
              </ion-card-title>
              <ion-card-subtitle
                >We will be sharing it only with dare creator</ion-card-subtitle
              >
            </ion-card-header>
            <ion-card-content>
              <ion-button @click="takePhoto()"
                ><ion-icon :icon="camera"></ion-icon
              ></ion-button>
            </ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col size="4" :key="photo" v-for="photo in photos">
                  <ion-img
                    :src="photo.webviewPath"
                    @click="showActionSheet(photo)"
                  ></ion-img>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
          <ion-card class="ion-justify-content-center">
            <ion-col size="10">
              <ion-item>
                <ion-card-header>
                  <ion-card-subtitle
                    >Dare Response (Optional)</ion-card-subtitle
                  >
                  <ion-card-content
                    ><ion-textarea v-model="reply"></ion-textarea>
                  </ion-card-content>
                </ion-card-header>
              </ion-item> </ion-col
            >
          </ion-card>
                    <ion-card class="ion-justify-content-center">
            <ion-col size="10">
              <ion-card-header>
                <ion-card-subtitle>Rate this dare</ion-card-subtitle>
                <ion-card-content>
  <ion-list>
    <ion-radio-group v-model="rating">
      <ion-item>
        <ion-label>WTF is this?</ion-label>
        <ion-radio value="1"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>That was too much</ion-label>
        <ion-radio value="2"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>It was Ok</ion-label>
        <ion-radio value="3"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>I enjoyed it</ion-label>
        <ion-radio value="4"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>WOW it was epic!</ion-label>
        <ion-radio value="5"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
                </ion-card-content>
              </ion-card-header>
            </ion-col>
          </ion-card>
          <ion-button expand="full" color="success" @click="submit()"
            >Submit</ion-button
          >
          <ion-button expand="full" @click="decline()">Decline</ion-button>
        </ion-grid>
      </div></ion-content
    ></ion-page
  >
</template>

 <script lang="ts">
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
  IonCard,
  IonCardTitle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardSubtitle,
  actionSheetController,
  loadingController,
  toastController,
} from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { usePhotoGallery, UserPhoto } from "@/composables/usePhotoGallery";
import { mapGetters, mapActions } from "vuex";
import { camera, trash, close } from "ionicons/icons";
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
    IonCard,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCardSubtitle,
  },
  setup() {
    const { photos, takePhoto, deletePhoto } = usePhotoGallery();
    const showActionSheet = async (photo: UserPhoto) => {
      const actionSheet = await actionSheetController.create({
        header: "Photos",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              // Nothing to do, action sheet is automatically closed
            },
          },
        ],
      });
      await actionSheet.present();
    };
    const router = useRouter();
    return {
      warning,
      router,
      photos,
      takePhoto,
      showActionSheet,
      camera,
      trash,
      close,
    };
  },
  computed: {
    ...mapGetters("dare", {
      getDareState: "getDareState",
    }),
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
  },
  methods: {
    ...mapActions("dare", {
      finishDare: "finishDare",
      declineDare: "declineDare",
    }),
    async submit() {
      const showToast = async function (msg: string, color: string) {
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
        duration: 2000,
        backdropDismiss: true,
        translucent: true,
      });
      if (!this.reply) {
        showToast("Dare reply seems to be missing", "danger");
      } else if (!this.photos) {
        showToast("Dare proof seems to be missing", "danger");
      } else {
        await loading.present();
        const payload = {
          dare: this.getDareState,
          reply: this.reply,
          photos: this.photos,
          rating: this.rating
        };
        await this.finishDare(payload);
        if (this.getDareState.status === "completed") {
          showToast("Dare was replied successfully", "success");
          loading.dismiss();
          this.$router.push("/game/sub/finish");
        } else {
          loading.dismiss();
          showToast("Failed to submit dare reply please try again", "danger");
        }
      }
    },
    async decline() {
      const showToast = async function (msg: string, color: string) {
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
        duration: 2000,
        backdropDismiss: true,
        translucent: true,
      });
      await loading.present();
      const payload = {
        id: this.getDareState.id,
        owner: this.getDareState.owner,
        taker: this.getDareState.taker,
        rating: this.rating,
      };
      await this.declineDare(payload);
      if (this.getDareState.status === "declined") {
        showToast("Dare was declined successfully", "success");
        loading.dismiss();
        this.$router.push("/game/sub/decline");
      } else {
        loading.dismiss();
        showToast("Failed to submit dare reply please try again", "danger");
      }
    },
  },
  data() {
    return {
      rating: Number,
      reply: "",
      dareData: {},
    };
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