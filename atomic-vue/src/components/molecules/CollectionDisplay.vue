<template>
  <div class="molecule-collection-display">
    <div v-for="(item, index) in item" 
         class="molecule-collection-item" 
         :key="index">
        {{item}}
    </div>
  </div>
</template>

<script>

export default {
  name: "TitleWithSubtitle",
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.molecule-collection-display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
}
</style>
