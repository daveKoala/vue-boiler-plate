<template>
  <v-container fluid>
    <v-card class="mx-auto my-12">
      <v-img :src="card.src" height="250">
        <v-card-title class="white--text mt-8">{{ card.title }}</v-card-title>
      </v-img>
      <v-card-text class="text-justify">
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
        <go-back />
        <v-spacer></v-spacer>
        <v-btn icon :click="bookmark">
          <v-icon color="green">mdi-bookmark</v-icon>
        </v-btn>
        <Share />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Share from "@/components/Share.vue";
import GoBack from "@/components/GoBack.button.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Content",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  components: { Share, GoBack },
  computed: {
    card(): Card {
      return this.$store.getters["Content/byID"](this.$route.params.id);
    },
  },
  methods: {
    bookmark(): void {
      // Replace with bookmark component
    },
  },
});
</script>
