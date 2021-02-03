import { Desire } from "@/interfaces";

interface Desires {
  collection: Desire[];
}

interface DesiresState {
  desire: Desires;
}

const state: DesiresState = {
  desire: {
    collection: [
      {
        id: "1a",
        name: "Give feedback to team members",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: [],
      },
      {
        id: "2a",
        name: "Manage team members performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: true,
        review: [],
      },
      {
        id: "3a",
        name: "Team member(s) life outside work effecting their performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: [],
      },
      {
        id: "4a",
        name: "Building trust",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: true,
        review: [],
      },
      {
        id: "5a",
        name: "Letting go and giving responsibility to others",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: [],
      },
    ],
  },
};

const actions = {};
const mutations = {
  addReview: (
    state: DesiresState,
    { id, value }: { id: string; value: number }
  ): void => {
    state.desire.collection.map((desire) => {
      if (desire.id === id) {
        desire.review.push({ date: new Date().toUTCString(), value });
      }
    });
  },
  resetProgress: (state: DesiresState): void => {
    state.desire.collection.map((desire) => {
      desire.review = [];
    });
  },
};
const getters = {
  all: (state: DesiresState): Desire[] => state.desire.collection,
  myDesires: (state: DesiresState): Desire[] =>
    state.desire.collection.filter((desire) => desire.selected === true),
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
