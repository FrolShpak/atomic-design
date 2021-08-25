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
      let overviewRoutes = [];
      const overviewRoute = routes.find(
        (route) => route.name === strings.routes.overview.name
      );
      if (overviewRoute) {
        overviewRoutes = overviewRoute.children;
      }
      return overviewRoutes;
    },
  },
};
</script>

<style></style>
