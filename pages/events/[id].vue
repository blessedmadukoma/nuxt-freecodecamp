<script lang="ts" setup>
  const nuxt = useNuxtApp();

  console.log(nuxt);
</script>

<template>
  <div>Events ID: {{ $route.params.id }}</div>
</template>

<style scoped></style>
