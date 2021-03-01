<template>
  <v-dialog v-model="dialog" scrollable min-width="320px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="primary" dark v-bind="attrs" v-on="on" class="ml-1">
        More
      </v-btn>
    </template>
    <v-card :dark="$store.getters['App/dark']">
      <v-img
        height="250"
        :src="desire.src"
        :lazy-src="require('../../assets/bg_image_blur.jpg')"
      ></v-img>
      <v-card-title v-html="desire.name"></v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        {{ $loremIpsum().generateParagraphs(1) }}
        <iframe
          width="275px"
          src="https://www.youtube.com/embed/QJhrZsN43Lo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="float-md-left mr-2"
        ></iframe>
        {{ $loremIpsum().generateParagraphs(3) }}</v-card-text
      >
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Desire } from "@/interfaces";

export default Vue.extend({
  name: "DialogSelectorDialog" as string,
  props: {
    desire: { type: Object as () => Desire, required: true },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    starRating(value: number): void {
      this.$store.commit("Desire/addReview", { id: this.desire.id, value });
    },
  },
});
</script>

<style lang="scss" scoped></style>
