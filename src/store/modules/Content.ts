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
        src: "https://robohash.org/david.clare@cirrus-connect.com.png",
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
        src: "https://robohash.org/mr.d.clare@gmail.com.png",
        flex: 5,
        bookmarked: false,
        read: null,
        isNew: true,
      },
      {
        id: "Favorite-road-trips",
        name: "Favorite road trips",
        src: "https://robohash.org/favorite%20road%20trips.png",
        flex: 2,

        bookmarked: true,
        read: null,
        isNew: true,
      },
      {
        id: "Best-airlines",
        name: "Best airlines",
        src: "https://robohash.org/Best%20airlines.png",
        flex: 6,

        bookmarked: false,
        read: new Date("2020-10-12").toISOString(),
      },
      {
        id: "bikes",
        name: "Motorcycles",
        src: "https://robohash.org/spit%20or%20swallow.png",
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

  filtered: (state: ContentState) => (str: string | null): Card[] => {
    if (str === null || str.length < 4) return state.content.articles;

    const strLowerCase = str?.toLowerCase();
    return state.content.articles.filter((article) =>
      article.name.toLowerCase().includes(strLowerCase)
    );
  },
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
