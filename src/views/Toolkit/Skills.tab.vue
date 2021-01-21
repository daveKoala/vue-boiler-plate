<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col
        v-for="skill in skills"
        :key="skill.id"
        :lg="3"
        :md="4"
        :sm="6"
        cols="6"
      >
        <v-card :dark="$store.getters['App/dark']">
          <v-card-actions>
            <progress-bar :value="progress(skill)" color="amber" />
          </v-card-actions>
          <v-img height="120px" :src="skill.src" v-on:click="goTo(skill)">
            <v-card-title class="white--text">
              <span class="text-h4">Skill:</span>{{ skill.name }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import { Skill } from "@/interfaces";
export default Vue.extend({
  name: "SkillsTab" as string,
  components: { ProgressBar },
  computed: {
    skills() {
      return this.$store.getters["Skills/all"];
    },
  },
  methods: {
    goTo(skill: Skill): void {
      this.$router.push({
        name: "skillContent",
        params: { id: skill.id },
      });
    },
    progress({ reflections, suggestedPractices }: Skill): number {
      const pV = reflections.length || null;
      if (pV === null) return 0;
      return Math.round((100 * pV) / suggestedPractices);
    },
  },
});
</script>

<style lang="scss" scoped></style>
