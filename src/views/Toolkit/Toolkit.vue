<template>
  <v-container fluid>
    <v-tabs
      background-color="white"
      color="deep-purple accent-4"
      right
      v-model="tabIndex"
    >
      <v-tab>Knowledge</v-tab>
      <v-tab>Skills</v-tab>

      <v-tab-item>
        <v-container fluid>
          <v-row dense justify="center">
            <v-col
              v-for="card in cards"
              :key="card.title"
              :lg="3"
              :md="4"
              :sm="6"
              :cols="card.flex"
            >
              <ArticleCard :card="card" />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <skills-tab />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import ArticleCard from "@/components/Article/ArticleCard.vue";
import SkillsTab from "@/views/Toolkit/Skills.tab.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Toolkit",
  components: { ArticleCard, SkillsTab },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    },
    tabIndex: {
      set(value: number | null): void {
        this.$store.commit("App/tab", { tabName: "toolkit", value });
      },
      get(): number | null {
        return this.$store.getters["App/tab"]("toolkit").value || null;
      }
    }
  }
});
</script>
