<template>
  <label class="route-label">{{ text }}</label>
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
.route-label {
  text-transform: uppercase;
  cursor: pointer;
}
</style>
