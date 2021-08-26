<template>
  <div class="molecules-overview">
    <TitleWithSubtitle :titleText="titleText" :subtitleText="subtitleText" />
    <div class="collection-display">
      <div class="collection-item-display"></div>
    </div>
  </div>
</template>

<script>
import { strings } from "@constants/strings";
import TitleWithSubtitle from "@molecules/TitleWithSubtitle.vue";

export default {
  name: "MoleculesOverview",
  components: {
    TitleWithSubtitle,
  },
  computed: {
    titleText() {
      return strings.organisms.moleculesOverview.title;
    },
    subtitleText() {
      return strings.organisms.moleculesOverview.subtitle;
    },
  },
};
</script>

<style>
</style>
