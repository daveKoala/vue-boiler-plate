interface App {
  appName: string;
}

interface AppState {
  app: App;
}

const state: AppState = {
  app: {
    appName: "Knowledge/Skills"
  }
};

const getters = {
  appName: (state: AppState) =>
    `${state.app.appName} (${process.env.VUE_APP_ENV || "x"})`
};
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
