<template>
  <nav class="navigation">
    <router-link
      class="navigation__route-link"
      v-for="(route, index) in routes"
      :key="index"
      :to="{ name: route.name }"
      ><label class="navigation__route-link__label">{{ route.name }}</label>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.navigation__route-link {
  padding: 1rem 0.5rem;
}
.navigation__route-link__label {
  text-transform: capitalize;
  cursor: pointer;
}
</style>
