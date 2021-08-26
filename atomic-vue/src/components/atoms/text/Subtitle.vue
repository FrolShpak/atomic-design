<template>
  <h4 class="atom-subtitle">{{ text }}</h4>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.atom-subtitle {
  margin: 0;
  color: #0f0f0f;
}
</style>
