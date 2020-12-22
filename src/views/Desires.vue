<template>
  <v-container>
    <v-card class="mb-2" color="orange lighten-2">
      <v-card-text>
        Help us taylor your Strata experience by selecting one or more skills
        that you practice
      </v-card-text>
    </v-card>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header disable-icon-rotate>
          {{ item.title }}
          <template v-slot:actions v-if="isSelected(i, item)">
            <v-icon color="teal">
              mdi-check
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.

          <v-card-actions>
            <v-rating
              v-model="item.rating"
              background-color="orange lighten-3"
              color="orange"
            ></v-rating>

            <v-spacer></v-spacer>
            <Share />
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-dialog v-model="dialog" width="500" v-if="panel.length > 0">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          block
          class="mt-4"
        >
          Submit
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Confirm
        </v-card-title>

        <v-card-text>
          {{ items }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Share from "@/components/Share.vue";

export default Vue.extend({
  name: "Desires" as string,
  components: { Share },
  created() {
    this.$emit("update:layout", BasicLayout);
  },

  data: () => ({
    dialog: false,
    panel: [],
    icons: {
      mdiAccount: "mdi-home",
      mdiPencil: "mdi-home",
      mdiShareVariant: "mdi-share-variant-outline"
    },
    items: [
      {
        id: "1a",
        title: "Give feedback to team members",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "2a",
        title: "Manage team members proformance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "3a",
        title: "Team member(s) life outside work effecting thier proformance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "4a",
        title: "Building trust",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "5a",
        title: "Letting go and giving responsibility to others",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      }
    ],
    rating: 0,
    selected: false
  }),

  methods: {
    isSelected(index: number, item: { selected: boolean }): boolean {
      if (!this.panel.some(i => i === index)) {
        item.selected = false;
        return false;
      } else {
        item.selected = true;
        return true;
      }
    }
  }
});
</script>

<style lang="scss" scoped></style>
