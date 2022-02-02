<template>
  <div id="container">
    <strong>Your dare was Declined!</strong>
    <p>Choose what to do next</p>
    <br />
    <ion-button fill="outline" @click="() => router.push('/game/sub/difficulty')">
      Try another dare</ion-button
    >
    <ion-button fill="outline" @click="() => router.push('/tabs/home')"
      >Go back to homepage</ion-button
    >
  </div>
</template>

 <script>
import { useRouter } from "vue-router";

export default {
  name: "ExploreContainer",
  props: {
    name: String,
  },
  setup() {
    const router = useRouter();
    return { router };
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