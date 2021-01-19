interface History {
  qrHistory: string[];
}

interface HistoryState {
  history: History;
}

const state: HistoryState = {
  history: {
    qrHistory: [],
  },
};

const getters = {
  QRHistory: (state: HistoryState) => state.history.qrHistory,
};
const mutations = {
  addQRHistory(state: HistoryState, str: string) {
    state.history.qrHistory.push(str);
  },
  clearQRHistory(state: HistoryState) {
    state.history.qrHistory = [];
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
