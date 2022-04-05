<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Users Admin</ion-title>
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
          <ion-button fill="clear" color="warning" @click="showAdminUsers()"
            ><ion-icon :icon="refreshCircle"></ion-icon
          ></ion-button>
          <ion-card v-for="(user, index) in allAdminUsers" :key="index">
            <ion-item-divider :color="statusColor(user.verified)">
              <ion-label slot="start" v-if="user.displayname">{{
                user.displayname.toUpperCase()
              }}</ion-label>
              <ion-label slot="start" v-else>{{
                user.status.toUpperCase()
              }}</ion-label>
              <ion-button
                slot="end"
                color="light"
                fill="clear"
                @click="() => router.push('/admin/user/view/' + user._id)"
              >
                <ion-icon :icon="list"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="light"
                fill="clear"
                @click="() => router.push('/admin/user/edit/' + user._id)"
              >
                <ion-icon :icon="create"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="light"
                fill="clear"
                @click="() => presentAlertConfirm(user._id)"
              >
                <ion-icon :icon="trash"></ion-icon>
              </ion-button>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Gender</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ user.gender }} </ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Email</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ user.email }}</ion-label>
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
  IonCol,
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
    IonCol,
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("adminusers", {
      allAdminUsers: "getAllAdminUsers",
    }),
  },
  created() {
    this.showAdminUsers();
  },
  methods: {
    ...mapActions("adminusers", {
      adminFetchUsers: "adminFetchUsers",
      adminDeleteUser: "adminDeleteUser",
    }),
    async showAdminUsers() {
      await this.adminFetchUsers();
    },
    statusColor(status) {
      if (status === true) {
        return "success";
      } else {
        return "primary";
      }
    },
    async presentAlertConfirm(userId) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Please confirm!",
        message: `Delete ${userId}?`,
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
              this.adminDeleteUser(userId);
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