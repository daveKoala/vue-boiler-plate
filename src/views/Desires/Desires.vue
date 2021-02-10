<template>
  <v-container>
    <v-alert color="green lighten-2" border="left" elevation="2" colored-border>
      What would you like to do better? Choose as many or as few as you want
    </v-alert>
    <v-row>
      <v-col cols="6" md="4" v-for="(item, index) in items" :key="index">
        <desire-card :desire="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
// import Share from "@/components/Share.vue";
import DesireCard from "./Desire.vue";

export default Vue.extend({
  name: "Desires" as string,
  components: { DesireCard },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  beforeDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  data: () => ({
    timerId: null as number | null,
    dialog: false,
    panel: [],
    icons: {
      mdiAccount: "mdi-home",
      mdiPencil: "mdi-home",
      mdiShareVariant: "mdi-share-variant-outline",
    },
    rating: 0,
    selected: false,
  }),
  watch: {
    "$route.params.id": {
      handler: function () {
        this.setAlertStatus();
      },
      immediate: true,
    },
  },
  computed: {
    items() {
      return this.$store.getters["Desire/all"];
    },
  },
  methods: {
    setAlertStatus(): void {
      this.timerId = setTimeout(() => {
        this.$store.commit("App/alertRead", "a1b2c3");
      }, 2000);
    },
  },
});
</script>

<style lang="scss" scoped></style>
