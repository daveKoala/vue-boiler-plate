<script lang="ts">
import { HorizontalBar } from "vue-chartjs";

export default {
  name: "HorizontalBar" as string,
  extends: HorizontalBar,

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
