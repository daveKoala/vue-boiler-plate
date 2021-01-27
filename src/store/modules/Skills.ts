import { Skill } from "@/interfaces";

interface Skills {
  collection: Skill[];
}

interface SkillsState {
  skills: Skills;
}

const state: SkillsState = {
  skills: {
    collection: [
      {
        id: "12",
        suggestedPractices: 8,
        subTitle: "subtitle",
        name: "listening",
        reflections: [
          { date: "2021-01-01T23:16:00.000Z", value: 3 },
          { date: "2021-01-05T23:16:00.000Z", value: 4 },
          { date: "2021-01-07T23:16:00.000Z", value: 4 },
          { date: "2021-01-14T23:16:00.000Z", value: 5 },
          { date: "2021-01-18T23:16:00.000Z", value: 2 },
          { date: "2021-01-19T23:16:00.000Z", value: 3 },
          { date: "2021-01-20T23:16:00.000Z", value: 3 },
        ],
        blurb: "Can you hear me",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/backgrounds/md.jpg",
      },
      {
        id: "13",
        suggestedPractices: 10,
        subTitle: "subtitle",
        name: "questioning",
        reflections: [
          { date: "2021-01-01T23:16:00.000Z", value: 3 },
          { date: "2021-01-03T23:16:00.000Z", value: 4 },
          { date: "2021-01-10T23:16:00.000Z", value: 5 },
          { date: "2021-01-11T23:16:00.000Z", value: 2 },
          { date: "2021-01-14T23:16:00.000Z", value: 3 },
        ],
        blurb: "Ask me",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
      },
      {
        id: "14",
        suggestedPractices: 10,
        subTitle: "subtitle",
        name: "reflections",
        reflections: [
          { date: "2021-01-09T23:16:00.000Z", value: 3 },
          { date: "2021-01-20T23:16:00.000Z", value: 4 },
        ],
        blurb: "some more reflections",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/backgrounds/md2.jpg",
      },
    ],
  },
};

const mutations = {
  addReflections: (
    state: SkillsState,
    { id, value }: { id: string; value: number }
  ): void => {
    state.skills.collection.map((skill) => {
      if (skill.id === id) {
        skill.reflections.push({
          date: new Date().toISOString(),
          value: value,
        });
      }
    });
  },

  bookmark: (state: SkillsState, id: string): void => {
    state.skills.collection.map((skill) => {
      if (skill.id === id) {
        skill.bookmarked = !skill.bookmarked;
      }
    });
  },
};

const getters = {
  all: (state: SkillsState): Skill[] => state.skills.collection,
  byId: (state: SkillsState) => (id: string): Skill | null =>
    state.skills.collection.filter((skill) => skill.id === id)[0] || null,
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
