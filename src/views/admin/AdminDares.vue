<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dares Admin</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dares Admin</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-button fill="clear" color="warning" @click="showAdminUsers()"
            ><ion-icon :icon="refreshCircle"></ion-icon
          ></ion-button>
          <ion-card v-for="(dare, index) in allAdminDares" :key="index">
            <ion-item-divider :color="statusColor(dare.status)">
              <ion-label slot="start">{{
                dare.status.toUpperCase()
              }}</ion-label>
                            <ion-button
                slot="end"
                fill="clear"
                color="light"
                @click="() => router.push('/admin/dare/view/' + dare._id)"
              >
                <ion-icon :icon="list"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                fill="clear"
                color="light"
                @click="() => router.push('/admin/dare/edit/' + dare._id)"
              >
                <ion-icon :icon="create"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                fill="clear"
                color="light"
                @click="() => presentAlertConfirm(dare._id)"
              >
                <ion-icon :icon="trash"></ion-icon>
              </ion-button>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Owner</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ dare.owner }} </ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider v-if="dare.taker">
              <ion-col size="2">
                <ion-label color="dark">Taker</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ dare.taker }}</ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Difficulty</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{
                  translateDifficulty(dare.difficulty)
                }}</ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Description</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ dare.description }}</ion-label>
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
  alertController,
  IonCol
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
    IonCol
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("admindares", {
      allAdminDares: "getAllAdminDares",
    }),
  },
  created() {
    this.showAdminDares();
  },
  methods: {
    ...mapActions("admindares", {
      adminFetchDares: "adminFetchDares",
      adminDeleteDare: "adminDeleteDare",
    }),
    async showAdminDares() {
      await this.adminFetchDares();
    },
    translateDifficulty(difficulty) {
      if (difficulty === 1) {
        return "TITILLATING";
      }
      if (difficulty === 2) {
        return "AROUSING";
      }
      if (difficulty === 3) {
        return "EXPLICIT";
      }
      if (difficulty === 4) {
        return "EDGY";
      }
      if (difficulty === 5) {
        return "HARDCORE";
      }
    },
    statusColor(status) {
      if (status === "new") {
        return "tertiary";
      }
      if (status === "completed") {
        return "success";
      } else {
        return "primary";
      }
    },
    async presentAlertConfirm(dareId) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Please confirm!",
        message: `Delete ${dareId}?`,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
          },
          {
            text: "Okay",
            id: "confirm-button",
            handler: () => {
              this.adminDeleteDare(dareId);
            },
          },
        ],
      });
      return alert.present();
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
#container {
  position: absolute;
  left: 0;
  right: 0;
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