<template>
  <OverviewTemplate>
    <template v-slot:navbar><OverviewNavigation /></template>
    <template v-slot:content><router-view></router-view></template>
  </OverviewTemplate>
</template>

<script>
import OverviewTemplate from "@templates/OverviewTemplate.vue";
import OverviewNavigation from "@organisms/OverviewNavigation.vue";

export default {
  name: "OverviewPage",
  components: { OverviewTemplate, OverviewNavigation },
};
</script>

<style></style>
