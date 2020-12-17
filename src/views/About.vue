<template>
  <v-container>
    <h1>This is an about page</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

export default Vue.extend({
  name: "About",
  created() {
    this.$emit("update:layout", BasicLayout);
  }
});
</script>
