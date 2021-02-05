<template>
  <v-container>
    <v-tabs
      background-color="transparent"
      right
      v-model="tabIndex"
      :dark="$store.getters['App/dark']"
      class="pb-1"
    >
      <v-tab>Knowledge</v-tab>
      <v-tab>Skills</v-tab>
    </v-tabs>

    <v-list dense v-if="tabIndex != 1">
      <v-list-item>
        <v-text-field
          color="white"
          background-color="white"
          class="text--white"
          v-model="searchText"
          label="Search"
          solo
          outlined
          clearable
          v-if="tabIndex != 1"
        ></v-text-field>
      </v-list-item>
      <template v-for="(card, index) in cards">
        <knowledge-tab-item
          :card="card"
          :key="`knowledge-tab-item-${index}`"
          :dark="$store.getters['App/dark']"
        />
        <v-divider :key="`card-divider-${index}`"></v-divider>
      </template>
    </v-list>

    <skills-tab v-if="tabIndex === 1" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import KnowledgeTabItem from "@/components/Knowledge.item.vue";
import SkillsTab from "@/views/Toolkit/Skills.tab.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Toolkit",
  components: { SkillsTab, KnowledgeTabItem },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  data: () => ({
    searchText: "",
  }),
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/filtered"](this.searchText);
    },
    tabIndex: {
      set(value: number | null): void {
        this.$store.commit("App/tab", { tabName: "toolkit", value });
      },
      get(): number | null {
        return this.$store.getters["App/tab"]("toolkit").value || null;
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
</style>
