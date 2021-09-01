<template>
  <div class="organism molecules-overview">
    <TitleWithSubtitle :titleText="titleText" :subtitleText="subtitleText" />
    <MoleculesDisplay />
  </div>
</template>

<script>
import { strings } from "@constants/strings";
import TitleWithSubtitle from "@molecules/TitleWithSubtitle.vue";
import MoleculesDisplay from "@organisms/MoleculesDisplay.vue";

export default {
  name: "MoleculesOverview",
  components: {
    TitleWithSubtitle,
    MoleculesDisplay,
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

<style></style>
