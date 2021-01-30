<template>
  <v-card flat tile class="pa-2" color="transparent">
    <p>
      In the era of responsive design, often times we will have a series of
      card-like divs. While we may show them all on desktop, on mobile things
      tend to be different. What if we want to have an inner container where the
      user scrolls left and right to view each card? How do we achieve that?
    </p>

    <v-card
      tile
      flat
      v-for="(collection, key) in collection"
      :key="`collection-${key}`"
      color="transparent"
    >
      <v-card-title
        v-html="collection.title"
        class="white--text"
      ></v-card-title>
      <div class="scrolling-wrapper-flexbox">
        <div
          class="card"
          v-for="(card, index) in collection.cards"
          :key="`card-${index}`"
        >
          <v-card tile flat v-on:click="goTo(card)">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="120px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </div>
      </div>
       <v-divider></v-divider>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "LibraryBase" as string,
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    collection(): { id: string; title: string; cards: Card[] }[] {
      const cards = this.$store.getters["Content/all"];

      return [
        { id: "1", title: "Listening", cards },
        { id: "12", title: "Question", cards },
        { id: "123", title: "Feedback", cards },
        { id: "1234", title: "Delegating", cards },
      ];
    },
  },
  methods: {
    goTo(card: Card): void {
      this.$router.push({ name: "content", params: { id: card.id } });
    },
  },
});
</script>

<style lang="scss" scoped>
$white: #ffffff;
$border-colour: #ffffff;
$card-height: 124;

h2 {
  color: $white;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .card {
    display: inline-block;
  }
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  .card {
    flex: 0 0 auto;
    margin-right: 3px;
  }
}

.card {
  border: 2px solid $border-colour;
  width: 150px;
  height: $card-height + px;
  background: black;
}

.scrolling-wrapper,
.scrolling-wrapper-flexbox {
  height: ($card-height + 5) + px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
