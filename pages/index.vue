<script lang="ts" setup>
  // useHead({
  //   title: "Index page",
  //   meta: [
  //     {
  //       name: "description",
  //       content: "Index page",
  //     },
  //   ],
  //   bodyAttrs: {
  //     class: "test",
  //   },
  //   script: [
  //     {
  //       children: "console.log(`Hello world from index page`)",
  //     },
  //   ],
  // });

  const dynamicTitle = "title";

  definePageMeta({
    middleware: "profile",
  });

  const { sayHello } = useUtils();

  sayHello("blessed");

  // state management
  // using useState
  const counter = useCounter();

  // using Pinia
  import { useCounterStore } from "~/stores/myStore";
  const store = useCounterStore();

  console.log(store);

  // Server
  const response = await $fetch("/api/hello");

  console.log(response);
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <Head>
      <Title>My title</Title>
      <Meta name="description" :content="'This my dynamic ' + dynamicTitle" />
    </Head>
    <h1 class="text-teal-500">Index Page</h1>
  </div>
</template>

<style scoped></style>
