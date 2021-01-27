<template>
  <base-item
    :title="skill.name"
    :link="{ name: 'skillContent', params: { id: skill.id } }"
    :ratingProgress="`${progress}%`"
  >
    <template v-slot:avatar>
      <v-list-item-avatar>
        <v-img :alt="`${skill.name} avatar`" :src="skill.src" />
      </v-list-item-avatar>
    </template>
  </base-item>
</template>

<script lang="ts">
import Vue from "vue";
import BaseItem from "@/views/CheckIn/BaseListItem.vue";
import { Skill } from "@/interfaces";

export default Vue.extend({
  name: "CheckInListItemSkill" as string,
  components: { BaseItem },
  props: {
    skill: { type: Object as () => Skill, required: true },
  },
  data: () => ({
    star: 3,
  }),
  computed: {
    progress(): number {
      const pV = this.skill.reflections.length || null;
      if (pV === null) return 0;
      return Math.round((100 * pV) / this.skill.suggestedPractices);
    },
  }
});
</script>

<style lang="scss" scoped></style>
