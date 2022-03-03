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
                @click="
                  () => router.push('/admin/dare/edit/' + getAdminDare._id)
                "
              >
                Edit
                <ion-icon :icon="create" slot="start"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="primary"
                @click="() => adminDeleteDare(getAdminDare._id)"
              >
                Delete
                <ion-icon :icon="trash" slot="start"></ion-icon>
              </ion-button>
                            <ion-button slot="end" color="warning" @click="showAdminDare()"
                >Refresh</ion-button
              >
            </ion-item-divider>
            <ion-item-divider
              :color="statusColor(getAdminDare.status)"
              v-if="getAdminDare.status"
            >
              <ion-label slot="start">{{ getAdminDare.status.toUpperCase() }}</ion-label>
              <ion-button
                slot="end"
                color="light"
                @click="() => router.push('/admin/dares')"
              >
                Back
                <ion-icon :icon="arrowBackOutline" slot="start"></ion-icon>
              </ion-button>
            </ion-item-divider>
            <ion-item-divider>
              <ion-chip color="primary">Owner</ion-chip>
              <ion-label>{{ getAdminDare.owner }} </ion-label>
            </ion-item-divider>
            <ion-item-divider v-if="getAdminDare.taker">
              <ion-chip color="primary">Taker</ion-chip>
              <ion-label>{{ getAdminDare.taker }}</ion-label>
            </ion-item-divider>
            <ion-item-divider>
              <ion-chip color="primary">Difficulty</ion-chip>
              <ion-label>{{ getAdminDare.difficulty }}</ion-label>
            </ion-item-divider>
            <ion-item-divider>
              <ion-chip color="primary">Dare</ion-chip>
              <ion-label>{{ getAdminDare.description }}</ion-label>
            </ion-item-divider>
            <ion-item-divider
              v-if="getAdminDare.photos && getAdminDare.photos[0]"
            >
              <ion-chip color="primary">Photos</ion-chip>
              <ion-list
                v-for="(photo, index) in getAdminDare.photos"
                :key="index"
              >
                <ion-img :src="photo.webviewPath"></ion-img>
              </ion-list>
            </ion-item-divider>
          </ion-card>
        </ion-grid></div></ion-content
  ></ion-page>
</template>
<script type="ts">
import { useRouter } from "vue-router";
import { arrowBackOutline, create, trash } from "ionicons/icons";
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
  IonChip,
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
    IonChip,
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
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
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