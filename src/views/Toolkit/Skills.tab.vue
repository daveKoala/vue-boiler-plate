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
        <v-card>
          <v-img
            :src="skill.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="120px"
          >
            <v-card-title v-text="skill.name"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn link icon :to="skillContent(skill)" color="blue" small>
              <v-icon>mdi-book-open-page-variant-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Skill } from "@/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "SkillsTab" as string,
  computed: {
    skills() {
      return this.$store.getters["Skills/all"];
    }
  },
  methods: {
    skillContent(skill: Skill): { name: string; params: { id: string } } {
      return { name: "skillContent", params: { id: skill.id } };
    }
  }
});
</script>

<style lang="scss" scoped></style>
