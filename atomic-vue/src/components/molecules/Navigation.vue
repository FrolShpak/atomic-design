<template>
  <nav class="molecule navigation" v-if="routes.length">
    <router-link
      v-for="(route, index) in routes"
      class="navigation__router-link"
      :key="index"
      :to="{ name: route.name }"
      ><Label :text="route.name" presetStyle="route" />
    </router-link>
  </nav>
</template>

<script>
import Label from "@atoms/text/Label.vue";

export default {
  name: "Navigation",
  components: { Label },
  props: {
    routes: { type: Array, required: true },
  },
};
</script>

<style scoped>
.navigation {
  margin: 0 1rem;
}
.navigation .router-link-active {
  text-decoration: underline;
  text-decoration-color: #0f0f0f;
}
.navigation__router-link {
  padding: 1rem 0.5rem;
  text-decoration: none;
}
</style>
