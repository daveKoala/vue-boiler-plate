<template>
  <div>
    <v-app-bar app color="orange darken-4" class="white--text">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ applicationName }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="orange darken-4"
      fixed
      temporary
      overlay-color="orange darken-4"
      overlay-opacity="0.5"
    >
      <NavigationDrawerContent />
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <slot>
        <p>Put content here</p>
      </slot>
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawerContent from "@/layouts/NavigationDrawerContent.vue";
export default Vue.extend({
  name: "BAsicLayout" as string,
  components: {
    NavigationDrawerContent
  },

  data: () => ({
    drawer: null
  }),

  computed: {
    applicationName(): string {
      return `${this.$store.getters["App/appName"]} (${process.env.VUE_APP_ENV})`;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
</style>
