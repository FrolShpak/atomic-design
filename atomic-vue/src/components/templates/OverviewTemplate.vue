<template>
  <div class="overview">
    <div class="overview-navbar">
      <slot name="navbar" />
    </div>

    <div class="overview-content">
      <slot name="content" />
    </div>
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
  width: 100%;
  display: flex;
  justify-content: center;
}
.overview-navbar {
  margin-top: 2rem;
}
</style>
