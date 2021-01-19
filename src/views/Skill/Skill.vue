<template>
  <v-container>
    <v-card :dark="$store.getters['App/dark']">
      <v-img
        :src="skill.src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="120px"
      >
        <v-card-title v-text="skill.name"></v-card-title>
      </v-img>
      {{ skill }}
      <v-card-actions>
        <go-back />
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
import GoBack from "@/components/GoBack.button.vue";
export default Vue.extend({
  name: "SkillView" as string,
  components: { GoBack },
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  computed: {
    skill(): unknown {
      return this.$store.getters["Skills/byId"](this.$route.params.id);
    },
    //   rating: {
    //     set(value: number) {
    //       this.$store.commit("Skills/addReflections", {
    //         id: this.skill.id,
    //         value,
    //       });
    //     },
    //     get(): number {
    //       const lastReflection = this.skill.reflections.slice(
    //         this.skill.reflections.length - 1
    //       );

    //       if (lastReflection[0]?.value) {
    //         return lastReflection[0].value;
    //       }
    //       return 1;
    //     },
    //   },
  },
});
</script>

<style lang="scss" scoped></style>
