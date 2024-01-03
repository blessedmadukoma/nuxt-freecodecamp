// import { defineStore } from "@pinia/nuxt";

// Vue 2 Option
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Blessed" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// // Vue 3 Compostion API
// export const useCounterStore = defineStore("counter", {
//   const count = ref(0);
//   const name = ref("Blessed");
//   const doubleCount = computed(() => count.value * 2)

//   function increment() {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// });
