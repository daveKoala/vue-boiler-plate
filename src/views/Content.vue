<template>
  <v-container fluid>
    <v-card class="mx-auto my-12" :dark="$store.getters['App/dark']">
      <v-img :src="card.src" height="250">
        <new-article :card="card" large />
        <v-card-title class="white--text mt-8">{{
          $route.params.id
        }}</v-card-title>
      </v-img>
      <v-card-text class="text-justify">
        <p>
          The model above describes the influences on behavior changes found at
          the intersection of the 3 circles.
        </p>

        <p>
          The goal is not unconscious habits as that would be disingenuous
          instead I want to equip users with tools that if practiced and
          reflected upon would begin to embed positive habits.
        </p>
      </v-card-text>
      <v-card-actions>
        <go-back />
        <v-spacer></v-spacer>

        <bookmark-button :id="card.id" :status="card.bookmarked" />

        <Share :linkParam="card.id" />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Share from "@/components/Share.vue";
import GoBack from "@/components/GoBack.button.vue";
import BookmarkButton from "@/views/Home/Article/Bookmark.button.vue";
import NewArticle from "@/views/Home/Article/NewArticle.badge.vue";
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
