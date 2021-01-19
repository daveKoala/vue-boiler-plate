<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="green lighten-2" v-bind="attrs" v-on="on">
          <v-icon>mdi-share-variant-outline</v-icon>
        </v-btn>
      </template>

      <v-card :dark="$store.getters['App/dark']">
        <v-card-title class="headline grey lighten-2"> Share </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          <v-text-field
            ref="linkToCopy"
            :label="copied ? 'Link copied' : 'Click to copy link'"
            class="pa-4"
            readonly
            :value="link"
            @click="copy"
          ></v-text-field>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ShareDialog" as string,
  props: {
    linkParam: { type: String, default: "" },
  },
  data: () => ({
    copied: false,
    dialog: false,
  }),
  computed: {
    link(): string {
      return `${process.env.VUE_APP_LINK_BASE_URL}/content/${this.linkParam}`;
    },
  },
  methods: {
    copy(): void {
      navigator.clipboard.writeText(this.link);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2500);
    },
  },
});
</script>

<style lang="scss" scoped></style>
