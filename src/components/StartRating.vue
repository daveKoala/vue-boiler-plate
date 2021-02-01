<template>
  <v-rating
    :value="value"
    :color="colour"
    dense
    :size="size"
    @input="starClicked($event)"
  ></v-rating>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RatingBar" as string,
  props: {
    value: { type: Number, default: 0 },
    colour: { type: String, default: "amber" },
    size: { type: Number, default: 14 },
  },
  methods: {
    starClicked(e: number): void {
      this.$emit("star-rating", e);
    },
  },
});
</script>

<style lang="scss" scoped></style>
