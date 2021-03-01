<template>
  <v-container>
    <v-card class="mx-auto my-12">
      <v-data-table
        fixed-header
        :items="users"
        item-key="item.id"
        :headers="headers"
        :items-per-page="50"
        class="elevation-1"
        height="600"
      >
        <template v-slot:item.picture.thumbnail="{ item }">
          <v-avatar tile>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="item.picture.thumbnail"
            ></v-img>
          </v-avatar>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getUsers, Result } from "@/store/apis";
import BasicLayout from "@/layouts/BasicLayout.vue";

interface Data {
  users: Result[];
}

interface Header {
  text: string;
  value: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
  class?: string | string[];
  cellClass?: string | string[];
}

export default Vue.extend({
  name: "AxiosRetry" as string,
  created() {
    this.$emit("update:layout", BasicLayout);
  },
  mounted() {
    this.fetchUsers();
  },
  data: (): Data => ({
    users: [],
  }),
  computed: {
    headers(): Header[] {
      return [
        { text: "name", filterable: true, sortable: true, value: "name.first" },
        { text: "email", filterable: true, sortable: true, value: "email" },
        { text: "gender", filterable: true, sortable: true, value: "gender" },
        {
          sortable: true,
          text: "picture",
          filterable: true,
          value: "picture.thumbnail",
        },
      ];
    },
  },
  methods: {
    async fetchUsers(): Promise<void> {
      try {
        const { data } = await getUsers();
        this.users = data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped></style>
