import { NavigationItem } from "@/interfaces";

interface Navigation {
  navItems: NavigationItem[];
}

interface NavigationState {
  nav: Navigation;
}

const state: NavigationState = {
  nav: {
    navItems: [
      {
        id: "home",
        icon: "mdi-home",
        name: "Home",
        to: "/",
        color: "",
      },
      {
        id: "",
        icon: "mdi-table-settings",
        name: "Table",
        to: "/funky",
        color: "",
      },
      {
        id: "desire",
        icon: "mdi-head-heart-outline",
        name: "Desire",
        to: "/desires",
        color: "red lighten-1",
      },
      {
        id: "journey",
        icon: "mdi-map-marker",
        name: "Journey",
        to: "/journey",
        color: "red darken-2",
      },
      {
        id: "about",
        icon: "mdi-information-outline",
        name: "About",
        to: "/about",
        color: "red darken-2",
      },
      {
        id: "settings",
        icon: "mdi-cog-outline",
        name: "Setting",
        to: "/settings",
        color: "red darken-2",
      },
      {
        id: "qr",
        icon: "mdi-qrcode-scan",
        name: "Scan",
        to: "/qr-scanner",
        color: "red darken-2",
      },
      {
        id: "toolbox",
        icon: "mdi-hammer-wrench",
        name: "Toolkit",
        to: "/tool-kit",
        color: "red darken-2",
      },
    ],
  },
};

const getters = {
  collection: (state: NavigationState) => (collection: string[]) => {
    const navItems = [] as NavigationItem[];
    collection.forEach(c => {
      const str = c.toLowerCase();
      const index = state.nav.navItems.findIndex(item => item.id === str);

      if (index !== -1) {
        navItems.push(state.nav.navItems[index]);
      }
    });
    return navItems;
  },
  all: (state: NavigationState) => state.nav.navItems,
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
