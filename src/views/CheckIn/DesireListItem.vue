<template>
  <base-item
    :title="desire.title"
    :link="{ name: 'Desires' }"
    :ratingProgress="'3.4'"
  >
    <template v-slot:avatar>
      <v-list-item-avatar>
        <v-img
          :alt="`${desire.title} avatar`"
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        />
      </v-list-item-avatar>
    </template>
  </base-item>
</template>

<script lang="ts">
import Vue from "vue";
import BaseItem from "@/views/CheckIn/BaseListItem.vue";
import { Desire } from "@/interfaces";

export default Vue.extend({
  name: "CheckInListItemDesire" as string,
  components: { BaseItem },
  props: {
    desire: { type: Object as () => Desire, required: true },
  },
  data: () => ({
    star: 3,
  }),
});
</script>

<style lang="scss" scoped></style>
