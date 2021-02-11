<template>
  <line-chart :data="lineChartData" :options="options" />
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
      "225, 191, 0",
      "185, 118, 224",
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
        borderColor: `rgba(${this.chartColors[index]}, 1)`,
        backgroundColor: `rgba(${this.chartColors[index]}, 1)`,
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
            label: "Desires",
            ...bg(i++),
            data: [5, 2, 3, 2, 4, 4],
          },
        ],
      };
    },
    options(): ChartOptions {
      return {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                // beginAtZero: true,
                callback: function (value) {
                  if (Number.isInteger(value)) {
                    return value;
                  }
                },
                stepSize: 1,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                // beginAtZero: true,
                // stepSize: 1,
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
