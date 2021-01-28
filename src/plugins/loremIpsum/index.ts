import _Vue from "vue";
import { LoremIpsum } from "lorem-ipsum";
import LoremIpsumClass from "./loremIpsum";

export default {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$loremIpsum = (LoremIpsumClass as unknown) as LoremIpsum;
  },
};
