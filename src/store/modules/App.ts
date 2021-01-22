interface TabItem {
  tabName: string;
  value: number | null;
}
interface App {
  appName: string;
  dark: boolean;
  tabs: TabItem[];
  alert: boolean;
}

interface AppState {
  app: App;
}

const state: AppState = {
  app: {
    appName: "Knowledge/Skills",
    dark: true,
    tabs: [{ tabName: "toolkit", value: 0 }],
    alert: true,
  },
};

const getters = {
  appName: (state: AppState): string => state.app.appName,
  dark: (state: AppState): boolean => state.app.dark,
  alert: (state: AppState): boolean => state.app.alert,
  tab: (state: AppState) => (tabName: string): TabItem =>
    state.app.tabs.filter((tab) => tab.tabName === tabName)[0],
};
const mutations = {
  toggleDark(state: AppState): void {
    state.app.dark = !state.app.dark;
  },
  tab(
    state: AppState,
    payload: { tabName: string; value: number | null }
  ): void {
    state.app.tabs.map((tab) => {
      if (tab.tabName == payload.tabName) {
        tab.value = payload.value || 0;
      }
    });
  },
  alert(state: AppState, payload: boolean): void {
    state.app.alert = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
