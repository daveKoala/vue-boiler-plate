<template>
  <v-btn icon @click="bookmark()">
    <v-icon :color="status ? 'green' : ''">mdi-bookmark</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BookmarkButton" as string,
  props: {
    id: { type: String, required: true },
    status: { type: Boolean, required: false }
  },
  methods: {
    bookmark(): void {
      this.$store.commit("Content/bookmark", this.id);
    }
  }
});
</script>

<style lang="scss" scoped></style>
