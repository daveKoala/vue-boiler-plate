<template>
  <div>
    <horizontal-bar :data="skillsData()" :options="options" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HorizontalBar from "@/views/Home/SummaryCharts/charts/HorizontalBar.vue";
import { Skill } from "@/interfaces";

export interface SkillData {
  labels: string[];
  datasets: { label: string; backgroundColor: string; data: number[] }[];
}

export default Vue.extend({
  name: "SummaryCharts" as string,
  components: { HorizontalBar },
  data: () => ({
    colour: [
      "185, 118, 224",
      "186, 208, 88",
      "208, 88, 88",
      "88, 208, 202",
      "208, 88, 150",
      "255, 255, 255",
    ],
  }),
  methods: {
    meanStarValue(skill: Skill): number {
      if (skill.reflections.length < 1) return 0;

      const x = skill.reflections.length;

      const total = skill.reflections.reduce((accumulator, r) => {
        accumulator += r.value;
        return accumulator;
      }, 0);
      return Math.round(total / x);
    },
    skillsData(): SkillData {
      const skills: Skill[] = this.$store.getters["Skills/all"];
      let i = 1;
      const bg = (index: number) => ({
        backgroundColor: `rgba(${this.colour[index]}, 0.3)`,
        borderColor: `rgba(${this.colour[index]}, 0.3)`,
        borderWidth: 1,
      });

      return {
        labels: skills.map((skill) => skill.name),
        datasets: [
          { label: `${i} stars`, ...bg(i++), data: [3, 4, 2] },
          { label: `${i} stars`, ...bg(i++), data: [0, 1, 1] },
          { label: `${i} stars`, ...bg(i++), data: [0, 3, 2] },
          { label: `${i} stars`, ...bg(i++), data: [1, 2, 2] },
          { label: `${i} stars`, ...bg(i++), data: [3, 2, 3] },
          { label: `${i} stars`, ...bg(i++), data: [5, 0, 1] },
        ],
      };
    },
  },
  computed: {
    options(): unknown {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18,
          },
        },
        scales: {
          yAxes: [{ ticks: { fontColor: "white" } }],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                beginAtZero: true,
              },
            },
          ],
        },
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
