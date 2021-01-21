<template>
  <v-container fluid>
    <v-card :dark="$store.getters['App/dark']">
      <v-card-text>
        Here we list the skill each has its own start rating and current status
        Here also the "desires" with rating
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-row dense>
      <v-col
        cols="6"
        sm="6"
        v-for="(card, index) in cards"
        :key="`card-${index}`"
      >
        <v-card tile flat>
          <v-list-item dense class="pl-0">
            <v-list-item-avatar tile class="mt-0 mb-0">
              <v-img :src="card.src"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="mb-1">{{
                card.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
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
