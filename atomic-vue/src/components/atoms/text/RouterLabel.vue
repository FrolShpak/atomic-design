<template>
  <label class="atom-route-label">{{ text }}</label>
</template>

<script>
export default {
  name: "RouterLabel",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.atom-route-label {
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  color: #0f0f0f;
}
</style>
