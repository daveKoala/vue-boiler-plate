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
      v-for="({ to, name, icon, id }, index) in items"
      :key="`bottom-nav-${index}`"
      :value="id"
      :to="{ path: to }"
    >
      <span>{{ name }}</span>
      <v-icon>{{ icon }}</v-icon>
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
      return this.$store.getters["Navigation/collection"]([
        "Home",
        // "Journey",
        "Desire",
        "About",
        "QRScanner"
      ]);
    }
  }
});
</script>

<style lang="scss" scoped></style>
