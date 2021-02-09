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
          the intersection of the 3 circles. Knowledge, skill and desire are
          three factors that bring about human habits. Habits that are lived.
        </p>

        <h2>Begin</h2>
        <p>
          Before you begin you first need to know where you are going. Your
          organisation has selected areas were they would like to address within
          the organisation. You are given the option to select how you are going
          to achieve this in ways that are relevant to you and your own desires.
        </p>
        <p>
          Understanding your desires and how they align with your organisation's
          we wont waste time, we allow you to keep focused and give you the
          tools and support to succeed
        </p>

        <h2>Supporting you</h2>
        <p>
          Your desires allow us to support you in growing your knowledge and
          skills. Checking in regularly and recording your experience and
          progress will help us focus on your needs
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
