// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  hooks: {
    ready: (ctx) => console.log(ctx),
  },
  app: {
    head: {
      title: "My app",
      meta: [
        {
          name: "description",
          content: "This is my Nuxt 3 course",
        },
      ],
    },
  },
  devtools: { enabled: true },
  alias: {
    // "@": resolve(__dirname, "src"),
    // or
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
