<template>
  <v-card class="mx-auto card-con" max-width="344">
    <v-img contain :src="link.img" height="200px"></v-img>
    <v-card-title> {{ link.name }} </v-card-title>
    <v-card-subtitle> {{ link.desc }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="sendToUrl(link.url)">
        Explore
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="isShow = !isShow">
        <v-icon>{{ isShow ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="isShow">
        <v-divider></v-divider>
        <v-img contain :src="link.gif" height="200px"></v-img>
        <v-card-text>Based on: {{ link.basedOn }}</v-card-text>
        <v-card-text>Tech stack: {{ link.tech }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["link"],
  name: "card-preview",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    sendToUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>