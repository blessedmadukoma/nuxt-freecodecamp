<script lang="ts" setup>
  definePageMeta({
    middleware: "profile",
  });

  const { sayHello } = useUtils();

  sayHello("blessed");
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Index Page</h1>
  </div>
</template>

<style scoped></style>
