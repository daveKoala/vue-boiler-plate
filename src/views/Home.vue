<template>
  <v-container fluid>
    <SquareNavigation :items="squareNav" />
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <ArticleCard :card="card" />
      </v-col>
      <v-col cols="12" xs="4" sm="6" v-for="n in 3" :key="`twitter-${n}`">
        <Twitter />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Twitter from "@/components/Twitter.vue";
import SquareNavigation from "@/components/SquareNavigation.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { NavigationItem, Card } from "@/interfaces";

export default Vue.extend({
  name: "Home",
  components: { Twitter, SquareNavigation, ArticleCard },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ] as Card[]
  }),

  computed: {
    squareNav(): NavigationItem[] {
      return this.$store.getters["Navigation/collection"]([
        // "Table",
        "journey",
        "About"
      ]);
    }
  },
  created() {
    this.$emit("update:layout", BasicLayout);
  }
});
</script>
