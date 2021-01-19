<template>
  <v-dialog v-model="dialog" width="500" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        color="green lighten-2"
        :dark="$store.getters['App/dark']"
        v-bind="attrs"
        v-on="on"
        x-small
      >
        <v-icon>mdi-binoculars</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar :dark="$store.getters['App/dark']" color="primary">
        <v-spacer></v-spacer>
        <v-btn icon :dark="$store.getters['App/dark']" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-img :src="content.src"></v-img>
      <v-card-title class="headline grey lighten-2">
        {{ content.title }}
      </v-card-title>

      <v-card-text>
        <p v-for="n in content.flex" :key="`${n}-body`">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <Share :linkParam="content.id" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Share from "@/components/Share.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "ArticlePreview" as string,
  components: { Share },
  props: {
    content: { type: Object as () => Card, required: true },
  },
  data: () => ({
    dialog: false,
  }),
});
</script>

<style lang="scss" scoped></style>
