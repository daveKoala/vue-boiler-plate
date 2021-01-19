import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

interface RouteMetaData {
  icon: string;
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: {
      icon: "mdi-home"
    } as RouteMetaData,
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      icon: "mdi-information-outline"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/journey",
    name: "Journey",
    meta: {
      icon: "mdi-map-marker"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "journey" */ "../views/Journey.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    meta: {
      icon: "mdi-cog-outline"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  },
  {
    path: "/desires",
    name: "Desires",
    meta: {
      icon: "mdi-head-heart-outline"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "desires" */ "../views/Desires.vue")
  },
  {
    path: "/funky",
    name: "Table",
    meta: {
      icon: "mdi-table-settings"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/FunkyTable.vue")
  },
  {
    path: "/qr-scanner",
    name: "QR Scanner",
    meta: {
      icon: "mdi-qrcode-scan"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "qrscanner" */ "../views/QRScanner.vue")
  },
  {
    path: "/content/:id",
    name: "content",
    component: () =>
      import(/* webpackChunkName: "content" */ "../views/Content.vue")
  },
  {
    path: "/skill/:id",
    name: "skillContent",
    component: () =>
      import(/* webpackChunkName: "skill" */ "../views/Skill/Skill.vue")
  },
  {
    path: "/tool-kit",
    name: "toolkit",
    meta: {
      icon: "mdi-hammer-wrench"
    } as RouteMetaData,
    component: () =>
      import(/* webpackChunkName: "toolkit" */ "../views/Toolkit/Toolkit.vue")
  },
  {
    path: "/*",
    name: "404",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
