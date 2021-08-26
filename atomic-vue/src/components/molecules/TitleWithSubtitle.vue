<template>
  <div class="molecule-title-with-subtitle" :class="centeredClass">
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
    centered: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    centeredClass() {
      if (this.centered) {
        return "molecule-title-with-subtitle--centered";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.molecule-title-with-subtitle--centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
