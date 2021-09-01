<template>
  <div class="organism molecules-display">
    <div
      class="molecules-display_molecule-container"
      v-for="(molecule, index) in molecules"
      :key="index"
    >
      <component v-bind:is="molecule.name" v-bind="molecule.props" />
    </div>
  </div>
</template>

<script>
import AtomsDisplay from "@molecules/AtomsDisplay.vue";
import TitleWithSubtitle from "@molecules/TitleWithSubtitle.vue";

export default {
  name: "MoleculesDisplay",
  components: {
    AtomsDisplay,
    TitleWithSubtitle,
  },
  data() {
    return {
      molecules: [
        {
          name: "AtomsDisplay",
          props: {},
        },
        {
          name: "TitleWithSubtitle",
          props: { titleText: "Title", subtitleText: "Subtitle" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.molecules-display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.molecules-display_molecule-container {
  padding: 1rem;
  margin: 1rem;
  outline: 1px black solid;
}
</style>
