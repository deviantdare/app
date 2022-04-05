<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Server Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Users Admin</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-card>
            <ion-item-divider color="dark">
              <ion-label slot="start">Server Settings</ion-label>
              <ion-button
                fill="clear"
                color="light"
                slot="end"
                @click="showAdminUsers()"
                ><ion-icon :icon="refreshCircle"></ion-icon
              ></ion-button>
              <ion-button
                slot="end"
                color="light"
                fill="clear"
                @click="() => router.push('/admin/settings/edit')"
              >
                <ion-icon :icon="create"></ion-icon>
              </ion-button>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Gender</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>A </ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Email</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>B</ion-label>
              </ion-col>
            </ion-item-divider>
          </ion-card>
        </ion-grid>
      </div></ion-content
    ></ion-page
  >
</template>
<script type="ts">
import { useRouter } from "vue-router";
import { list, create, trash, refreshCircle } from "ionicons/icons";
import {
  IonLabel,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonGrid,
  IonContent,
  IonPage,
  IonItemDivider,
  IonIcon,
  IonCard,
} from "@ionic/vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    IonLabel,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
    IonContent,
    IonPage,
    IonItemDivider,
    IonIcon,
    IonCard,
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("adminserver", {
      getServerSettings: "getServerSettings",
    }),
  },
  created() {
    this.showServerSettings();
  },
  methods: {
    ...mapActions("adminserver", {
      adminFetchServer: "adminFetchServer",
    }),
    async showServerSettings() {
      await this.adminFetchServer();
    },
    statusColor(status) {
      if (status === true) {
        return "success";
      } else {
        return "tertiary";
      }
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
      list,
      create,
      trash,
      refreshCircle,
    };
  },
};
</script>

<style scoped>
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