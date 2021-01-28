<template>
  <v-container>
    <v-list>
      <v-list-item>
        <v-list-item-content>Clear history</v-list-item-content>
        <v-list-item-action>
          <v-btn v-on:click="clearHistory" x-small>Clear</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>Clear bookmarks</v-list-item-content>
        <v-list-item-action>
          <v-btn v-on:click="clearBookmarks" x-small>Clear</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>Reset alerts</v-list-item-content>
        <v-list-item-action>
          <v-btn v-on:click="resetAlerts" x-small>Clear</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>Dark or light theme</v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="dark"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
export default Vue.extend({
  name: "AppSettings" as string,
  components: {},
  computed: {
    dark: {
      set() {
        this.$store.commit("App/toggleDark");
      },
      get() {
        return this.$store.getters["App/dark"];
      },
    },
  },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  methods: {
    clearHistory(): void {
      this.$store.commit("History/clearQRHistory");
    },
    clearBookmarks(): void {
      this.$store.commit("Content/clearBookmarks");
    },
    resetAlerts(): void {
      this.$store.commit("App/alertReset", true);
    },
  },
});
</script>

<style lang="scss" scoped></style>
