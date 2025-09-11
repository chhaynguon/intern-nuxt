// https://nuxt.com/docs/api/configuration/nuxt-config
import lara from "@primeuix/themes/lara";

export default defineNuxtConfig({
  devServer: {
    port: 3000,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: [
    "@/assets/css/tailwind.css",
    "primeicons/primeicons.css",
    "~/assets/css/main.css",
  ],
  build: { transpile: ["primevue"] },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  modules: [
    "@primevue/nuxt-module", // optional
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
  ],
  primevue: {
    options: {
      theme: {
        preset: lara,
      },
    },
    components: {
      include: ["Button", "Dialog", "Paginator", "Toast"],
    },
  },
  builder: "vite",
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules/**"],
      },
      warmup: {
        clientFiles: [
          "./components/LargeComponent.vue",
          "./utils/complex-helper.js",
        ],
      },
    },
  },
  alias: {
    "@request": "/request/Service/service.master",
  },
});
