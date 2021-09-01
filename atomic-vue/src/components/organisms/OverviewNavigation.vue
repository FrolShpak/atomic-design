<template>
  <div class="organism container">
    <Navigation :routes="overviewRoutes" />
    <ComponentsHighlighter />
  </div>
</template>

<script>
import { routes } from "@constants/routes";
import { strings } from "@constants/strings";
import Navigation from "@molecules/Navigation.vue";
import ComponentsHighlighter from "@molecules/ComponentsHighlighter.vue";

export default {
  name: "OverviewNavigation",
  components: { ComponentsHighlighter, Navigation },
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

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.overview-navigation .router-link-active {
  text-decoration: underline;
  text-decoration-color: #0f0f0f;
}
.overview-navigation__router-link {
  padding: 1rem 0.5rem;
  text-decoration: none;
}
</style>
