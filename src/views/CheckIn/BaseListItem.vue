<template>
  <v-list-item>
    <slot name="avatar">
      <v-list-item-avatar>
        <v-img
          :alt="`${title} avatar`"
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        />
      </v-list-item-avatar>
    </slot>
    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
      <v-rating
        empty-icon="mdi-star"
        full-icon="mdi-star"
        half-icon="mdi-star"
        hover
        length="5"
        size="18"
        :value="star"
        background-color="grey lighten-1"
        color="orange"
      ></v-rating>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text
        v-text="ratingProgress"
      ></v-list-item-action-text>
      <go-to-button :link="link" />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import GoToButton from "@/components/GoTo.button.vue";
import { To } from "@/interfaces";
export default Vue.extend({
  name: "CheckInListItemBase" as string,
  components: { GoToButton },
  props: {
    title: { type: String, required: true },
    link: { type: Object as () => To, required: false },
    ratingProgress: { type: String, default: "0" },
  },
  data: () => ({
    star: 3,
  }),
});
</script>

<style lang="scss" scoped></style>
