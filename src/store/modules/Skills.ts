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
        practice: 8,
        subTitle: "subtitle",
        name: "listening",
        reflections: [],
        blurb: "Can you hear me",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/backgrounds/md.jpg"
      },
      {
        id: "13",
        practice: 4,
        subTitle: "subtitle",
        name: "questioning",
        reflections: [],
        blurb: "Ask me",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg"
      },
      {
        id: "14",
        practice: 10,
        subTitle: "subtitle",
        name: "reflectionsing",
        reflections: [],
        blurb: "some more reflectionsing",
        content: "adasda adadasdee dadasdasdadasd",
        bookmarked: false,
        src: "https://cdn.vuetifyjs.com/images/backgrounds/md2.jpg"
      }
    ]
  }
};

const mutations = {
  addReflections: (
    state: SkillsState,
    { id, value }: { id: string; value: number }
  ) => {
    state.skills.collection.map(skill => {
      if (skill.id === id) {
        skill.reflections.push({
          date: new Date().toISOString(),
          value: value
        });
      }
    });
  },

  bookmark: (state: SkillsState, id: string) => {
    state.skills.collection.map(skill => {
      if (skill.id === id) {
        skill.bookmarked = !skill.bookmarked;
      }
    });
  }
};

const getters = {
  all: (state: SkillsState) => state.skills.collection,
  byId: (state: SkillsState) => (id: string): Skill | null =>
    state.skills.collection.filter(skill => skill.id === id)[0] || null
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
