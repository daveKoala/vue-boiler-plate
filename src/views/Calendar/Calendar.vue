<template>
  <v-container>
    <h1>
      Nearly there a render-less component for creating 'add to calendar' links
      and downloads
    </h1>

    <ICS :parameters="event" v-for="os in calendarLinks" :key="os.name">
      <template v-slot:default="slotProps">
        <v-btn
          link
          :href="slotProps[os.name]"
          color="blue-grey"
          class="ma-2 white--text"
          target="new"
        >
          <v-icon left dark> {{ os.icon }} </v-icon>
          {{ os.name }}
        </v-btn>
      </template>
    </ICS>

    <ICSDownload />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ICS, { Parameters } from "./ICS/index.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import ICSDownload from "./ICS/Download.vue";

export default Vue.extend({
  name: "CalendarTest" as string,
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  components: { ICS, ICSDownload },
  computed: {
    calendarLinks(): unknown {
      return [
        { name: "Google", icon: "mdi-google" },
        { name: "Microsoft", icon: "mdi-microsoft" },
        { name: "Office365", icon: "mdi-microsoft-office" },
      ];
    },
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
