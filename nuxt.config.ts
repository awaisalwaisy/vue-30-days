export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@nuxtjs/supabase", "@nuxthq/ui", "@pinia/nuxt"],
  plugins: [{ src: "~/plugins/simple-analytics.ts", ssr: false }],
});
