import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
  },
  {
    path: "/desires",
    name: "Desires",
    component: () =>
      import(/* webpackChunkName: "desires" */ "../views/Desires.vue"),
  },
  {
    path: "/funky",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FunkyTable.vue"),
  },
  {
    path: "/*",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
