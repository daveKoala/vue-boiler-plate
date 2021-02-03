<template>
  <v-snackbar
    v-model="show"
    :timeout="timeout"
    :color="color"
    elevation="24"
    rounded="pill"
    :class="classes"
    >{{ message }}</v-snackbar
  >
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SnackbarAlert" as string,
  data: () => ({
    show: false,
    timeout: 2000,
    color: "deep-purple accent-4",
    classes: "text--white",
  }),
  watch: {
    message: {
      handler() {
        this.show = true;
      },
      immediate: false,
    },
  },
  computed: {
    message(): string {
      const { message } = this.$store.getters["App/snack"] || {
        message: "Success!",
      };

      return message;
    },
  },
});
</script>

<style lang="scss" scoped></style>
