<template>
  <v-container>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    this.$emit("update:layout", BasicLayout);
  }
});
</script>
