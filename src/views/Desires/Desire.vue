<template>
  <v-card class="mx-auto" max-width="344" tile flat>
    <v-img
      :src="desire.src"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    ></v-img>

    <v-card-title v-html="desire.name"></v-card-title>
    <v-card-actions>
      <v-checkbox
        v-model="selected"
        :label="selected ? 'Selected' : 'Select'"
        color="green lighten-2"
        hide-details
      ></v-checkbox>

      <v-spacer></v-spacer>
      <emoji-rating :value="emoji" color="green lighten-2" />
    </v-card-actions>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> More </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-html="$loremIpsum().generateParagraphs(4)">
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Desire } from "@/interfaces";
import Vue from "vue";
import EmojiRating from "./EmojiRating.vue";
export default Vue.extend({
  name: "DesireCard" as string,
  components: { EmojiRating },
  props: {
    desire: { type: Object as () => Desire, required: true },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    emoji(): number {
      return this.desire.review[this.desire.review.length - 1]?.value || 2;
    },
    selected: {
      get(): boolean {
        return this.desire.selected;
      },
      set(): void {
        this.$store.commit("Desire/selectToggle", this.desire.id);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
