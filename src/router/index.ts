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
    path: "/journey",
    name: "Journey",
    component: () =>
      import(/* webpackChunkName: "journey" */ "../views/Journey.vue"),
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
      import(/* webpackChunkName: "table" */ "../views/FunkyTable.vue"),
  },
  {
    path: "/qr-scanner",
    name: "QR Scanner",
    component: () =>
      import(/* webpackChunkName: "qrscanner" */ "../views/QRScanner.vue"),
  },
  {
    path: "/content/:id",
    name: "content",
    component: () =>
      import(/* webpackChunkName: "content" */ "../views/Content.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
