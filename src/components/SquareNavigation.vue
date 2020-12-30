<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-btn
        v-for="({ to, icon }, index) in navItems"
        :key="`square-nav-${index}`"
        v-ripple="{ class: 'primary--text' }"
        :to="to"
      >
        <v-icon color="primary" x-large>{{ icon }}</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { NavigationItem } from "@/interfaces";

export default Vue.extend({
  name: "SquareNavigation" as string,
  props: {
    items: { type: Array as () => NavigationItem[], default: [] }
  },
  computed: {
    navItems(): NavigationItem[] {
      return this.items.filter((item: NavigationItem, index: number) => {
        if (index <= 3) {
          return item;
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
/* setting min-width is necessary for the width to work */
.v-btn {
  min-width: 72px;
  width: 72px;
  height: 72px;
  min-height: 72px;
}
/* removes grey hover effect */
.v-btn::before {
  background-color: transparent;
}

/* adds icon scale hover effect */
.v-btn i:hover {
  transform: scale(1.15);
  opacity: 0.5;
}
</style>
