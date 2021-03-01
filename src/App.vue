<template>
  <v-app id="inspire" :class="inspireClass">
    <snackbar-alert />
    <component :is="layout">
      <v-fade-transition mode="out-in">
        <router-view :key="$route.fullPath" :layout.sync="layout" />
      </v-fade-transition>
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SnackbarAlert from "@/components/Alert.snackbar.vue";
export default Vue.extend({
  name: "App",

  components: { SnackbarAlert },
  data: () => ({
    layout: "div",
  }),

  created() {
    this.$vuetify.theme.dark = false;
  },
  computed: {
    inspireClass() {
      if (this.$store.getters["App/dark"]) {
        return "inspire-dark";
      } else {
        return "inspire-light";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

// .theme--light.v-application {
//   background-color: $AppBackgroundColor;
// }
</style>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
