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
        src: "https://robohash.org/Give%20feedback%20to%20team%20members.png",
        rating: 0,
        selected: false,
        review: [],
      },
      {
        id: "2a",
        name: "Manage team members performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        src: "https://robohash.org/Manage%20team%20members%20performance.png",
        rating: 0,
        selected: true,
        review: [],
      },
      {
        id: "3a",
        name: "Team member(s) life outside work effecting their performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        src: "https://robohash.org/elephant.png",
        rating: 0,
        selected: false,
        review: [],
      },
      {
        id: "4a",
        name: "Building trust",
        body: "xxx xxxxx xxxxxx x x x x x",
        src: "https://robohash.org/cows.png",
        rating: 0,
        selected: true,
        review: [],
      },
      {
        id: "5a",
        name: "Letting go and giving responsibility to others",
        body: "xxx xxxxx xxxxxx x x x x x",
        src:
          "https://robohash.org/Letting%20go%20and%20giving%20responsibility%20to%20others.png",
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
  selectToggle: (state: DesiresState, id: string): void => {
    state.desire.collection.map((desire) => {
      if (desire.id === id) {
        desire.selected = !desire.selected;
      }
    });
  },
};
const getters = {
  all: (state: DesiresState): Desire[] => state.desire.collection,
  myDesires: (state: DesiresState): Desire[] =>
    state.desire.collection.filter((desire) => desire.selected === true),
  id: (state: DesiresState) => (id: string): Desire =>
    state.desire.collection.filter((desire) => desire.id === id)[0],
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
