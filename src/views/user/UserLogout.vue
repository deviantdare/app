<template>
  <ion-page>
    <div id="container">
      <strong>Logged out successfully!</strong>
      <p>Choose what to do next</p>
      <br />
      <ion-button fill="outline" @click="() => router.push('/guest/login')">
        Login</ion-button
      >
      <ion-button fill="outline" @click="() => router.push('/')"
        >Back to homepage</ion-button
      >
    </div>
  </ion-page>
</template>

 <script>
import { useRouter } from "vue-router";
import { IonButton, IonPage } from "@ionic/vue";
import { mapActions } from "vuex";

export default {
  name: "ExploreContainer",
  props: {
    name: String,
  },
  components: {
    IonButton,
    IonPage,
  },
  methods: {
    ...mapActions("auth", {
      logoutUser: "logoutUser",
    }),
    async logout() {
      await this.logoutUser();
    },
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  created() {
    this.logout();
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