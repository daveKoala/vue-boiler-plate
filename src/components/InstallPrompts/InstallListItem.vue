<template>
  <div>
    <v-list-item v-if="deferredPrompt">
      <v-list-item-content>
        <v-list-item-title>Install this app</v-list-item-title>
        <v-list-item-subtitle>
          You can download and install this app. It uses hardly and space and
          has off line content.
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn small outlined text @click="install">Install</v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { installPromptsMixins } from "./InstallPrompt.mixin";

export default Vue.extend({
  name: "InstallListItem" as string,
  mixins: [installPromptsMixins],
});
</script>

<style lang="scss" scoped>
.v-list-item__subtitle {
  -webkit-line-clamp: unset !important;
  white-space: inherit;
}
</style>
