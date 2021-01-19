<template>
  <v-container fluid>
    <v-sheet class="mx-auto" max-width="1280" color="transparent">
      <square-navigation :names="['home', 'journey', 'toolkit']" />
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
      <v-row dense justify="center">
        <v-col
          cols="6"
          :lg="3"
          :md="4"
          :sm="6"
          v-for="n in 3"
          :key="`twitter-${n}`"
        >
          <Twitter />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Twitter from "@/components/Twitter.vue";
import SquareNavigation from "@/components/SquareNavigation.vue";
import ArticleCard from "@/components/Article/ArticleCard.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "Home",
  components: { Twitter, ArticleCard, SquareNavigation },

  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/bookmarked"];
    },
  },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
});
</script>
