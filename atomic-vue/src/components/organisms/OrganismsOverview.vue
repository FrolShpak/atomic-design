<template>
  <div class="organism organisms-overview">
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
  name: "OrganismsOverview",
  components: {
    TitleWithSubtitle,
  },
  computed: {
    titleText() {
      return strings.organisms.organismsOverview.title;
    },
    subtitleText() {
      return strings.organisms.organismsOverview.subtitle;
    },
  },
};
</script>

<style>
/* #5FA0F5 */
</style>
