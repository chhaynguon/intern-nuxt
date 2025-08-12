// https://nuxt.com/docs/api/configuration/nuxt-config
import lara from "@primeuix/themes/lara";
import css from "~/assets/css/main.css";

export default defineNuxtConfig({
  devServer: {
    port: 3000,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@/assets/css/tailwind.css',
    'primeicons/primeicons.css',
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
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss', // optional
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
});
