<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Tiles />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Tiles from "./components/Tiles.vue";

export default Vue.extend({
  name: "App",

  components: {
    Tiles
  },

  data: () => ({
    //
  })
});
</script>
