<template>
  <div class="atoms-overview">
    <TitleWithSubtitle :titleText="titleText" :subtitleText="subtitleText" />
    <CollectionDisplay :items="atoms"/>
  </div>
</template>

<script>
import { strings } from "@constants/strings";
import TitleWithSubtitle from "@molecules/TitleWithSubtitle.vue";
import CollectionDisplay from "@molecules/CollectionDisplay.vue";

export default {
  name: "AtomsOverview",
  components: {
    TitleWithSubtitle,
    CollectionDisplay,
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
