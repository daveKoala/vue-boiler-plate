interface App {
  appName: string;
  dark: boolean;
}

interface AppState {
  app: App;
}

const state: AppState = {
  app: {
    appName: "Knowledge/Skills",
    dark: true,
  }
};

const getters = {
  appName: (state: AppState) => state.app.appName,
  dark: (state: AppState) => state.app.dark,
};
const mutations = {
  toggleDark(state: AppState) {
    state.app.dark = !state.app.dark;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
