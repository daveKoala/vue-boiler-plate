<template>
  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    class="pt-2"
    id="bottom-nav"
    :dark="$store.getters['App/dark']"
  >
    <v-btn
      v-for="({ path, name, meta }, index) in items"
      :key="`bottom-nav-${index}`"
      :value="name"
      :to="{ path }"
    >
      <span>{{ name }}</span>
      <v-icon>{{ meta.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from "vue";
import { RouteConfig } from "vue-router";
export default Vue.extend({
  name: "BottomNavigation" as string,
  data: () => ({
    activeItem: "top",
  }),
  computed: {
    items(): RouteConfig[] {
      const lists = ["Home", "toolkit", "Settings"];
      const navItems = [] as RouteConfig[];
      lists.forEach((str: string) => {
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
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #2e2e2e;
}
</style>
