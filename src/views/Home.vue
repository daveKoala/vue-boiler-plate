<template>
  <v-container fluid>
    <SquareNavigation :items="squareNav" />

    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="120px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <Share />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" xs="4" sm="6" v-for="n in 3" :key="`twiiter-${n}`">
        <Twitter />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Twitter from "@/components/Twitter.vue";
import SquareNavigation from "@/components/SquareNavigation.vue";
import Share from "@/components/Share.vue";
import { NavigationItem } from "@/interfaces";

export default Vue.extend({
  name: "Home",
  components: { Twitter, SquareNavigation, Share },
  data: () => ({
    squareNav: [
      { id: "home", icon: "mdi-home", text: "Home", to: "/", color: "red" },
      {
        id: "desire",
        icon: "mdi-head-heart-outline",
        text: "Desire",
        to: "/desires",
        color: "red lighten-1"
      },
      {
        id: "settings",
        icon: "mdi-cog-outline",
        text: "Settings",
        to: "/settings",
        color: "red darken-2"
      }
    ] as NavigationItem[],
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]
  }),

  created() {
    this.$emit("update:layout", BasicLayout);
  }
});
</script>
