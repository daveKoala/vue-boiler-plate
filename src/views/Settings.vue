<template>
  <v-container>
    <Tiles />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Tiles from "@/components/Tiles.vue";
export default Vue.extend({
  name: "AppSettings" as string,
  components: { Tiles },
  created() {
    this.$emit("update:layout", BasicLayout);
  }
});
</script>

<style lang="scss" scoped></style>
