<template>
  <v-list-item :key="card.name">
    <v-list-item-avatar rounded max-width="30">
      <v-img :src="card.src" v-on:click="goTo()"></v-img>
    </v-list-item-avatar>

    <v-list-item-content v-on:click="goTo()" class="mr-1" :class="textColor">
      <v-list-item-title
        v-html="card.name"
        :class="textColor"
      ></v-list-item-title>
      <v-list-item-subtitle v-if="!hideActions">
        <v-chip color="green" text-color="white" x-small v-if="card.isNew">
          New
        </v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action class="ml-0" v-if="!hideActions">
      <v-btn icon v-on:click="bookmark()" x-small>
        <v-icon :color="card.bookmarked ? 'green lighten-2' : ''"
          >mdi-heart</v-icon
        >
      </v-btn>
    </v-list-item-action>
    <v-list-item-action class="ml-0" v-if="!hideActions">
      <share :linkParam="card.id" />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import Share from "@/components/Share.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Toolkit",
  components: { Share },
  props: {
    card: { type: Object as () => Card, required: true },
    hideActions: { type: Boolean, default: false },
  },
  data: () => ({
    textSizeClass: "caption",
  }),
  computed: {
    textColor(): string {
      return this.$store.getters["App/dark"]
        ? `white--text ${this.textSizeClass}`
        : `black--text ${this.textSizeClass}`;
    },
  },
  methods: {
    goTo(): void {
      this.$router.push({ name: "content", params: { id: this.card.id } });
    },
    more(): void {
      console.log("more", this.card.name);
    },
    bookmark(): void {
      this.$store.commit("Content/bookmark", this.card.id);
    },
  },
});
</script>
