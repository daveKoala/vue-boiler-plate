<template>
  <base-item
    :title="desire.name"
    :id="desire.id"
    :link="{ name: 'Desires' }"
    :ratingProgress="progress"
    v-on:star-rating="starRating"
  >
    <template v-slot:avatar>
      <v-list-item-avatar>
        <v-img
          :alt="`${desire.name} avatar`"
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          @click="goTo"
        />
      </v-list-item-avatar>
    </template>
    <template v-slot:rating>
      <emoji-rating :value="0" v-on:emoji-select="starRating" />
    </template>
  </base-item>
</template>

<script lang="ts">
import Vue from "vue";
import BaseItem from "@/views/CheckIn/BaseListItem.vue";
import EmojiRating from "@/components/Emoji/EmojiRating.vue";
import { Desire } from "@/interfaces";

export default Vue.extend({
  name: "CheckInListItemDesire" as string,
  components: { BaseItem, EmojiRating },
  props: {
    desire: { type: Object as () => Desire, required: true },
  },
  data: () => ({
    star: 3,
  }),
  computed: {
    progress(): string {
      const t = this.desire.review.reduce(
        (acc, review) => {
          acc.n++;
          acc.tally += review.value;
          return acc;
        },
        { tally: 0, n: 0 }
      );

      return `x̄${Math.round(t.tally / t.n)}` || `x̄${0}`;
    },
  },
  methods: {
    starRating(value: number): void {
      this.$store.commit("Desire/addReview", { id: this.desire.id, value });
    },
    goTo(): void {
      this.$router.push({ name: "Desires", params: { id: this.desire.id } });
    },
  },
});
</script>

<style lang="scss" scoped></style>
