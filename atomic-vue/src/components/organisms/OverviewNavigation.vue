<template>
  <nav class="overview-navigation" v-if="overviewRoutes.length">
    <router-link
      v-for="(route, index) in overviewRoutes"
      class="overview-navigation__router-link"
      :key="index"
      :to="{ name: route.name }"
      ><RouterLabel :text="route.name" />
    </router-link>
  </nav>
</template>

<script>
import { routes } from "@constants/routes";
import { strings } from "@constants/strings";
import RouterLabel from "@atoms/text/RouterLabel.vue";

export default {
  name: "OverviewNavigation",
  components: { RouterLabel },
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

<style>
.overview-navigation__router-link {
  padding: 1rem 0.5rem;
  text-decoration: none;
}
</style>
