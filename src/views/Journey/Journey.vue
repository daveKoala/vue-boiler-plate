<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="purple lighten-2" fill-dot small right>
        <v-card :dark="$store.getters['App/dark']">
          <v-card-title class="purple lighten-2">
            <v-icon :dark="$store.getters['App/dark']" size="42" class="mr-4">
              mdi-magnify
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 1</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-icon size="64"> mdi-calendar-text </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="amber lighten-1" fill-dot left small>
        <v-card :dark="$store.getters['App/dark']">
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">
              Title 2
            </h2>
            <v-icon :dark="$store.getters['App/dark']" size="42">
              mdi-home-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit.
              </v-col>
              <v-col cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="cyan lighten-1" fill-dot small right>
        <v-card :dark="$store.getters['App/dark']">
          <v-card-title class="cyan lighten-1">
            <v-icon class="mr-4" :dark="$store.getters['App/dark']" size="42">
              mdi-email-outline
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 3</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" md="4">
                Lorem ipsum dolor sit amet, no nam oblique veritus no nam
                oblique.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="red lighten-1" fill-dot left small>
        <v-card :dark="$store.getters['App/dark']">
          <v-card-title class="red lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">
              Title 4
            </h2>
            <v-icon :dark="$store.getters['App/dark']" size="42">
              mdi-account-multiple-outline
            </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col class="hidden-sm-and-down" md="2">
                <v-icon size="64"> mdi-server-network </v-icon>
              </v-col>
              <v-col cols="12" md="10">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="green lighten-1" fill-dot small right>
        <v-card :dark="$store.getters['App/dark']">
          <v-card-title class="green lighten-1">
            <v-icon class="mr-4" :dark="$store.getters['App/dark']" size="42">
              mdi-phone-in-talk
            </v-icon>
            <h2 class="display-1 white--text font-weight-light">Title 5</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { EventAttributes } from "ics";

export interface Activity {
  id: string;
  name: string;
  body: string;
  type: string;
  event: EventAttributes | null;
}

export interface Module {
  id: string;
  name: string;
  body: string;
  activities: Activity[];
}

export interface Journey {
  id: string;
  name: string;
  body: string;
  modules: Module[];
}
export default Vue.extend({
  name: "Journey" as string,
  components: {},
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    journey(): Journey {
      return {
        id: "j1",
        name: "",
        body: "",
        modules: [
          {
            id: "m0",
            name: "Module 0",
            body: "",
            activities: [{ id: "", name: "", body: "", event: null, type: "" }],
          },
          { id: "m1", name: "Module 1", body: "", activities: [] },
          { id: "m2", name: "Module 2", body: "", activities: [] },
          { id: "m3", name: "Module 3", body: "", activities: [] },
        ],
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
