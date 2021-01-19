<template>
  <v-card>
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="120px"
    >
      <new-article :card="card" />
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn link icon :to="content()" color="blue" small>
        <v-icon>mdi-book-open-page-variant-outline</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <bookmark-button :id="card.id" :status="card.bookmarked" />

      <Share :linkParam="card.id" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Share from "@/components/Share.vue";
import BookmarkButton from "@/components/Article/Bookmark.button.vue";
import NewArticle from "@/components/Article/NewArticle.badge.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "ArticleCard" as string,
  components: { Share, BookmarkButton, NewArticle },
  props: {
    card: { type: Object as () => Card, required: true }
  },
  methods: {
    content(): { name: string; params: { id: string } } {
      return { name: "content", params: { id: this.card.id } };
    },
    bookmark(): void {
      this.card.bookmarked = !this.card.bookmarked;
    }
  }
});
</script>

<style lang="scss" scoped></style>
