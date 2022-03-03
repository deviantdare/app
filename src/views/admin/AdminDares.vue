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
            <ion-item-divider>
            <ion-button color="warning" slot="end" @click="showAdminDares()"
              >Refresh</ion-button
            >
            </ion-item-divider>
            <ion-card v-for="(dare, index) in allAdminDares" :key="index">
              <ion-item-divider :color="statusColor(dare.status)">
                <ion-label slot="start">{{
                  dare.status.toUpperCase()
                }}</ion-label>
                <ion-button
                  slot="end"
                  color="danger"
                  @click="() => router.push('/admin/dare/edit/' + dare._id)"
                >
                  Edit
                  <ion-icon :icon="create" slot="start"></ion-icon>
                </ion-button>
                <ion-button
                  slot="end"
                  color="primary"
                  @click="() => adminDeleteDare(dare._id)"
                >
                  Delete
                  <ion-icon :icon="trash" slot="start"></ion-icon>
                </ion-button>
                <ion-button
                  slot="end"
                  color="light"
                  @click="() => router.push('/admin/dare/view/' + dare._id)"
                >
                  View
                  <ion-icon :icon="list" slot="start"></ion-icon>
                </ion-button>
              </ion-item-divider>
              <ion-item-divider>
                <ion-label>{{ dare.owner }} </ion-label>
              </ion-item-divider>
              <ion-item-divider v-if="dare.taker">
                <ion-label>{{ dare.taker }}</ion-label>
              </ion-item-divider>
              <ion-item-divider>
                <ion-label>{{ dare.difficulty }}</ion-label>
              </ion-item-divider>
              <ion-item-divider>
                <ion-label>{{ dare.description }}</ion-label>
              </ion-item-divider>
              <ion-card-footer></ion-card-footer>
            </ion-card>
        </ion-grid></div></ion-content
  ></ion-page>
</template>
<script type="ts">
import { useRouter } from "vue-router";
import { list, create, trash } from "ionicons/icons";
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
  setup() {
    const router = useRouter();
    return {
      router,
      list,
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