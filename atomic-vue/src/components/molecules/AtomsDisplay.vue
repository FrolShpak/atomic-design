<template>
  <div class="molecule atoms-display">
    <div
      class="atoms-display_atom-container"
      v-for="(atom, index) in atoms"
      :key="index"
    >
      <component v-bind:is="atom.name" v-bind="atom.props" />
    </div>
  </div>
</template>

<script>
import Button from "@atoms/button/Button.vue";
import Label from "@atoms/text/Label.vue";
import Title from "@atoms/text/Title.vue";
import Subtitle from "@atoms/text/Subtitle.vue";

export default {
  name: "AtomsDisplay",
  components: {
    Button,
    Label,
    Title,
    Subtitle,
  },
  data() {
    return {
      atoms: [
        {
          name: "Button",
          props: { text: "Button" },
        },
        {
          name: "Label",
          props: { text: "Label" },
        },
        {
          name: "Title",
          props: { text: "Title" },
        },
        {
          name: "Subtitle",
          props: { text: "Subtitle" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.atoms-display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.atoms-display_atom-container {
  padding: 2rem;
  margin: 1rem;
  outline: 1px black solid;
}
</style>
