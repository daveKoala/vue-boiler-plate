<template>
  <v-container fluid>
    <v-tabs background-color="white" color="deep-purple accent-4" right>
      <v-tab>Knowledge</v-tab>
      <v-tab>Skills</v-tab>

      <v-tab-item>
        <v-container fluid>
          <v-row no-gutters>
            <template v-for="n in 4">
              <v-col :key="n">
                <v-card class="pa-2" outlined tile>
                  Column
                </v-card>
              </v-col>
              <v-responsive
                v-if="n === 2"
                :key="`width-${n}`"
                width="100%"
              ></v-responsive>
            </template>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container fluid> some thing her </v-container>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BasicLayout from "@/layouts/BasicLayout.vue";
export default Vue.extend({
  name: "ToolKit",
  created() {
    this.$emit("update:layout", BasicLayout);
  },
});
</script>
