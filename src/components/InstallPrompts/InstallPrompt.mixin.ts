import Vue from 'vue';
import Cookies from "js-cookie";

interface Data {
  deferredPrompt: Event | null;
  days: number;
}

export const installPromptsMixins = Vue.extend({
  data: (): Data => ({
    deferredPrompt: null,
    days: 15,
  }),
  methods: {
    async dismiss() {
      Cookies.set("add-to-home-screen", "dismissed-install", { expires: 15 });
      this.deferredPrompt = null;
    },
    async install() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.deferredPrompt.prompt();
    },
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      if (Cookies.get("add-to-home-screen") === undefined) {
        this.deferredPrompt = e;
      }
    });

    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
});
