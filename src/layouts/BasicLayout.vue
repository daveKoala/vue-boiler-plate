<template>
  <div>
    <v-app-bar app flat :dark="$store.getters['App/dark']">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-icon v-if="icon" class="mr-1">{{ icon }}</v-icon>
      <v-toolbar-title>
        {{ applicationName }}
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      :dark="$store.getters['App/dark']"
    >
      <NavigationDrawerContent />
    </v-navigation-drawer>

    <v-main class="">
      <v-sheet class="mx-auto" color="transparent">
        <slot>
          <p>Put content here</p>
        </slot>
      </v-sheet>
    </v-main>

    <BottomNav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawerContent from "@/layouts/NavigationDrawerContent.vue";
import BottomNav from "@/layouts/BottomNavigation.vue";
export default Vue.extend({
  name: "BasicLayout" as string,
  components: {
    NavigationDrawerContent,
    BottomNav,
  },

  data: () => ({
    drawer: null,
  }),

  computed: {
    icon(): string | null {
      if (this.$route.meta.icon) return this.$route.meta.icon;
      return null;
    },
    applicationName(): string {
      const env =
        process.env.VUE_APP_ENV.toLowerCase() !== "production"
          ? `(${process.env.VUE_APP_ENV})`
          : "";
      const name =
        this.$route.name?.toLowerCase() === "home"
          ? `${this.$store.getters["App/appName"]} ${env}`
          : this.$route.meta.displayName ||
            `${this.$store.getters["App/appName"]} ${env}`;

      return name;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

.v-toolbar__title {
  text-transform: capitalize;
  font-weight: 600;
}
</style>
