<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-btn
        v-for="({ path, meta }, index) in items"
        :key="`square-nav-${index}`"
        v-ripple="{ class: 'primary--text' }"
        :to="path"
      >
        <v-icon color="primary" x-large>{{ meta.icon }}</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { RouteConfig } from "vue-router";

export default Vue.extend({
  name: "SquareNavigation" as string,
  props: {
    names: { type: Array as () => string[], default: () => [] },
  },
  computed: {
    items(): RouteConfig[] {
      const navItems = [] as RouteConfig[];

      this.names.forEach((str: string) => {
        const strLowerCase = str.toLowerCase();
        const index = this.$router.options.routes?.findIndex(
          (item) => item.name?.toLowerCase() === strLowerCase
        ) as number;

        if (index !== -1 && this.$router.options.routes) {
          navItems.push(this.$router.options.routes[index]);
        }
      });
      return navItems;
    },
  },
});
</script>

<style lang="scss" scoped>
/* setting min-width is necessary for the width to work */
.v-btn {
  min-width: 72px;
  width: 72px;
  height: 72px;
  min-height: 72px;
  margin: 4px;
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
