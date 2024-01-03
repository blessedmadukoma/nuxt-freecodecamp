<script lang="ts" setup>
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
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Index Page</h1>
  </div>

  <!-- State Management -->
  <div>
    <!-- 1. Using useState -->
    <div>
      <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
      </div>

      <Counter />
    </div>

    <div>
      <!-- 2. Using Pinia -->
    </div>
  </div>
</template>

<style scoped></style>
