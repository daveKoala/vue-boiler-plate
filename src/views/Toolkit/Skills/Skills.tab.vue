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
        <skill-card :skill="skill" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SkillCard from "@/views/Toolkit/Skills/Skill.vue";
export default Vue.extend({
  name: "SkillsTab" as string,
  components: { SkillCard },
  computed: {
    skills() {
      return this.$store.getters["Skills/all"];
    },
  },
});
</script>

<style lang="scss" scoped></style>
