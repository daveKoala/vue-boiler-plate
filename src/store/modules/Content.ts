import { Card } from "@/interfaces";

interface Content {
  articles: Card[];
}

interface ContentState {
  content: Content;
}

const state: ContentState = {
  content: {
    articles: [
      {
        id: "cooking",
        title: "Cooking",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        flex: 6,
        bookmarked: false,
        read: new Date("2020-12-12"),
      },
      {
        id: "parallax",
        title: "Parallax",
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        flex: 6,
        bookmarked: false,
        read: new Date("2020-10-12"),
      },
      {
        id: "Pre-fab homes",
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
        bookmarked: false,
        read: new Date("2020-10-12"),
      },
      {
        id: "Favorite road trips",
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,

        bookmarked: true,
        read: new Date("2021-01-12"),
      },
      {
        id: "Best airlines",
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,

        bookmarked: false,
        read: new Date("2020-10-12"),
      },
    ],
  },
};

const getters = {
  all: (state: ContentState) => state.content.articles,

  random: (state: ContentState) => (num: number) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * state.content.articles.length);
      if (res.indexOf(state.content.articles[random]) !== -1) {
        continue;
      }
      res.push(state.content.articles[random]);
      i++;
    }
    return res;
  },

  byID: (state: ContentState) => (id: string) => {
    return state.content.articles.filter(article => article.id === id);
  }
};

const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
