<template>
  <v-container>
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
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  methods: {
    onDecode(str: string) {
      this.$router.push({ name: "content", params: { id: str } });
    },
  },
});
</script>

<style lang="scss" scoped></style>
