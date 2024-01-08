<script lang="ts" setup>
  // useFetch
  // const { data: products } = await useFetch("/api/products");

  // useLazyFetch
  // const { data: products, pending } = await useLazyFetch("/api/products");

  // console.log(products.value);

  // useAsyncData
  const { data: productCount, pending } = await useAsyncData("products", () =>
    $fetch("/api/asyncProducts")
  );

  console.log(productCount.value);

  const refresh = () => refreshNuxtData("products");
</script>

<template>
  <div>
    <!-- {{ pending ? "Loading" : products }} -->
    {{ pending ? "Loading" : productCount }}

    <button @click="refresh">Refresh</button>
  </div>
</template>

<style scoped></style>
