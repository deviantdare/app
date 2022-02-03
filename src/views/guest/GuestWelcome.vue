<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>DEVIANT DARE 😈</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          <ion-card>
            <ion-card-header>
              <ion-card-title
                >✨ Explore your fantasies online</ion-card-title
              >
              <ion-card-content>
                <p>
                  We are a safe, private space to share a photo of your sexual
                  fantasy with a stranger or a lover.
                  Control your own experience, from who you interact with, to
                  how explicit or kinky your interests are.
                  We wont show this demand to them unless they first consent to
                  perform the dare of your choice.
                </p>
              </ion-card-content>
            </ion-card-header>
          </ion-card>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-card>
            <ion-card-header>
              <ion-card-title>⚙️ Control your own experience</ion-card-title>
              <ion-card-content>
                <p>
                  We like to have kinky fun online, but we wanted to be able to
                  choose who to do it with, and how extreme it should be. Our
                  product team is mostly women, and we’ve experienced being
                  hassled on adult social networking sites that allow anyone to
                  contact you. You can choose to start a kinky interaction with
                  a person of your choice. Whether you’re looking to dominate
                  others, submit to them, or play a risky game, you get to
                  create an offer of one of these activities, and then either
                  share the link allowing others to claim it with those you
                  like, or open it up for strangers. If you don’t want to
                  initiate things, browse through our list of people offering
                  their own dares, and choose the one who interests you.</p>
              </ion-card-content>
            </ion-card-header>
          </ion-card>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-card>
            <ion-card-header>
              <ion-card-title>🔐 Share online content safely</ion-card-title>
              <ion-card-content>
                <p>
                  Nothing you share online is truly private. However, rather
                  than sharing your erotic photos with everyone on the net, on
                  this site you share them with a private audience of one
                  person.
                </p>
                <p>
                  By default, your photos automatically expire in 30 days, so
                  you can focus on having sexy new interactions without leaving
                  nude photos around the web that you’ve forgotten about. Want
                  them deleted faster? You can set them to delete immediately
                  after being viewed on our privacy settings page.
                </p>
                <p>
                  If someone doesn’t feel right to you, you can block them at
                  the press of the button, making all your content invisible to
                  them, even things you have already uploaded.
                </p>
              </ion-card-content>
            </ion-card-header>
          </ion-card>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-card>
            <ion-card-header>
              <ion-card-title>🔥 Allow things to heat up</ion-card-title>
              <ion-card-content>
                <p>
                  Our deviant dares come in five levels of explicitness, and we
                  recommend you start at the start. If you’re enjoying
                  interactions with some sexy stranger, why not crank things up
                  and allow them a more extreme interaction?
                </p>
                <p>
                  If you’re having a good time, you can continue to interact
                  privately with specific users, providing you’re both into it.
                  When there’s mutual consent, there’s room for a lot of fun.
                </p>
              </ion-card-content>
            </ion-card-header>
          </ion-card>
        </ion-row>
      </ion-grid></ion-content
    ></ion-page
  >
</template>

 <script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCardTitle,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserHomeContainer",
  props: {
    name: String,
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    const router = useRouter();
    return { warning, router };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  top: 5%;
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