<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-card>
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="userInfo.email"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input
                  type="password"
                  v-model="userInfo.password"
                ></ion-input>
              </ion-item>
              <ion-button expand="full" @click="login()">Login</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonContent,
  IonPage,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonGrid,
  loadingController,
  toastController,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonContent,
    IonPage,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
  },
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", {
      loginStatus: "getLoginStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      loginUser: "loginUser",
    }),
    async login() {
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
      if (!this.userInfo.email) {
        showToast("Email address seems to be missing", "danger");
      } else if (!this.userInfo.password) {
        showToast("Password seems to be missing", "danger");
      } else {
        await loading.present();
        await this.loginUser(this.userInfo);
        if (this.loginStatus === "success") {
          showToast("Logged in successfully", "success");
          loading.dismiss();
          this.$router.push("/user/home");
        } else {
          loading.dismiss();
          showToast(
            "Failed to login due to invalid email or password",
            "danger"
          );
        }
      }
    },
  },
};
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