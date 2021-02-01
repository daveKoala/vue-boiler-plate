<template>
  <v-container fluid>
    <square-navigation :names="['checkIn', 'toolkit', 'desires']" />
    <alerts />
    <v-row dense no-gutters justify="space-between">
      <v-col cols="12" v-for="(card, index) in cards" :key="`card-${index}`">
        <knowledge-item :card="card" hideActions />
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <summary-charts />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import SquareNavigation from "@/components/SquareNavigation.vue";
import KnowledgeItem from "@/components/Knowledge.item.vue";
import Alerts from "@/views/Home/Alerts.vue";
import SummaryCharts from "@/views/Home/SummaryCharts/SummaryCharts.vue";
import { Card } from "@/interfaces";

export default Vue.extend({
  name: "Home",
  components: { SquareNavigation, KnowledgeItem, Alerts, SummaryCharts },

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
