interface Desire {
  id: string;
  title: string;
  body: string;
  rating: number;
  selected: boolean;
}

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
        title: "Give feedback to team members",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "2a",
        title: "Manage team members performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "3a",
        title: "Team member(s) life outside work effecting their performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "4a",
        title: "Building trust",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      },
      {
        id: "5a",
        title: "Letting go and giving responsibility to others",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false
      }
    ]
  }
};

const actions = {};
const mutations = {};
const getters = {
  all: (state: DesiresState) => state.desire.collection
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
