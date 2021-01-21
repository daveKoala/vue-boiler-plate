<template>
  <v-container fluid>
    <v-card :dark="$store.getters['App/dark']">
      <v-card-text>
        Here we list the skill each has its own start rating and current status
        Here also the "desires" with rating
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "CheckIn",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    },
  },
});
</script>
