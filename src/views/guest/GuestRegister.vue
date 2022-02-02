<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Join Us</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid fixed>
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Display Name</ion-label>
              <ion-input v-model="userInfo.displayname"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email Address</ion-label>
              <ion-input type="email" v-model="userInfo.email"></ion-input>
            </ion-item>

            <ion-list>
              <ion-item>
                <ion-label>Gender</ion-label>
                <ion-select
                  placeholder="Select One"
                  ok-text="Okay"
                  cancel-text="Nah"
                  v-model="userInfo.gender"
                >
                  <ion-select-option value="f">Female</ion-select-option>
                  <ion-select-option value="m">Male</ion-select-option>
                  <ion-select-option value="cd">Crossdresser</ion-select-option>
                  <ion-select-option value="tmf"
                    >Trans - Male to Female</ion-select-option
                  >
                  <ion-select-option value="tfm"
                    >Trans - Female to Male</ion-select-option
                  >
                  <ion-select-option value="t">Transgender</ion-select-option>
                  <ion-select-option value="gf">Gender Fluid</ion-select-option>
                  <ion-select-option value="fq">Genderqueer</ion-select-option>
                  <ion-select-option value="i">Intersex</ion-select-option>
                  <ion-select-option value="lb">Butch</ion-select-option>
                  <ion-select-option value="lf">Femme</ion-select-option>
                  <ion-select-option value="a">Alien</ion-select-option>
                  <ion-select-option value="o">Other</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
            <ion-list>
              <ion-item>
                <ion-label>Intrested In</ion-label>
                <ion-select
                  placeholder="Select One"
                  ok-text="Okay"
                  cancel-text="Nah"
                  multiple="true"
                  v-model="userInfo.intrestedIn"
                >
                  <ion-select-option value="f">Female</ion-select-option>
                  <ion-select-option value="m">Male</ion-select-option>
                  <ion-select-option value="cd">Crossdresser</ion-select-option>
                  <ion-select-option value="tmf"
                    >Trans - Male to Female</ion-select-option
                  >
                  <ion-select-option value="tfm"
                    >Trans - Female to Male</ion-select-option
                  >
                  <ion-select-option value="t">Transgender</ion-select-option>
                  <ion-select-option value="gf">Gender Fluid</ion-select-option>
                  <ion-select-option value="fq">Genderqueer</ion-select-option>
                  <ion-select-option value="i">Intersex</ion-select-option>
                  <ion-select-option value="lb">Butch</ion-select-option>
                  <ion-select-option value="lf">Femme</ion-select-option>
                  <ion-select-option value="a">Alien</ion-select-option>
                  <ion-select-option value="o">Other</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
            <ion-item>
              <ion-label position="floating">Brief Introduction</ion-label>
              <ion-textarea v-model="userInfo.about"></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input
                type="password"
                v-model="userInfo.password"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Confirm Password</ion-label>
              <ion-input
                type="password"
                v-model="userInfo.passwordConfirm"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Accept user agreement terms</ion-label
              ><ion-checkbox v-model="userInfo.tos"></ion-checkbox
            ></ion-item>
          </ion-card-content>
          <ion-card-content>
            <ion-button expand="full" color="primary" @click="register()"
              >Register</ion-button
            >
          </ion-card-content>
        </ion-card>
      </ion-grid>
    </ion-content></ion-page
  >
</template>

<script>
import {
  IonLabel,
  IonInput,
  IonItem,
  IonSelect,
  IonList,
  IonTextarea,
  IonSelectOption,
  IonButton,
  IonCheckbox,
  IonCard,
  IonCardContent,
  IonGrid,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  loadingController,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
    name: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonSelectOption,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonGrid,
    IonSelect,
    IonList,
    IonTextarea,
    IonItem,
    IonButton,
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  data() {
    return {
      userInfo: {
        displayname: "",
        email: "",
        gender: "",
        intrestedIn: [],
        password: "",
        passwordConfirm: "",
        avatar: null,
        tos: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", {
      registerUser: "registerUser",
    }),
    async register() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Registration in progress please wait...",
        duration: this.timeout,
        backdropDismiss: true,
        translucent: true,
      });
      const showToast = async function (msg) {
        const toast = await toastController.create({
          message: msg,
          animated: true,
          color: "danger",
          duration: 2000,
        });
        return toast.present();
      };
      console.log(this.userInfo);
      if (!this.userInfo.email) {
        return showToast("Email address seems to missing");
      } else if (!this.userInfo.password) {
        return showToast("Password seems to missing");
      } else if (!this.userInfo.passwordConfirm) {
        return showToast("Confirmation password seems to missing");
      } else if (!this.userInfo.displayname) {
        return showToast("Display name seems to missing");
      } else if (!this.userInfo.gender) {
        return showToast("Gender seems to missing");
      } else if (!this.userInfo.about) {
        return showToast("About information seems to missing");
      } else if (!this.userInfo.intrestedIn) {
        return showToast("Intrested In seems to missing");
      } else if (!this.userInfo.tos) {
        return showToast("Terms of service confirmation was not accepted");
      } else {
        await loading.present();
        await this.registerUser(this.userInfo);
        if (this.loginStatus === "success") {
          loading.dismiss();
          this.$router.push("/tabs/home");
        } else {
          loading.dismiss();
          showToast("Registration failed, Please try again");
        }
      }
    },
  },
});
</script>
