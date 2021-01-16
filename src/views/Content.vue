<template>
  <v-container fluid>
    <v-card class="mx-auto my-12">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        height="250"
      >
        <v-card-title class="white--text mt-8">{{
          $route.params.id
        }}</v-card-title>
      </v-img>
      <v-card-text class="text-justify">
        {{ $route.params.id }}
        <p>
          The model above describes the influences on behavior changes found at
          the intersection of the 3 circles.
        </p>

        <p>
          The goal is not unconscious habits as that would be disingenuous
          instead I want to equip users with tools that if practiced and
          reflected upon would begin to embed positive habits.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Share />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Share from "@/components/Share.vue";

export default Vue.extend({
  name: "Content",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  components: { Share }
});
</script>
