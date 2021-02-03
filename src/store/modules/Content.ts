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
        name: "Cooking",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        flex: 6,
        bookmarked: true,
        read: null,
        isNew: true,
      },
      {
        id: "parallax",
        name: "Parallax",
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        flex: 4,
        bookmarked: false,
        read: new Date("2020-10-12").toISOString(),
      },
      {
        id: "Pre-fab-homes",
        name: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 5,
        bookmarked: false,
        read: null,
        isNew: true,
      },
      {
        id: "Favorite-road-trips",
        name: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 2,

        bookmarked: true,
        read: null,
        isNew: true,
      },
      {
        id: "Best-airlines",
        name: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,

        bookmarked: false,
        read: new Date("2020-10-12").toISOString(),
      },
      {
        id: "bikes",
        name: "Motorcycles",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 10,
        bookmarked: false,
        read: null,
        isNew: true,
      },
      {
        id: "dogs",
        name: "Dogs of the world",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
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
