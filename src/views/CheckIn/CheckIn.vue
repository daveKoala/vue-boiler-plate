<template>
  <v-container fluid>
    <v-card :dark="$store.getters['App/dark']">
      <v-card-text> How are you feeling? </v-card-text>
      <v-list two-line>
        <v-subheader>Desires</v-subheader>
        <v-list-item
          v-for="(desire, index) in desires"
          :key="`desire-${index}`"
        >
          <v-list-item-avatar>
            <v-img
              :alt="`${desire.title} avatar`"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ desire.title }}</v-list-item-title>
            <v-rating
              empty-icon="mdi-star"
              full-icon="mdi-star"
              half-icon="mdi-star"
              hover
              length="5"
              size="18"
              :value="star"
            ></v-rating>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon :color="true ? 'deep-purple accent-4' : 'grey'">
              mdi-message-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-subheader>Skills</v-subheader>
        <v-list-item v-for="(skill, index) in skills" :key="`skill-${index}`">
          <v-list-item-avatar>
            <v-img :alt="`${skill.name} avatar`" :src="skill.src" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ skill.name }}</v-list-item-title>
            <v-rating
              empty-icon="mdi-star"
              full-icon="mdi-star"
              half-icon="mdi-star"
              hover
              length="5"
              size="18"
              :value="star"
            ></v-rating>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text v-text="`3.6`"></v-list-item-action-text>

            <v-icon color="yellow darken-3"> mdi-star </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import { Card, Skill, Desire } from "@/interfaces";

export default Vue.extend({
  name: "CheckIn",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  beforeDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  watch: {
    "$route.params.id": {
      handler: function () {
        this.setAlertStatus();
      },
      immediate: true,
    },
  },
  data: () => ({
    timerId: null as number | null,
    star: 3,
  }),
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    },
    desires(): Desire[] {
      return this.$store.getters["Desire/myDesires"];
    },
    skills(): Skill[] {
      return this.$store.getters["Skills/all"];
    },
  },
  methods: {
    setAlertStatus(): void {
      this.timerId = setTimeout(() => {
        this.$store.commit("App/alert", false);
      }, 2000);
    },
  },
});
</script>
