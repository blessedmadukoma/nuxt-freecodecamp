<script setup>
  const counter = useCounter();
</script>

<template>
  <div>
    Couter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
