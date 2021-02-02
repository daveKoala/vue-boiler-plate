<template>
  <base-item
    :title="skill.name"
    :id="skill.id"
    :link="{ name: 'skillContent', params: { id: skill.id } }"
    :ratingProgress="`${progress}%`"
    v-on:star-rating="starRating"
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
import ProgressMixin from "@/mixins/progress";

export default Vue.extend({
  name: "CheckInListItemSkill" as string,
  components: { BaseItem },
  mixins: [ProgressMixin],
  props: {
    skill: { type: Object as () => Skill, required: true },
  },
  data: () => ({
    star: 3,
  }),
  methods: {
    starRating(e: { id: string; value: number }): void {
      this.$store.commit("Skills/addReflections", e);
    },
  },
});
</script>

<style lang="scss" scoped></style>
