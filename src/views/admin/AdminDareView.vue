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
          <ion-title size="large">User Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid fixed>
          <ion-card>
            <ion-item-divider v-if="getAdminDare.status">
              <ion-button
                slot="end"
                color="danger"
                fill="clear"
                @click="
                  () => router.push('/admin/dare/edit/' + getAdminDare._id)
                "
              >
                <ion-icon :icon="create"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="primary"
                fill="clear"
                @click="() => adminDeleteDare(getAdminDare._id)"
              >
                <ion-icon :icon="trash"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="warning"
                fill="clear"
                @click="showAdminDare()"
              >
                <ion-icon :icon="refreshCircle"></ion-icon
              ></ion-button>
            </ion-item-divider>
            <ion-item-divider
              :color="statusColor(getAdminDare.status)"
              v-if="getAdminDare.status"
            >
              <ion-label slot="start">{{
                getAdminDare.status.toUpperCase()
              }}</ion-label>
              <ion-button
                slot="end"
                color="light"
                fill="clear"
                @click="() => router.push('/admin/dares')"
              >
                <ion-icon :icon="arrowBackOutline" slot="start"></ion-icon>
              </ion-button>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Owner</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ getAdminDare.owner }} </ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider v-if="getAdminDare.taker">
              <ion-col size="2">
                <ion-label color="dark">Taker</ion-label> </ion-col
              ><ion-col>
                <ion-label>{{ getAdminDare.taker }}</ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Difficulty</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ getAdminDare.difficulty }}</ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider>
              <ion-col size="2">
                <ion-label color="dark">Dare</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ getAdminDare.description }}</ion-label>
              </ion-col>
            </ion-item-divider>
            <ion-item-divider
              v-if="getAdminDare.photos && getAdminDare.photos[0]"
            >
              <ion-col size="2">
                <ion-label color="dark">Photos</ion-label>
              </ion-col>
              <ion-col>
                <ion-list
                  v-for="(photo, index) in getAdminDare.photos"
                  :key="index"
                >
                  <ion-img :src="photo.webviewPath"></ion-img>
                </ion-list>
              </ion-col>
            </ion-item-divider>
          </ion-card>
        </ion-grid></div></ion-content
  ></ion-page>
</template>
<script type="ts">
import { useRouter } from "vue-router";
import { arrowBackOutline, create, trash, refreshCircle } from "ionicons/icons";
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
  IonCard,
  IonIcon,
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
    IonCard,
    IonIcon,
    IonCol
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("admindares", {
      getAdminDare: "getAdminDare",
    }),
  },
  created() {
    this.showAdminDare();
  },
  methods: {
    ...mapActions("admindares", {
      adminFetchDare: "adminFetchDare",
      adminDeleteDare: "adminDeleteDare",
    }),
    async showAdminDare() {
      await this.adminFetchDare(this.$route.params.id);
    },
    statusColor(status) {
      if (status === "new") {
        return "light";
      }
      if (status === "completed") {
        return "success";
      } else {
        return "primary";
      }
    },
  },
  watch: {
    $route(from) {
      console.log(from.path);
      if (from.path !== "/admin/dares") {
        this.adminFetchDare(this.$route.params.id);
      }
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
      arrowBackOutline,
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