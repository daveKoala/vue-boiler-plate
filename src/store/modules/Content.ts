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
        bookmarked: true,
        read: null,
        isNew: true,
      },
      {
        id: "parallax",
        title: "Parallax",
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        flex: 6,
        bookmarked: false,
        read: new Date("2020-10-12").toISOString(),
      },
      {
        id: "Pre-fab-homes",
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
        bookmarked: false,
        read: null,
        isNew: true,
      },
      {
        id: "Favorite-road-trips",
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,

        bookmarked: true,
        read: null,
        isNew: true,
      },
      {
        id: "Best-airlines",
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,

        bookmarked: false,
        read: new Date("2020-10-12").toISOString(),
      },
      {
        id: "bikes",
        title: "Motorcycles",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
        bookmarked: false,
        read: null,
        isNew: true,
      },
      {
        id: "dogs",
        title: "Dogs of the world",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6,
        bookmarked: false,
        read: null,
        isNew: true,
      },
    ],
  },
};

const getters = {
  all: (state: ContentState): Card[] => state.content.articles,

  random: (state: ContentState) => (num: number): Card[] => {
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

  byID: (state: ContentState) => (id: string): Card => {
    return state.content.articles.filter((article) => article.id === id)[0];
  },

  bookmarked: (state: ContentState): Card[] =>
    state.content.articles.filter((article) => article.bookmarked === true),
};

const mutations = {
  bookmark(state: ContentState, id: string): void {
    state.content.articles.map((article) => {
      if (article.id === id) {
        article.bookmarked = !article.bookmarked;
      }
    });
  },
  clearBookmarks(state: ContentState): void {
    state.content.articles.map((article) => {
      article.bookmarked = false;
    });
  },
  readStatus(state: ContentState, id: string): void {
    state.content.articles.map((article) => {
      if (article.id === id) {
        article.isNew = false;
        article.read = new Date().toISOString();
      }
    });
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
