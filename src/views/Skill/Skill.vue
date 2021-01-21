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
      <progress-bar :value="50" color="amber" />
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="meanStarValue"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            {{ meanStarValue }} {{ nReflections }}
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-text> {{ skill }} </v-card-text>
      <v-card-actions> 
        <go-back />
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import GoBack from "@/components/GoBack.button.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import { Skill } from "@/interfaces";
export default Vue.extend({
  name: "SkillView" as string,
  components: { GoBack, ProgressBar },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    skill(): Skill {
      return this.$store.getters["Skills/byId"](this.$route.params.id);
    },
    progress(): number {
      const { reflections, suggestedPractices } = this.skill;
      const pV = reflections.length || null;
      if (pV === null) return 0;
      return Math.round((100 * pV) / suggestedPractices);
    },
    meanStarValue(): number {
      if (this.skill.reflections.length < 1) return 0;

      const x = this.skill.reflections.length;
      const total = this.skill.reflections.reduce(
        (accumulator, r) => accumulator + r.value,
        0
      );
      return Math.round(total / x);
    },
    nReflections(): string {
      return `(${this.skill.reflections?.length || 0})`;
    },
    //   rating: {
    //     set(value: number) {
    //       this.$store.commit("Skills/addReflections", {
    //         id: this.skill.id,
    //         value,
    //       });
    //     },
    //     get(): number {
    //       const lastReflection = this.skill.reflections.slice(
    //         this.skill.reflections.length - 1
    //       );

    //       if (lastReflection[0]?.value) {
    //         return lastReflection[0].value;
    //       }
    //       return 1;
    //     },
    //   },
  },
});
</script>

<style lang="scss" scoped></style>
