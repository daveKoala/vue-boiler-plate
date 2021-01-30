import Vue from "vue";
import { Skill } from "@/interfaces";

const progressMixin = Vue.extend({
  computed: {
    progress(): number {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const pV = (this.skill as Skill).reflections.length || null;
      if (pV === null) return 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return Math.round((100 * pV) / (this.skill as Skill).suggestedPractices);
    },
  },
});

export default progressMixin;
