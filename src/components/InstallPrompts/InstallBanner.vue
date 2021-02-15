<template>
  <div>
    <v-banner v-if="deferredPrompt" color="info" dark class="text-left">
      You can install this site as an app on your phone. It takes up hardly any
      space and works off line too

      <template v-slot:actions>
        <v-btn text outline @click="dismiss">Dismiss</v-btn>
        <v-btn text outline @click="install">Install</v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { installPromptsMixins } from "./InstallPrompt.mixin";

interface Data {
  deferredPrompt: Event | null;
  days: number;
}

export default Vue.extend({
  name: "InstallBanner" as string,
  mixins: [installPromptsMixins],
});
</script>

<style lang="scss" scoped></style>
