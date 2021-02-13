<template>
  <v-banner v-if="deferredPrompt" color="info" dark class="text-left">
    You can install this site as an app on your phone. It takes up hardly any
    space and works off line too

    <template v-slot:actions>
      <v-btn text @click="dismiss">Dismiss</v-btn>
      <v-btn text @click="install">Install</v-btn>
    </template>
  </v-banner>
</template>

<script lang="ts">
import Vue from "vue";
import Cookies from "js-cookie";

interface Data {
  deferredPrompt: Event | null;
  days: number;
}

export default Vue.extend({
  name: "InstallBanner" as string,
  data: (): Data => ({
    deferredPrompt: null,
    days: 15,
  }),
  methods: {
    async dismiss() {
      Cookies.set("add-to-home-screen", "dismissed-install", { expires: 15 });
      this.deferredPrompt = null;
    },
    async install() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.deferredPrompt.prompt();
    },
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.deferredPrompt = e;
      }
    });

    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
});
</script>

<style lang="scss" scoped></style>
