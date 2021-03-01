<template>
  <v-card class="mx-auto" max-width="344" tile flat>
    <v-img
      :src="desire.src"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    ></v-img>

    <v-card-title v-html="desire.name"></v-card-title>
    <v-card-subtitle>
      <desire-selector-content :desire="desire" />
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-checkbox
        v-model="selected"
        color="green lighten-2"
        hide-details
      ></v-checkbox>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Desire } from "@/interfaces";
import Vue from "vue";
import DesireSelectorContent from "./SelectorContent.dialog.vue";
export default Vue.extend({
  name: "DesireCard" as string,
  components: { DesireSelectorContent },
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
// .v-card__text,
// .v-card__title {
//   word-break: normal; /* maybe !important  */
// }
</style>
