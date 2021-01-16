<template>
  <v-container fluid>
    <v-tabs background-color="white" color="deep-purple accent-4" right>
      <v-tab>Knowledge</v-tab>
      <v-tab>Skills</v-tab>

      <v-tab-item>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <ArticleCard :card="card" />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container fluid> some thing her </v-container>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "ToolKit",
  components: { ArticleCard },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    }
  }
});
</script>
