<template>
  <strata-table :headers="headers" />
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import StrataTable from "@/components/StrataTable/StrataTable.vue";

export default Vue.extend({
  components: { StrataTable },
  name: "FunkyTable",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  data: () => ({
    headers: ["Name", "Progress", "Habits", "Goals", "Notification"],
    // justify: ["start", "end", "center", "baseline", "auto", "stretch"],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
.table-container {
  position: fixed;
  width: 400px;
  background-color: green;
  height: 100%;
}
</style>
