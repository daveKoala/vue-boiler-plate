import Vue from "vue";
import Vuex from "vuex";
import App from "./modules/App";
import History from "./modules/History";
import Content from "./modules/Content";
import Desire from "./modules/Desire";
import Skills from "./modules/Skills";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    App,
    History,
    Content,
    Desire,
    Skills
  }
});
