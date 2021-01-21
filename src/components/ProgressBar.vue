<template>
  <v-progress-linear :value="value" color="amber"></v-progress-linear>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProgressBar" as string,
  props: {
    value: { type: Number, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
