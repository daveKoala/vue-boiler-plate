<script lang="ts">
import { Line } from "vue-chartjs";

export default {
  name: "LineChart" as string,
  extends: Line,

  mounted(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.renderChart(this.data, this.options);
  },
  props: {
    data: { type: Object, required: true },
    options: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
