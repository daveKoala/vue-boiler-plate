<template>
  <v-container>
    <v-list color="transparent">
      <v-list-item>
        <v-list-item-content class="white--text"
          >Clear QR scanner history</v-list-item-content
        >
        <v-list-item-action>
          <v-btn v-on:click="clearHistory" x-small color="primary">Clear</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="white--text"
          >Clear bookmarks</v-list-item-content
        >
        <v-list-item-action>
          <v-btn v-on:click="clearBookmarks" x-small color="primary"
            >Clear</v-btn
          >
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="white--text"
          >Clear ratings & progress</v-list-item-content
        >
        <v-list-item-action>
          <v-btn v-on:click="clearProgress" x-small color="primary"
            >Clear</v-btn
          >
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="white--text"
          >Reset alerts</v-list-item-content
        >
        <v-list-item-action>
          <v-btn v-on:click="resetAlerts" x-small color="primary">Clear</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content class="white--text"
          >Dark or light theme</v-list-item-content
        >
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
  data: () => ({
    snackbar: { show: false, text: "" },
  }),
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
      this.alert("Success: Clear QR history");
    },
    clearBookmarks(): void {
      this.$store.commit("Content/clearBookmarks");
      this.alert("Success: Clear bookmarks");
    },
    resetAlerts(): void {
      this.$store.commit("App/alertReset", true);
      this.alert("Success: Reset alerts");
    },
    clearProgress(): void {
      this.$store.commit("Skills/resetProgress");
      this.$store.commit("Desire/resetProgress");
      this.alert("Success: Clear progress");
    },
    alert(message = "Success"): void {
      this.$store.commit("App/setSnack", { message });
    },
  },
});
</script>

<style lang="scss" scoped></style>
