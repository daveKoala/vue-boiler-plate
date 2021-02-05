<template>
  <v-container fluid>
    <v-card :dark="$store.getters['App/dark']" color="transparent" tile flat>
      <v-list two-line color="transparent">
        <v-subheader>Desires: Rate your ability.</v-subheader>
        <desire-check-in-list-item
          v-for="(desire, index) in desires"
          :key="`checkInItem-${index}`"
          :desire="desire"
        />
        <v-divider></v-divider>
        <v-subheader>Skills: Rate your last practice.</v-subheader>
        <skill-check-in-list-item
          v-for="(skill, index) in skills"
          :key="`skill-${index}`"
          :skill="skill"
        />
      </v-list>
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { Card, Skill, Desire } from "@/interfaces";
import DesireCheckInListItem from "@/views/CheckIn/DesireListItem.vue";
import SkillCheckInListItem from "@/views/CheckIn/SkillListItem.vue";

export default Vue.extend({
  name: "CheckIn",
  components: { DesireCheckInListItem, SkillCheckInListItem },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  beforeDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  watch: {
    "$route.params.id": {
      handler: function () {
        this.setAlertStatus();
      },
      immediate: true,
    },
  },
  data: () => ({
    timerId: null as number | null,
  }),
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    },
    desires(): Desire[] {
      return this.$store.getters["Desire/myDesires"];
    },
    skills(): Skill[] {
      return this.$store.getters["Skills/all"];
    },
  },
  methods: {
    setAlertStatus(): void {
      this.timerId = setTimeout(() => {
        this.$store.commit("App/alertRead", "abc");
      }, 2000);
    },
  },
});
</script>
