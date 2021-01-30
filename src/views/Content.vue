<template>
  <v-container fluid>
    <v-card class="mx-auto my-12" :dark="$store.getters['App/dark']">
      <v-img :src="card.src" height="250">
        <new-article :card="card" large />
        <v-card-title class="white--text mt-8">{{
          $route.params.id
        }}</v-card-title>
      </v-img>

      <v-card-actions>
        <go-back small />
        <v-spacer></v-spacer>

        <bookmark-button :id="card.id" :status="card.bookmarked" />

        <Share :linkParam="card.id" />
      </v-card-actions>
      <v-divider></v-divider>

      <v-card-text class="text-justify">
        <p v-for="index in card.flex" :key="index">
          {{ text }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Share from "@/components/Share.vue";
import GoBack from "@/components/GoBack.button.vue";
import BookmarkButton from "@/components/Bookmark.button.vue";
import NewArticle from "@/components/NewArticle.badge.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Content",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  beforeDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  components: { Share, GoBack, BookmarkButton, NewArticle },
  watch: {
    "$route.params.id": {
      handler: function (newValue) {
        if (newValue != null) {
          this.setReadStatus(newValue);
        }
      },
      immediate: true,
    },
  },
  data: () => ({
    timerId: null as number | null,
  }),
  computed: {
    card(): Card {
      return this.$store.getters["Content/byID"](this.$route.params.id);
    },
    text(): string {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.$loremIpsum().generateParagraphs(1);
    },
  },
  methods: {
    setReadStatus(id: string): void {
      this.timerId = setTimeout(() => {
        this.$store.commit("Content/readStatus", id);
      }, 2000);
    },
  },
});
</script>
