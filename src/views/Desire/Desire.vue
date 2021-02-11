<template>
  <v-container>
    <v-card :dark="$store.getters['App/dark']">
      <v-img
        :src="desire.src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="120px"
      >
        <v-card-title v-text="desire.name"></v-card-title>
      </v-img>
      <v-card-actions>
        <go-back x-small />
        <v-spacer></v-spacer>
        <v-btn @click="showProgress = !showProgress" text>{{
          !showProgress ? "Progress" : "Hide"
        }}</v-btn>
      </v-card-actions>
      <Progress v-if="showProgress" transition="scroll-y-transition" />
      <v-card-text v-html="$loremIpsum().generateParagraphs(1)"> </v-card-text>
      <v-card-text
        ><iframe
          width="275px"
          src="https://www.youtube.com/embed/QJhrZsN43Lo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></v-card-text>
      <v-card-text v-html="$loremIpsum().generateParagraphs(2)"> </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import GoBack from "@/components/GoBack.button.vue";
import Progress from "./ProgressChart.vue";
import { Desire } from "@/interfaces";
export default Vue.extend({
  name: "Desire" as string,
  components: { GoBack, Progress },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  data: () => ({
    showProgress: true,
  }),
  computed: {
    desire(): Desire {
      return this.$store.getters["Desire/id"](this.$route.params.id);
    },
  },
});
</script>

<style lang="scss" scoped></style>
