<template>
  <v-container fluid>
    <install-banner />
    <square-navigation :names="['checkIn', 'toolkit', 'desires']" />
    <alerts />
    <v-row dense no-gutters justify="space-between">
      <v-col cols="12" v-for="(card, index) in cards" :key="`card-${index}`">
        <knowledge-item :card="card" hideActions />
        <v-divider></v-divider>
      </v-col>
      <v-col
        cols="12"
        v-for="(desire, index) in desires"
        :key="`desire-${index}`"
      >
        <knowledge-item :card="desire" hideActions routeName="desireContent" />
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <span style="color: white">My progress</span>
    <quick-stats />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import SquareNavigation from "@/components/SquareNavigation.vue";
import KnowledgeItem from "@/components/Knowledge.item.vue";
import QuickStats from "@/views/Home/QuickStats.vue";
import Alerts from "@/views/Home/Alerts.vue";
import { Card, Desire } from "@/interfaces";
import InstallBanner from "@/components/InstallPrompts/InstallBanner.vue";

export interface SkillData {
  labels: string[];
  datasets: { label: string; backgroundColor: string; data: number[] }[];
}

export default Vue.extend({
  name: "Home",
  components: {
    SquareNavigation,
    KnowledgeItem,
    Alerts,
    QuickStats,
    InstallBanner,
  },
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/bookmarked"];
    },
    desires(): Desire[] {
      return this.$store.getters["Desire/myDesires"];
    },
  },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
});
</script>
