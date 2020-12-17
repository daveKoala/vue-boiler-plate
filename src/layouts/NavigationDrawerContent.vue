<template>
  <v-list nav dense>
    <v-list-item
      v-for="([icon, text, to], i) in items"
      :key="i"
      link
      :to="to"
      class="white--text"
      active-class="blue--text darken4"
    >
      <v-list-item-icon>
        <v-icon color="white">{{ icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content class="white--text">
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationDrawerContent",
  data: () => ({
    items: [
      ["mdi-home", "Home", "/"],
      ["mdi-information-outline", "About", "/about"],
      ["mdi-cog-outline", "Settings", "./settings"]
    ]
  })
});
</script>
