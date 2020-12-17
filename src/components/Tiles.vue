<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 24" :key="n" cols="auto">
        <v-card height="200" color="red lighten-2">xxxx xxxxx</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TilesPage"
});
</script>
