<template>
  <v-list nav dense>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          {{ applicationName }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item
      v-for="({ meta, path }, i) in items"
      :key="i"
      link
      :to="path"
      active-class="blue--text darken4"
    >
      <v-list-item-icon>
        <v-icon>{{ meta.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ meta.displayName }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationDrawerContent",
  computed: {
    items(): unknown {
      return this.$router.options.routes?.filter((route) => route?.meta?.icon);
    },
    applicationName(): string {
      return this.$store.getters["App/appName"];
    },
    subtitle(): string {
      if (process.env.VUE_APP_ENV !== "production")
        return process.env.VUE_APP_ENV;

      return "";
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
</style>
