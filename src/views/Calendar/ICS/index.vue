<script lang="ts">
import Vue, { VNode, CreateElement } from "vue";

export interface Parameters {
  title: string;
  location: string;
  details: string;
  start: string;
  end: string;
}

export interface Google {
  text: string | null;
  location: string | null;
  details: string | null;
  dates?: string | null;
}

export interface Microsoft {
  subject: string | null;
  location: string | null;
  body: string | null;
  startdt: string | null;
  enddt: string | null;
}

export interface Office365 {
  subject: string | null;
  location: string | null;
  body: string | null;
  startdt: string | null;
  enddt: string | null;
}

export default Vue.extend({
  name: "ICSRenderlessBase" as string,
  props: {
    parameters: { type: Object as () => Parameters, required: true },
  },
  computed: {
    Google(): string {
      const url =
        "http://www.google.com/calendar/render?action=TEMPLATE&trp=false";

      const { title, location, details, start, end } = this.parameters;

      const response = new Object() as Google;
      response.text = this.formatString(title);
      response.location = this.formatString(location);
      response.details = this.formatString(details);

      if (start && end) {
        response.dates = `${this.formatDate(start)}/${this.formatDate(end)}`;
      }

      return this.objectToURL(response, url);
    },
    Office365(): string {
      const url =
        "https://outlook.office.com/owa/?path=/calendar/action/compose&rru=addevent";

      const { title, location, details, start, end } = this.parameters;

      const response = new Object() as Office365;
      response.subject = this.formatString(title);
      response.location = this.formatString(location);
      response.body = this.formatString(details);
      response.startdt = start;
      response.enddt = end;

      return this.objectToURL(response, url);
    },
    Microsoft(): string {
      const url = "https://outlook.live.com/owa/?rru=addevent";

      const { title, location, details, start, end } = this.parameters;

      const response = new Object() as Microsoft;
      response.subject = this.formatString(title);
      response.location = this.formatString(location);
      response.body = this.formatString(details);
      response.startdt = start;
      response.enddt = end;

      return this.objectToURL(response, url);
    },
  },
  methods: {
    formatString(str: string | null): string | null {
      if (str) return encodeURIComponent(str).replace(/%20/g, `+`);

      return null;
    },

    formatDate(date: string): string | null {
      return date.replace(/-|:|\.\d+/g, "") || null;
    },

    objectToURL<T>(obj: T, url: string): string {
      Object.keys(obj).forEach((key) => {
        url += `&${key}=${obj[key as keyof T]}`;
      });

      return url;
    },
  },
  render(h: CreateElement): VNode {
    return h(
      "div",
      this.$scopedSlots.default?.({
        Google: this.Google,
        Microsoft: this.Microsoft,
        Office365: this.Office365,
      })
    );
  },
});
</script>
