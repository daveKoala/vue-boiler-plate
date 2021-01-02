<template>
  <v-list nav dense>
    <v-list-item>
      <v-list-item-content class="title white--text">
        <v-list-item-title>
          {{ applicationName }}
        </v-list-item-title>
        <v-list-item-subtitle class="title white--text">
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item
      v-for="({ icon, name, to }, i) in items"
      :key="i"
      link
      :to="to"
      class="white--text"
      active-class="blue--text darken4"
    >
      <v-list-item-icon>
        <v-icon color="white">{{ icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content class="white--text">
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { NavigationItem } from "@/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "NavigationDrawerContent",
  computed: {
    items(): NavigationItem[] {
      return this.$store.getters["Navigation/all"];
    },
    applicationName(): string {
      return this.$store.getters["App/appName"];
    },
    subtitle(): string {
      if (process.env.VUE_APP_ENV !== "production")
        return process.env.VUE_APP_ENV;

      return "";
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
</style>
