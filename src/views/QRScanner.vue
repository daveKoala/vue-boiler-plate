<template>
  <v-container>
    <v-card class="mx-auto my-12" width="200" height="200" :dark="$store.getters['App/dark']">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <v-list-item
        v-for="(id, index) in qrHistory"
        :key="`history-link-${index}`"
      >
        <v-list-item-content>
          <v-list-item-title>
            <v-btn
              text
              color="primary"
              :to="{ name: 'content', params: { id } }"
            >
              {{ id }}
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        block
        color="secondary"
        dark
        v-if="qrHistory.length"
        v-on:click="clearHistory"
        >Clear history</v-btn
      >
    </v-card>
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
  computed: {
    qrHistory() {
      return this.$store.getters["History/QRHistory"];
    },
  },
  methods: {
    onDecode(str: string): void {
      this.$store.commit("History/addQRHistory", str);
      this.$router.push({ name: "content", params: { id: str } });
    },
    clearHistory(): void {
      this.$store.commit("History/clearQRHistory");
    },
  },
});
</script>

<style lang="scss" scoped></style>
