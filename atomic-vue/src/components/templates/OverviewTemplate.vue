<template>
  <div class="overview">
    <div class="overview-navbar">
      <slot name="navbar" />
    </div>

    <section class="overview-content">
      <slot name="content" />
    </section>
  </div>
</template>

<script>
export default {
  name: "OverviewTemplate",
};
</script>

<style>
.overview-navbar,
.overview-content {
  display: flex;
  justify-content: center;
}
.overview-navbar {
  padding: 2rem 0;
}
.overview-content {
  padding: 2rem;
}
</style>
