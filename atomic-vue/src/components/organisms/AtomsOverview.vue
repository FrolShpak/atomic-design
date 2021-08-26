<template>
  <div class="atoms-overview">
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
  name: "AtomsOverview",
  components: {
    TitleWithSubtitle,
  },
  computed: {
    titleText() {
      return strings.organisms.atomsOverview.title;
    },
    subtitleText() {
      return strings.organisms.atomsOverview.subtitle;
    },
  },
};
</script>

<style>
.atoms-overview {
  display: flex;
  flex-direction: column;
}
</style>
