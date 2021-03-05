<template>
  <div>
    <v-btn @click="download" class="ma-2 warning">
      <v-icon left dark>mdi-sort-calendar-ascending</v-icon>
      Download ICS
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as ics from "ics";

export default Vue.extend({
  name: "DownloadICS" as string,
  props: {
    fileName: { type: String, default: "event.ics" },
  },
  methods: {
    download(): void {
      var element = document.createElement("a");

      element.setAttribute(
        "href",
        "data:'text/x-vCalendar;charset=utf-8," +
          encodeURIComponent(this.createEvent())
      );

      element.setAttribute("download", this.fileName);

      element.style.display = "none";

      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    mkDateArray(date: Date): ics.DateArray {
      const response = date
        .toISOString()
        .split(/(?:-|T|:)+/)
        .filter((chunk) => chunk.length > 1 && !chunk.includes("Z"))
        .map((str: string) => {
          return parseInt(str);
        }) as ics.DateArray;
      return response;
    },
    createEvent(): string {
      const today = new Date();
      const date = new Date();
      date.setDate(today.getDate() + 10);
      const event = {
        title: "Lunch",
        start: this.mkDateArray(date),
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
