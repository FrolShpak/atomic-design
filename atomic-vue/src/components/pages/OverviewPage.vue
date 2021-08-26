<template>
  <OverviewTemplate>
    <template v-slot:navbar><OverviewNavigation /></template>
    <template v-slot:content><router-view></router-view></template>
  </OverviewTemplate>
</template>

<script>
import { routes } from "@constants/routes";
import { strings } from "@constants/strings";
import OverviewTemplate from "@templates/OverviewTemplate.vue";
import OverviewNavigation from "@organisms/OverviewNavigation.vue";

export default {
  name: "OverviewPage",
  components: { OverviewTemplate, OverviewNavigation },
  computed: {
    overviewRoutes() {
      const toReturn = [];
      const overviewRoutes = routes.find(
        (route) => route.name === strings.routes.overview.name
      );
      if (overviewRoutes) {
        toReturn.push(overviewRoutes.children);
      }
      return toReturn;
    },
  },
};
</script>

<style></style>
