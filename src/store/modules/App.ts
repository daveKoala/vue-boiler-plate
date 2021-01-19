interface App {
  appName: string;
  dark: boolean;
  tabs: { tabName: string; value: number | null }[];
}

interface AppState {
  app: App;
}

const state: AppState = {
  app: {
    appName: "Knowledge/Skills",
    dark: true,
    tabs: [{ tabName: "toolkit", value: 0 }]
  }
};

const getters = {
  appName: (state: AppState) => state.app.appName,
  dark: (state: AppState) => state.app.dark,
  tab: (state: AppState) => (tabName: string) =>
    state.app.tabs.filter(tab => tab.tabName === tabName)[0]
};
const mutations = {
  toggleDark(state: AppState) {
    state.app.dark = !state.app.dark;
  },
  tab(state: AppState, payload: { tabName: string; value: number | null }) {
    state.app.tabs.map(tab => {
      if (tab.tabName == payload.tabName) {
        tab.value = payload.value || 0;
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
