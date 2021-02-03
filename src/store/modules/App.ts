import { Alert } from "@/interfaces";

interface TabItem {
  tabName: string;
  value: number | null;
}

interface SnackObject {
  [key: string]: string | number | undefined;
}
interface App {
  appName: string;
  dark: boolean;
  tabs: TabItem[];
  alerts: Alert[];
  snack: SnackObject;
}

interface AppState {
  app: App;
}

const getDefaultSnackState = (): SnackObject => {
  return {};
};

const state: AppState = {
  app: {
    appName: "Knowledge/Skills",
    dark: true,
    tabs: [{ tabName: "toolkit", value: 0 }],
    alerts: [
      {
        id: "1234",
        message: "Have a nice day",
        createdOn: "2021-01-18",
        readOn: "2021-01-23T08:50:06.961Z",
      },
      {
        id: "abc",
        message: "Don't forget to check in",
        createdOn: "2021-01-18",
        url: "/check-in",
        readOn: null,
      },
      {
        id: "a1b2c3",
        message: "Remember to tell us your desires",
        createdOn: "2021-01-18",
        readOn: null,
        url: "/desires",
      },
    ],
    snack: getDefaultSnackState(),
  },
};

const getters = {
  appName: (state: AppState): string => state.app.appName,
  dark: (state: AppState): boolean => state.app.dark,
  alerts: (state: AppState): Alert[] =>
    state.app.alerts.filter((alert) => !alert.readOn),
  tab: (state: AppState) => (tabName: string): TabItem =>
    state.app.tabs.filter((tab) => tab.tabName === tabName)[0],
  snack: (state: AppState): SnackObject => state.app.snack,
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
  alertRead(state: AppState, payload: string): void {
    state.app.alerts.map((alert) => {
      if (alert.id === payload) {
        alert.readOn = new Date().toISOString();
      }
    });
  },
  alertReset(state: AppState): void {
    state.app.alerts.map((alert) => {
      if (alert.id !== "1234") {
        alert.readOn = null;
      }
    });
  },
  setSnack(state: AppState, showSnack: SnackObject): void {
    state.app.snack = { ...showSnack };
  },
  resetSnack(state: AppState): void {
    state.app.snack = getDefaultSnackState();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
