<template>
  <v-container>
    <span class="white--text">{{ qrData }}</span>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { QrcodeStream } from "vue-qrcode-reader";

export default Vue.extend({
  name: "QRScanner" as string,
  components: { QrcodeStream },
  data: () => ({
    qrData: "sdssdsds",
  }),
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  methods: {
    onDecode(r: string) {
      this.qrData = r;
    },
  },
});
</script>

<style lang="scss" scoped></style>
