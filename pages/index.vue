<script lang="ts" setup>
  import type BellVue from "~/components/icons/Bell.vue";
</script>

<template>
  <div>
    <Alert />

    <Profile />

    Index Page

    <!-- ASSETS folder -->
    <!-- assets: processing, not publicly available to the internet (to avoid sharing) -->
    <!-- using ~, the "@" configuration in nuxt.config.ts -->
    <!-- <img src="~/assets/img/postgres-scaling.jpeg" alt="Scaling Postgres" /> -->

    <!-- !!!OR!!! -->

    <!-- using "@", the "assets" configuration in nuxt.config.ts -->
    <!-- <img src="@/assets/img/postgres-scaling.jpeg" alt="Scaling Postgres" /> -->

    <!-- PUBLIC folder -->
    <!-- public: not processing, server for static assets (no compression, no resizing etc), publicly available to the internet (to share) -->

    <img src="/scaling-pg.jpeg" alt="Scaling Postgres" />

    <!-- Using SVGs -->
    <IconsBell class="text-red-500" />
  </div>
</template>

<style scoped></style>
