<template>
  <v-icon v-bind="$attrs"> mdi-{{ icon }} </v-icon>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "EmojiRating" as string,
  props: {
    value: { type: Number, required: true },
  },
  data: () => ({
    icons: [
      "emoticon-sad-outline",
      "emoticon-confused-outline",
      "emoticon-neutral-outline",
      "emoticon-happy-outline",
      "emoticon-outline",
    ],
  }),
  computed: {
    icon(): string {
      if (this.value === null) return this.icons[0];
      if (this.value >= 5) return this.icons[4];

      return this.icons[this.value];
    }
  }
});
</script>

<style lang="scss" scoped></style>
