<template>
  <v-alert
    v-model="alert"
    dismissible
    color="green light-2"
    border="left"
    elevation="2"
    colored-border
    icon="mdi-warning"
    transition="slide-y-transition"
  >
    <RouterLink :to="{ name: 'checkIn' }">Remember to check in</RouterLink>
  </v-alert>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Alerts" as string,
  computed: {
    alert: {
      set(): void {
        this.$store.commit("App/alert", false);
      },
      get(): boolean {
        return this.$store.getters["App/alert"];
      },
    },
  },
});
</script>

<style lang="scss" scoped></style>
