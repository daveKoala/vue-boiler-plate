<template>
  <v-container>
    <h1>
      Nearly there a renderless component for creating 'add to calendar' links
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

    <v-btn @click="download" class="ma-2 warning">
      <v-icon left dark>mdi-sort-calendar-ascending</v-icon>
      Download ICS
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ICS, { Parameters } from "./ICS/index.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import * as ics from "ics";

export default Vue.extend({
  name: "CalendarTest" as string,
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  components: { ICS },
  data: () => ({
    filename: "event.ics",
    text: "Hello world",
  }),
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
  methods: {
    download(): void {
      var element = document.createElement("a");

      element.setAttribute(
        "href",
        "data:'text/x-vCalendar;charset=utf-8," +
          encodeURIComponent(this.createEvent())
      );

      element.setAttribute("download", this.filename);

      element.style.display = "none";

      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    createEvent(): string {
      const event = {
        title: "Lunch",
        start: [2021, 4, 15, 12, 15],
        duration: { minutes: 45 },
        // start: [2018, 5, 30, 6, 30],
        // duration: { hours: 6, minutes: 30 },
        // title: 'Bolder Boulder',
        // description: 'Annual 10-kilometer run in Boulder, Colorado',
        // location: 'Folsom Field, University of Colorado (finish line)',
        // url: 'http://www.bolderboulder.com/',
        // geo: { lat: 40.0095, lon: 105.2669 },
        // categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
        // status: 'CONFIRMED',
        // busyStatus: 'BUSY',
        // organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
        // attendees: [
        //   { name: 'Adam Gibbons', email: 'adam@example.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
        //   { name: 'Brittany Seaton', email: 'brittany@example2.org', dir: 'https://linkedin.com/in/brittanyseaton', role: 'OPT-PARTICIPANT' }
        // ]
      } as ics.EventAttributes;

      const response = ics.createEvent(event);

      return response.value || "";
    },
  },
});
</script>

<style lang="scss" scoped></style>
