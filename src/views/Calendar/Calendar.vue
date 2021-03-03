<template>
  <v-container>
    <h1>Nearly there a renderless component for creating 'add to calendar' links</h1>
    <p>Need to fix outlook star and finish times</p>
    <ICS :parameters="event">
      <v-btn
        slot-scope="{ Google }"
        link
        :href="Google"
        color="blue-grey"
        class="ma-2 white--text"
        target="new"
      >
        <v-icon left dark> mdi-google </v-icon>
        Google
      </v-btn>
    </ICS>

    <ICS :parameters="event">
      <v-btn
        slot-scope="{ Microsoft }"
        link
        :href="Microsoft"
        color="blue-grey"
        class="ma-2 white--text"
        target="new"
      >
        <v-icon left dark> mdi-microsoft </v-icon>
        Microsoft
      </v-btn>
    </ICS>
    <ICS :parameters="event">
      <v-btn
        slot-scope="{ Office365 }"
        link
        :href="Office365"
        color="blue-grey"
        class="ma-2 white--text"
        target="new"
      >
        <v-icon left dark> mdi-microsoft-office </v-icon>
        Office365
      </v-btn>
    </ICS>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ICS, { Parameters } from "./ICS/index.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

export default Vue.extend({
  name: "CalendarTest" as string,
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  components: { ICS },
  computed: {
    event(): Parameters {
      const start = new Date("2021-03-14");
      const end = new Date("2021-03-14");
      return {
        title: "Hello",
        location: "world",
        start: start.toISOString(),
        end: end.toISOString(),
        details: "More stuff",
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
