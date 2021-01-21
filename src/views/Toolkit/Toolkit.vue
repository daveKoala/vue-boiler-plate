<template>
  <v-container fluid>
    <v-tabs
      background-color="white"
      color="deep-purple accent-4"
      right
      v-model="tabIndex"
    >
      <v-tab>Knowledge</v-tab>
      <v-tab>Skills</v-tab>

      <v-tab-item>
        <v-container fluid>
          <v-card :dark="$store.getters['App/dark']">
            <v-list dense>
              <template v-for="(card, index) in cards">
                <v-list-item :key="card.title">
                  <v-list-item-avatar rounded>
                    <v-img :src="card.src"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content v-on:click="goTo(card)" class="mr-1">
                    <v-list-item-title v-html="card.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="card.title"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action class="ml-0">
                    <v-btn icon v-on:click="more(card)" x-small>
                      <v-icon color="grey lighten-1">mdi-heart</v-icon>
                    </v-btn>
                   
                  </v-list-item-action>
                  <v-list-item-action class="ml-0">
                    <v-btn icon v-on:click="more(card)" x-small>
                      <v-icon color="grey lighten-1">mdi-dots-horizontal</v-icon>
                    </v-btn>
                   
                  </v-list-item-action>
                </v-list-item>

                <v-divider :key="`card-divider-${index}`"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <skills-tab />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
// import ArticleCard from "@/components/Article/ArticleCard.vue";
import SkillsTab from "@/views/Toolkit/Skills.tab.vue";
import { Card } from "@/interfaces";
export default Vue.extend({
  name: "Toolkit",
  components: { SkillsTab },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    cards(): Card[] {
      return this.$store.getters["Content/all"];
    },
    tabIndex: {
      set(value: number | null): void {
        this.$store.commit("App/tab", { tabName: "toolkit", value });
      },
      get(): number | null {
        return this.$store.getters["App/tab"]("toolkit").value || null;
      },
    },
  },
  methods: {
    goTo(card: Card): void {
      console.log("goto",card.id)
    },
    more(card: Card): void {
      console.log("more",card.title)
    }
  }
});
</script>
