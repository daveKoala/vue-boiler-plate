<template>
  <v-container fluid>
    <v-sheet class="mx-auto" max-width="1280" color="transparent">
      <square-navigation :names="['home', 'checkIn', 'toolkit']" />
      <v-row dense no-gutters justify="space-between">
        <v-col
          cols="6"
          sm="6"
          v-for="(card, index) in cards"
          :key="`card-${index}`"
        >
          <knowledge-item :card="card" hideActions />
          <v-divider></v-divider>
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
import KnowledgeItem from "@/components/Knowledge.item.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "Home",
  components: { Twitter, SquareNavigation, KnowledgeItem },

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
