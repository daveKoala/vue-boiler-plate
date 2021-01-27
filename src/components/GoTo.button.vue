<template>
  <v-btn icon small @click="goTo">
    <v-icon color="green lighten-2">mdi-book-open-blank-variant</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { To } from "@/interfaces";
import Vue from "vue";

export default Vue.extend({
  name: "GoToButton" as string,
  props: {
    link: { type: Object as () => To, required: true },
  },
  methods: {
    goTo(): void {
      this.$router.push(this.link);
    },
  },
});
</script>

<style lang="scss" scoped></style>
