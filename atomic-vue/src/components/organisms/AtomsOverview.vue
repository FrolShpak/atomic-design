<template>
  <div class="organism atoms-overview">
    <TitleWithSubtitle :titleText="titleText" :subtitleText="subtitleText" />
    <AtomsDisplay />
  </div>
</template>

<script>
import { strings } from "@constants/strings";
import TitleWithSubtitle from "@molecules/TitleWithSubtitle.vue";
import AtomsDisplay from "@molecules/AtomsDisplay.vue";

export default {
  name: "AtomsOverview",
  components: {
    TitleWithSubtitle,
    AtomsDisplay,
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
