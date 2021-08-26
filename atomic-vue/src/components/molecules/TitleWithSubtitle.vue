<template>
  <div class="molecule-title-with-subtitle">
    <Title :text="titleText" />
    <Subtitle :text="subtitleText" />
  </div>
</template>

<script>
import Title from "@atoms/text/Title.vue";
import Subtitle from "@atoms/text/Subtitle.vue";

export default {
  name: "TitleWithSubtitle",
  components: {
    Title,
    Subtitle,
  },
  props: {
    titleText: {
      type: String,
      required: true,
    },
    subtitleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.molecule-title-with-subtitle {
}
</style>
