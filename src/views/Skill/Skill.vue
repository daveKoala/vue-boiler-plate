<template>
  <v-container>
    <v-card :dark="$store.getters['App/dark']">
      <v-img
        :src="skill.src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="120px"
      >
        <v-card-title v-text="skill.name"></v-card-title>
      </v-img>
      <v-card-actions>
        <go-back x-small />
        <v-spacer></v-spacer>
        <star-rating
          :value="meanStarValue"
          v-on:star-rating="starRating"
        ></star-rating>

        <div class="grey--text ml-4">
          {{ meanStarValue }} {{ nReflections }}
        </div>
      </v-card-actions>
      <progress-bar :value="progress" color="amber" />

      <v-card-title v-html="skill.subTitle" />
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <p v-for="index in skill.suggestedPractices" :key="index">
          {{ text }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import GoBack from "@/components/GoBack.button.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import StarRating from "@/components/StartRating.vue";
import { Skill } from "@/interfaces";
import ProgressMixin from "@/mixins/progress";
export default Vue.extend({
  name: "SkillView" as string,
  components: { GoBack, ProgressBar, StarRating },
  mixins: [ProgressMixin],
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    text(): string {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.$loremIpsum().generateParagraphs(1);
    },
    skill(): Skill {
      return this.$store.getters["Skills/byId"](this.$route.params.id);
    },
    nReflections(): string {
      return `(${this.skill.reflections?.length || 0})`;
    },
    meanStarValue(): number {
      if (this.skill.reflections.length < 1) return 0;

      const x = this.skill.reflections.length;

      const total = this.skill.reflections.reduce((accumulator, r) => {
        accumulator += r.value;
        return accumulator;
      }, 0);
      return Math.round(total / x);
    },
  },
  methods: {
    starRating(e: number): void {
      console.log("New rating: ", e)
      this.$store.commit("Skills/addReflections", {
        id: this.skill.id,
        value: e,
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
