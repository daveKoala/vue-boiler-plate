<template>
  <v-container fluid>
    <v-card height="100%" color="transparent" flat tile>
      <v-img
        :src="require('../assets/desire_skill_knowledge.png')"
        class="my-3"
        contain
        height="200"
      />
      <v-card-text class="text-justify white--text">
        <p>
          The model above describes the influences on behavior changes found at
          the intersection of the 3 circles.
        </p>

        <p>
          The goal is not unconscious habits as that would be impossible is a
          short space of time, instead I want to equip users with tools that if
          practiced and reflected upon would begin to embed positive habits.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

export default Vue.extend({
  name: "About",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
});
</script>
