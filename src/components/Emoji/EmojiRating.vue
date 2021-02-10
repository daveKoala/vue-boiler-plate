<template>
  <div class="rating">
    <span
      :class="greyedOut(i)"
      v-for="(item, i) in emojiIcons"
      :key="i"
      v-html="item.code"
      @click="selectEmoji(i)"
    ></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
interface Data {
  selected: number | null;
  emojiIcons: { code: string; name: string }[];
}
export default Vue.extend({
  name: "EmojiRating" as string,
  props: {
    value: { type: Number, required: true },
  },
  watch: {
    value: {
      handler(newValue: number | null): void {
        this.selected = newValue;
      },
      immediate: true,
    },
  },
  data: (): Data => ({
    selected: 3,
    emojiIcons: [
      { code: "&#128546;", name: "very sad" },
      { code: "&#128533;", name: "sad" },
      { code: "&#128528;", name: "neutral" },
      { code: "&#128578;", name: "happy" },
      { code: "&#128512;", name: "very happy" },
    ],
  }),
  methods: {
    greyedOut(key: number): string {
      if (this.selected !== key) {
        return "emoji emoji-grey";
      }
      return "emoji";
    },
    selectEmoji(i: number): void {
      this.selected = i;
      this.$emit("emoji-select", i);
    },
  },
});
</script>

<style lang="scss" scoped>
$emoji-size: 18;

.emoji:not(:last-child) {
  margin-right: 0.2em;
  height: $emoji-size + px;
}

.emoji:hover {
  filter: none;
}

.emoji-grey {
  color: grey;
  filter: grayscale(100%);
}
</style>
