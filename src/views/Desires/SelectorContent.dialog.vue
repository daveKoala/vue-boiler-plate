<template>
  <v-dialog v-model="dialog" scrollable min-width="320px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="primary" dark v-bind="attrs" v-on="on" class="ml-1"> More </v-btn>
    </template>
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text
        style="height: 600px"
        v-html="$loremIpsum().generateParagraphs(10)"
      >
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DialogSelectorDialog" as string,
  data: () => ({
    dialogm1: "",
    dialog: false,
  }),
});
</script>

<style lang="scss" scoped></style>
