<template>
  <h1 class="atom-title">{{ text }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.atom-title {
  margin: 0;
}
</style>
