<template>
  <v-container>
    <line-chart :data="lineChartData" :options="options" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "@/components/charts/Line.vue";
import { ChartOptions } from "@/components/charts/types";
export default Vue.extend({
  name: "QuickStats" as string,
  components: { LineChart },
  data: () => ({
    chartColors: [
      "185, 118, 224",
      "186, 208, 88",
      "208, 88, 88",
      "88, 208, 202",
      "208, 88, 150",
      "255, 255, 255",
    ],
  }),
  computed: {
    lineChartData() {
      let i = 0;
      const bg = (index: number) => ({
        borderColor: `rgba(${this.chartColors[index]}, 0.3)`,
        backgroundColor: `rgba(${this.chartColors[index]}, 0.3)`,
        fill: false,
      });
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Skills",
            ...bg(i++),
            data: [3, 4, 1, 2, 4, 5],
          },
          {
            label: "Desires",
            ...bg(i++),
            data: [5, 2, 3, 2, 4, 4],
          },
          {
            label: "Knowledge",
            ...bg(i++),
            data: [2, 4, 7, 11],
          },
        ],
      };
    },
    options(): ChartOptions {
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
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                stepSize: 1,
              },
            },
          ],
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
