<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-btn
        v-for="(item, index) in items"
        :key="`squar-nav-${index}`"
        v-ripple="{ class: 'primary--text' }"
        :to="item.to"
        class="ma-auto"
      >
        <v-icon color="primary" x-large>{{ item.icon }}</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { NavigationItem } from "@/interfaces";

export default Vue.extend({
  name: "SquareNavigation" as string,
  props: {
    items: { type: Array as () => NavigationItem[], default: [] }
  }
});
</script>

<style lang="scss" scoped>
.square-container {
  display: flex;
  flex-wrap: wrap;
}

.square {
  position: relative;
  flex-basis: calc(33.333% - 10px);
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

.square::before {
  content: "";
  display: block;
  padding-top: 100%;
}

.square .content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex; /* added for centered text */
  justify-content: center; /* added for centered text */
  align-items: center; /* added for centered text */
}

/* setting min-width is necessary for the width to work */
.v-btn {
  min-width: 72px;
  width: 72px;
  height: 72px;
  min-height: 72px;
}
/* removes grey hover effect */
.v-btn::before {
  background-color: transparent;
}

/* adds icon scale hover effect */
.v-btn i:hover {
  transform: scale(1.15);
  opacity: 0.5;
}
</style>
