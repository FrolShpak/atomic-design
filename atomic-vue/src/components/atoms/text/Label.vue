<template>
  <label class="atom label" :class="presetStyleClass">{{ text }}</label>
</template>

<script>
export default {
  name: "Label",
  props: {
    text: {
      type: String,
      required: true,
    },
    presetStyle: {
      type: String,
      required: false,
      default: "default",
    },
  },
  computed: {
    presetStyleClass() {
      switch (this.presetStyle) {
        case "highlighter":
          return "label--highlighter";
        case "route":
          return "label--route";
        default:
          return "label--default";
      }
    },
  },
};
</script>

<style scoped>
.label {
  font-family: "Roboto", sans-serif;
}
.label--default {
}
.label--highlighter {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.25);
  font-size: 0.75rem;
  margin: 0 0.5rem;
}
.label--route {
  text-transform: uppercase;
  cursor: pointer;
  color: #0f0f0f;
}
</style>
