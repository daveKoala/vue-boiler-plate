<template>
  <v-btn @click="goBack" v-bind="$attrs">
    <v-icon v-bind="$attrs" class="mr-1">mdi-arrow-left</v-icon>Back
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GoBackButton" as string,
  inheritAttrs: false,
  methods: {
    goBack(): void {
      return this.$router.go(-1);
    },
  },
});
</script>

<style lang="scss" scoped></style>
