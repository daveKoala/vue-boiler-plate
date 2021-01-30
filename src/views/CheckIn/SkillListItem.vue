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
  })
});
</script>

<style lang="scss" scoped></style>
