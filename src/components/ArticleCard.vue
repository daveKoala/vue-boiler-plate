<template>
  <v-card>
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <ArticleContent :content="card" />
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <Share />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Share from "@/components/Share.vue";
import ArticleContent from "@/components/ArticleContent.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "ArticleCard" as string,
  components: { Share, ArticleContent },
  props: {
    card: { type: Object as () => Card, required: true }
  }
});
</script>

<style lang="scss" scoped></style>
