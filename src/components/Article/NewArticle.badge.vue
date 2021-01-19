<template>
  <div>
    <v-chip
      class="pa-2 mx-auto"
      color="green lighten-2"
      text-color="white"
      v-if="isNew"
      :small="small"
      :large="large"
    >
      New
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Card } from "@/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "" as string,
  props: {
    card: { type: Object as () => Card, required: true },
    small: { type: Boolean, default: true },
    large: { type: Boolean, default: false },
  },
  computed: {
    isNew(): boolean {
      return this.card.isNew ?? false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
