<template>
  <div class="molecule components-highlighter">
    <Label
      @mouseover="applyHighlight('atom')"
      @mouseout="removeHighlight('atom')"
      presetStyle="highlighter"
      text="Atoms"
    />
    <Label
      @mouseover="applyHighlight('molecule')"
      @mouseout="removeHighlight('molecule')"
      presetStyle="highlighter"
      text="Molecules"
    />
    <Label
      @mouseover="applyHighlight('organism')"
      @mouseout="removeHighlight('organism')"
      presetStyle="highlighter"
      text="Organisms"
    />
  </div>
</template>

<script>
import Label from "@atoms/text/Label.vue";

export default {
  name: "ComponentsHighlighter",
  components: {
    Label,
  },
  methods: {
    applyHighlight(component) {
      const elements = document.querySelectorAll(`.${component}`);
      elements.forEach(
        (element) => (element.style.backgroundColor = "rgba(247,200,12,0.5)")
      );
    },
    removeHighlight(component) {
      const elements = document.querySelectorAll(`.${component}`);
      elements.forEach((element) => (element.style.backgroundColor = null));
    },
  },
};
</script>

<style scoped>
.components-highlighter {
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
}
</style>
