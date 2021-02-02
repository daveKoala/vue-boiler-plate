<template>
  <base-item
    :title="desire.title"
    :id="desire.id"
    :link="{ name: 'Desires' }"
    :ratingProgress="progress"
    v-on:star-rating="starRating"
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
  computed: {
    progress(): number {
      const t = this.desire.review.reduce(
        (acc, review) => {
          acc.n++;
          acc.tally += review.value;
          return acc;
        },
        { tally: 0, n: 0 }
      );

      return Math.round(t.tally / t.n) || 0;
    },
  },
  methods: {
    starRating(e: { id: string; value: number }): void {
      this.$store.commit("Desire/addReview", e);
    },
  },
});
</script>

<style lang="scss" scoped></style>
