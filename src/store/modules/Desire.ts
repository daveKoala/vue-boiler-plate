interface Desire {
  id: string;
  title: string;
  body: string;
  rating: number;
  selected: boolean;
  review: { date: string; value: number }[];
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
        selected: false,
        review: []
      },
      {
        id: "2a",
        title: "Manage team members performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: []
      },
      {
        id: "3a",
        title: "Team member(s) life outside work effecting their performance",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: []
      },
      {
        id: "4a",
        title: "Building trust",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: []
      },
      {
        id: "5a",
        title: "Letting go and giving responsibility to others",
        body: "xxx xxxxx xxxxxx x x x x x",
        rating: 0,
        selected: false,
        review: []
      }
    ]
  }
};

const actions = {};
const mutations = {
  addReview: (
    state: DesiresState,
    { id, value }: { id: string; value: number }
  ) => {
    state.desire.collection.map(desire => {
      if (desire.id === id) {
        desire.review.push({ date: new Date().toUTCString(), value });
      }
    });
  }
};
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
