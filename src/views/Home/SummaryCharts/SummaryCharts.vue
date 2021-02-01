<template>
  <div>
    <horizontal-bar :data="chartData" :options="options" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HorizontalBar from "@/views/Home/SummaryCharts/charts/HorizontalBar.vue";

export default Vue.extend({
  name: "SummaryCharts" as string,
  components: { HorizontalBar },
  computed: {
    chartData(): unknown {
      return {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 30],
          },
          {
            label: "Data 2",
            backgroundColor: "#ffffff",
            data: [30, 10, 35],
          },
        ],
      };
    },
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
