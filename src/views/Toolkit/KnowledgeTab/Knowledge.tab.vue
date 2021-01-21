<template>
  <v-list-item :key="card.title">
    <v-list-item-avatar rounded>
      <v-img :src="card.src" v-on:click="goTo()"></v-img>
    </v-list-item-avatar>

    <v-list-item-content v-on:click="goTo()" class="mr-1" :class="textColor">
      <v-list-item-title
        v-html="card.title"
        :class="textColor"
      ></v-list-item-title>
      <v-list-item-subtitle>
        <v-chip color="green" text-color="white" x-small v-if="card.isNew">
          New
        </v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action class="ml-0">
      <v-btn icon v-on:click="bookmark()" x-small>
        <v-icon :color="card.bookmarked ? 'green' : ''">mdi-heart</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action class="ml-0">
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
  },
  computed: {
    textColor(): string {
      return this.$store.getters["App/dark"] ? "white--text" : "black--text";
    },
  },
  methods: {
    goTo(): void {
      this.$router.push({ name: "content", params: { id: this.card.id } });
    },
    more(): void {
      console.log("more", this.card.title);
    },
    bookmark(): void {
      this.$store.commit("Content/bookmark", this.card.id);
    },
  },
});
</script>
