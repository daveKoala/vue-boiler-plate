<template>
  <v-app id="inspire" :class="inspireClass">
    <component :is="layout">
      <v-fade-transition mode="out-in">
        <router-view :key="$route.fullPath" :layout.sync="layout" />
      </v-fade-transition>
    </component>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    layout: "div"
  }),

  created() {
    this.$vuetify.theme.dark = false;
  }, 
  computed: {
    inspireClass() {
      if(this.$store.getters['App/dark']) {
        return "inspire-dark";
      } else {
        return "inspire-light";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

// .theme--light.v-application {
//   background-color: $AppBackgroundColor;
// }
</style>
