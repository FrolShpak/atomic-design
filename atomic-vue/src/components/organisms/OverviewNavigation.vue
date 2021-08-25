<template>
  <NavigationBar :routes="overviewRoutes" />
</template>

<script>
import { routes } from "@constants/routes";
import { strings } from "@constants/strings";
import NavigationBar from "@atoms/NavigationBar.vue";

export default {
  name: "OverviewNavigation",
  components: { NavigationBar },
  computed: {
    overviewRoutes() {
      const overviewRoute = routes.find(
        (route) => route.name === strings.routes.overview.name
      );
      if (overviewRoute) {
        return overviewRoute.children;
      }
      return [];
    },
  },
};
</script>

<style></style>
