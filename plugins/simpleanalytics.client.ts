import SimpleAnalytics from "simple-analytics-vue";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("SimpleAnalytics plugin loaded");

  nuxtApp.vueApp.use(SimpleAnalytics, {
    // skip: import.meta.env.NODE_ENV !== "production",
    // domain: "vue30days.netlify.app",
  });
});
