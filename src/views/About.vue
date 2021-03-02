<template>
  <v-container fluid>
    <v-card height="100%" color="transparent" flat tile>
      <v-img
        :src="require('../assets/desire_skill_knowledge.png')"
        class="my-3"
        contain
        height="200"
      />
      <v-card-text class="text-justify white--text">
        <p>
          The model above describes the influences on behavior. Behavior is
          found at the intersection of the 3 circles. Knowledge, skills and
          desires are three factors that bring about human habits.
        </p>

        <h2>Begin</h2>
        <p>
          Before starting a journey you first need to know where you are going.
          Your organisation has selected areas which they would like to offer
          assiatnace within the organisation. You are given the option to select
          those that you feel are of benefit and relevance to your current and
          future roles.
        </p>
        <p>
          By understanding your desires and how they align with your
          organisation's needs we allow you to keep focused and give you the
          tools and support to succeed.
        </p>

        <h2>Supporting you</h2>
        <p>
          Knowing your desires allow us offer support in increasing your
          knowledge and skills. Checking in regularly and recording your
          experience and progress will help keep focus and allow us to taylor
          content to your needs.
        </p>
        <p>
          Developing long term unconscious habits is impossible given the
          limited time; instead let us give you the knowledge and skill that if
          practiced and reflected upon will soon begin to embed positive habits.
        </p>
        <h2>Skills</h2>
        <p>
          A skill is something you practice, as you practice and reflect your
          competence will increase. Each skill is given a suggested number or
          practices to aim for during your training. You will see a progress bar
          for each skill along with your average rating and total number of
          ratings.
        </p>
        <h2>Knowledge</h2>
        <p>
          These are articles, videos, links to content chosen to support your
          desires and as additional resources for your skill.
        </p>
        <p>
          Knowledge articles are sharable with others outside the programme, but
          will link to our site.
        </p>
        <h2>Check In</h2>
        <p>
          A single place where you can update and record our progress in
          practicing skills and most importantly how you feel about your chosen
          desires
        </p>
        <p>
          You will be prompted to check in via, notifications and alerts on the
          home page.
        </p>

        <h2>Your cohort</h2>
        <p>You can see the progress of the others in your cohort</p>

        <h2>New content</h2>
        <p>
          You are busy, you don't have time to plough through countless articles
          and videos. We will try and keep the suggested materials sharp and to
          the point. The app will alert you to related new content and any pre
          workshop tasks.
        </p>
        <p>
          Articles and videos will have additional further reading links, links
          to share and links for reading via ebooks
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

export default Vue.extend({
  name: "About",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
});
</script>
