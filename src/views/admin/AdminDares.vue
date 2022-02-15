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
          <ion-button @click="showAdminDares()">Refresh</ion-button>
          <ion-card>
            <ion-item v-for="(dare, index) in allAdminDares" :key="index">
              <ion-label stacked>{{ dare.status }}</ion-label>
              <ion-label stacked>{{ dare.owner }} </ion-label>
              <ion-label v-if="dare.taker">{{ dare.taker }}</ion-label>
              <ion-label>{{ dare.difficulty }}</ion-label>
              <ion-label>{{ dare.description }}</ion-label>
              <ion-button
                slot="end"
                color="white"
                @click="() => router.push('/admin/dare/view/' + dare._id)"
              >
                View
                <ion-icon :icon="list" slot="end"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="warning"
                @click="() => router.push('/admin/dare/edit/' + dare._id)"
              >
                Edit
                <ion-icon :icon="create" slot="end"></ion-icon>
              </ion-button>
              <ion-button
                slot="end"
                color="primary"
                @click="() => adminDeleteDare(dare._id)"
              >
                Delete
                <ion-icon :icon="trash" slot="end"></ion-icon>
              </ion-button>
            </ion-item>
          </ion-card>
        </ion-grid></div></ion-content
  ></ion-page>
</template>
<script type="ts">
import { useRouter } from "vue-router";
import { list, create, trash } from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonGrid,
  IonContent,
  IonPage,
  IonCardSubtitle,
} from "@ionic/vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
    IonContent,
    IonPage,
    IonCardSubtitle,
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