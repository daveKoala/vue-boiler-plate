<template>
  <v-bottom-navigation
    app
    fixed
    grow
    dark
    v-model="activeItem"
    class="pt-2"
    id="bottom-nav"
  >
    <v-btn
      v-for="(item, index) in items"
      :key="`bottom-nav-${index}`"
      :value="item.id"
      :to="{ path: item.to }"
    >
      <span>{{ item.text }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { NavigationItem } from "@/interfaces";
import Vue from "vue";
export default Vue.extend({
  name: "BottomNavigation" as string,
  data: () => ({
    activeItem: "top"
  }),
  computed: {
    items(): NavigationItem[] {
      return [
        {
          id: "",
          icon: "mdi-table-settings",
          text: "Table",
          to: "/funky",
          color: ""
        },
        {
          id: "desire",
          icon: "mdi-head-heart-outline",
          text: "Desire",
          to: "/desires",
          color: "red lighten-1"
        },
        {
          id: "about",
          icon: "mdi-information-outline",
          text: "About",
          to: "/about",
          color: "red darken-2"
        }
      ];
    }
  }
});
</script>

<style lang="scss" scoped></style>
