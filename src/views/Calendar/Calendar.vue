<template>
  <v-container>
    <h1>
      Nearly there a renderless component for creating 'add to calendar' links
    </h1>
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
    <v-btn @click="download">Click me</v-btn>
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
    filename: "hello.ics",
    text: "Hello world",
  }),
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
        start: [2018, 1, 15, 12, 15],
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
