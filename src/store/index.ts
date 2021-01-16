import Vue from "vue";
import Vuex from "vuex";
import App from "./modules/App";
import Navigation from "./modules/Navigation";
import History from "./modules/History";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    App,
    Navigation,
    History
  }
});
