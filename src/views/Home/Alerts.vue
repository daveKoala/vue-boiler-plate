<template>
  <div>
    <v-alert
      v-for="(alert, index) in alerts()"
      :key="`alert-${index}`"
      dismissible
      color="green light-2"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-warning"
      transition="slide-y-transition"
      v-on:input="closeAlert(alert)"
    >
      <RouterLink :to="{ path: alert.url }" v-if="alert.url">{{
        alert.message
      }}</RouterLink>
      <span v-else>{{ alert.message }}</span>
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Alert } from "@/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "Alerts" as string,
  methods: {
    alerts(): Alert[] {
      return this.$store.getters["App/alerts"];
    },
    closeAlert(alert: Alert): void {
      this.$store.commit("App/alertRead", alert.id);
    },
  },
});
</script>

<style lang="scss" scoped></style>
