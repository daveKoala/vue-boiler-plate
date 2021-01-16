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
        color: ""
      },
      {
        id: "",
        icon: "mdi-table-settings",
        name: "Table",
        to: "/funky",
        color: ""
      },
      {
        id: "desire",
        icon: "mdi-head-heart-outline",
        name: "Desire",
        to: "/desires",
        color: "red lighten-1"
      },
      {
        id: "journey",
        icon: "mdi-map-marker",
        name: "Journey",
        to: "/journey",
        color: "red darken-2"
      },
      {
        id: "about",
        icon: "mdi-information-outline",
        name: "About",
        to: "/about",
        color: "red darken-2"
      },
      {
        id: "settings",
        icon: "mdi-cog-outline",
        name: "Setting",
        to: "/settings",
        color: "red darken-2"
      },
      {
        id: "qr",
        icon: "mdi-qrcode-scan",
        name: "Scan",
        to: "/qr-scanner",
        color: "red darken-2"
      }
    ]
  }
};

const getters = {
  collection: (state: NavigationState) => (collection: string[]) => {
    return state.nav.navItems.filter(item =>
      collection.some(col => item.id.toLowerCase() === col.toLocaleLowerCase())
    );
  },
  all: (state: NavigationState) => state.nav.navItems
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
