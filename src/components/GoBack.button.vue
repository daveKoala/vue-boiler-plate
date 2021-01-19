<template>
  <v-btn icon small @click="goBack">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GoBackButton" as string,
  methods: {
    goBack(): void {
      return this.$router.go(-1);
    },
  },
});
</script>

<style lang="scss" scoped></style>
